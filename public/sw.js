/**
 * Arif Permana — Service Worker (PWA)
 * Strategi:
 *  - Navigasi (mode "navigate"): network-first → cache → fallback '.html' → '/offline.html'
 *  - Aset statis (/_next, /assets): cache-first, populate on miss
 *  - Hanya untuk same-origin & method GET
 */
const VERSION = 'v2-2026-11-15';
const PAGES_CACHE = `arif-pages-${VERSION}`;
const STATIC_CACHE = `arif-static-${VERSION}`;

const PRECACHE_PAGES = ['/', '/about.html', '/resume.html', '/services.html', '/contact.html', '/offline.html'];
const PRECACHE_STATIC = [
  '/assets/img/favicon.png',
  '/assets/img/icon-192.png',
  '/assets/img/icon-512.png',
  '/assets/img/og-image.png',
  '/assets/vendor/bootstrap-icons/bootstrap-icons.min.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const pages = await caches.open(PAGES_CACHE);
      await Promise.allSettled(PRECACHE_PAGES.map((u) => pages.add(new Request(u, { cache: 'reload' }))));
      const statik = await caches.open(STATIC_CACHE);
      await Promise.allSettled(PRECACHE_STATIC.map((u) => statik.add(new Request(u, { cache: 'reload' }))));
      self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => !k.endsWith(VERSION)).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

async function networkFirstPage(request) {
  const cache = await caches.open(PAGES_CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    if (cached) return cached;
    // fallback: coba varian .html (untuk server statis file-based)
    try {
      const url = new URL(request.url);
      if (!/\.[a-z0-9]+$/i.test(url.pathname)) {
        const variant = await cache.match(url.pathname + '.html');
        if (variant) return variant;
      }
    } catch (_) {}
    const offline = await cache.match('/offline.html');
    if (offline) return offline;
    return new Response('<h1>Offline</h1><p>Koneksi tidak tersedia.</p>', { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 503 });
  }
}

async function cacheFirstStatic(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (e) {
    return cached || Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstPage(request));
    return;
  }
  if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/assets/')) {
    event.respondWith(cacheFirstStatic(request));
  }
});
