/**
 * Katalog produk "Sistem" (rebrand "Kafeinarts" → "Sistem")
 * Sumber live: https://kafeinarts.web.id/data/products/<slug>.json
 * Fallback: snapshot di bawah (agar build & first paint tetap bekerja).
 * Tanpa harga — negosiasi dilakukan lewat WhatsApp.
 */

export const PRODUCT_PAGE = 'https://kafeinarts.web.id/products';
const SOURCE_BASE = 'https://kafeinarts.web.id/data/products';

export const SLUGS = [
  'erp', 'simrs', 'lms', 'cms', 'event-management', 'point-of-sale',
  'company-profile', 'e-commerce', 'landing-page', 'web-profile', 'undangan-digital',
];

export const FALLBACK_PRODUCTS = [
  { slug: 'erp', name: 'Sistem ERP', tagline: 'Kelola seluruh operasional bisnis dalam satu platform terpadu.', icon: 'bi-diagram-3', color: '#2563eb', category: 'system', highlights: ['10+ modul terintegrasi', 'Laporan real-time', 'Multi-cabang & multi-gudang'] },
  { slug: 'simrs', name: 'Sistem SIMRS', tagline: 'Sistem Informasi Manajemen Rumah Sakit yang tepat guna.', icon: 'bi-hospital', color: '#0d9488', category: 'system', highlights: ['Standar SATUSEHAT', 'Bridging BPJS VClaim', 'RME terintegrasi'] },
  { slug: 'lms', name: 'Sistem LMS', tagline: 'Platform pembelajaran online untuk sekolah dan korporat.', icon: 'bi-mortarboard', color: '#7c3aed', category: 'system', highlights: ['Kelas virtual & live class', 'Kuis otomatis', 'Sertifikat terbit otomatis'] },
  { slug: 'cms', name: 'Sistem CMS', tagline: 'Kelola konten website tanpa perlu menyentuh kode.', icon: 'bi-layout-text-window-reverse', color: '#ea580c', category: 'system', highlights: ['Editor visual WYSIWYG', 'Pustaka media rapi', 'SEO friendly'] },
  { slug: 'event-management', name: 'Sistem EMS', tagline: 'Atur event dari pendaftaran hingga sertifikat peserta.', icon: 'bi-calendar2-event', color: '#db2777', category: 'system', highlights: ['QR check-in 3 detik', 'Payment gateway QRIS', 'Sertifikat peserta otomatis'] },
  { slug: 'point-of-sale', name: 'Point of Sales', tagline: 'Kasir cepat untuk retail, F&B, dan multi-outlet.', icon: 'bi-shop', color: '#0f766e', category: 'system', highlights: ['Mode offline-first', 'Struk thermal', 'Laporan real-time'] },
  { slug: 'company-profile', name: 'Website Company Profile', tagline: 'Wajah profesional perusahaan Anda di dunia digital.', icon: 'bi-buildings', color: '#0f766e', category: 'website', highlights: ['Selesai 2–3 minggu', 'Termasuk CMS', 'Terhubung WhatsApp'] },
  { slug: 'e-commerce', name: 'Website E-Commerce', tagline: 'Toko online lengkap dengan pembayaran & pengiriman.', icon: 'bi-cart3', color: '#be123c', category: 'website', highlights: ['Payment gateway penuh', 'Ongkir otomatis', 'Dashboard admin lengkap'] },
  { slug: 'landing-page', name: 'Landing Page', tagline: 'Satu halaman yang fokus pada konversi penjualan.', icon: 'bi-rocket-takeoff', color: '#d97706', category: 'website', highlights: ['Live 1–2 minggu', 'Mobile first', 'Siap pixel iklan'] },
  { slug: 'web-profile', name: 'Web Profil Bisnis', tagline: 'Situs ringkas untuk personal brand & UMKM.', icon: 'bi-person-vcard', color: '#4f46e5', category: 'website', highlights: ['Jadi 1 minggu', 'Investasi hemat', 'Order via WhatsApp'] },
  { slug: 'undangan-digital', name: 'Website Undangan Digital', tagline: 'Undangan pernikahan & acara yang elegan dibuka dari HP.', icon: 'bi-envelope-heart', color: '#e11d48', category: 'website', highlights: ['Tayang 2–5 hari', 'RSVP & buku tamu', 'Musik & live streaming'] },
];

export function getList() {
  return FALLBACK_PRODUCTS.map((p) => ({ ...p, detailUrl: `${PRODUCT_PAGE}/${p.slug}` }));
}

function rebrand(text) {
  return String(text || '').replace(/Kafeinarts/gi, 'Sistem');
}

function normalize(json, slug) {
  const meta = (json && json.meta) || {};
  const hero = (json && json.hero) || {};
  return {
    slug,
    name: rebrand(meta.name || hero.name || slug),
    tagline: rebrand(hero.tagline || ''),
    icon: meta.icon || hero.icon || 'bi-box-seam',
    color: meta.color || '#047857',
    category: meta.category === 'system' ? 'system' : 'website',
    highlights: Array.isArray(hero.highlights) ? hero.highlights.slice(0, 3).map(rebrand) : [],
    detailUrl: `${PRODUCT_PAGE}/${slug}`,
  };
}

export async function loadFresh() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const results = await Promise.all(
      SLUGS.map((slug) =>
        fetch(`${SOURCE_BASE}/${slug}.json`, { signal: controller.signal, cache: 'no-cache' })
          .then((res) => (res.ok ? res.json() : null))
          .then((json) => (json ? normalize(json, slug) : null))
          .catch(() => null)
      )
    );
    const merged = FALLBACK_PRODUCTS.map((p, i) => results[i] || { ...p, detailUrl: `${PRODUCT_PAGE}/${p.slug}` });
    return merged;
  } finally {
    clearTimeout(timer);
  }
}
