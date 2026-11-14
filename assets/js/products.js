/**
 * Katalog Produk "Sistem"
 * Sumber data: https://kafeinarts.web.id/data/products/<slug>.json
 * (halaman publik: https://kafeinarts.web.id/products/)
 *
 * Catatan: brand "Kafeinarts" pada data sumber di-rebrand menjadi "Sistem".
 * Data di-embed di sini sebagai fallback agar halaman tetap bekerja walau
 * fetch live gagal (offline / CORS / jaringan lambat). Jika fetch live
 * berhasil, kartu produk akan diperbarui dengan data terbaru secara otomatis.
 */
(function () {
  'use strict';

  var SOURCE_BASE = 'https://kafeinarts.web.id/data/products';
  var PRODUCT_PAGE = 'https://kafeinarts.web.id/products/';

  var SLUGS = [
    'erp', 'simrs', 'lms', 'cms', 'event-management', 'point-of-sale',
    'company-profile', 'e-commerce', 'landing-page', 'web-profile', 'undangan-digital'
  ];

  // Snapshot (18 Nov 2026) — sudah di-rebrand "Kafeinarts" -> "Sistem"
  var FALLBACK = {
    'erp': { name: 'Sistem ERP', tagline: 'Kelola seluruh operasional bisnis dalam satu platform terpadu.', icon: 'bi-diagram-3', color: '#2563eb', category: 'system', highlights: ['10+ modul terintegrasi', 'Laporan real-time', 'Multi-cabang & multi-gudang'] },
    'simrs': { name: 'Sistem SIMRS', tagline: 'Sistem Informasi Manajemen Rumah Sakit yang tepat guna.', icon: 'bi-hospital', color: '#0d9488', category: 'system', highlights: ['Standar SATUSEHAT', 'Bridging BPJS VClaim', 'RME terintegrasi'] },
    'lms': { name: 'Sistem LMS', tagline: 'Platform pembelajaran online untuk sekolah dan korporat.', icon: 'bi-mortarboard', color: '#7c3aed', category: 'system', highlights: ['Kelas virtual & live class', 'Kuis dengan penilaian otomatis', 'Sertifikat terbit otomatis'] },
    'cms': { name: 'Sistem CMS', tagline: 'Kelola konten website tanpa perlu menyentuh kode.', icon: 'bi-layout-text-window-reverse', color: '#ea580c', category: 'system', highlights: ['Editor visual WYSIWYG', 'Pustaka media rapi', 'SEO friendly'] },
    'event-management': { name: 'Sistem EMS', tagline: 'Atur event dari pendaftaran hingga sertifikat peserta.', icon: 'bi-calendar2-event', color: '#db2777', category: 'system', highlights: ['QR check-in 3 detik', 'Payment gateway QRIS', 'Sertifikat peserta otomatis'] },
    'point-of-sale': { name: 'Point of Sales', tagline: 'Kasir cepat untuk retail, F&B, dan multi-outlet.', icon: 'bi-shop', color: '#0f766e', category: 'system', highlights: ['Mode offline-first', 'Struk thermal', 'Laporan real-time'] },
    'company-profile': { name: 'Website Company Profile', tagline: 'Wajah profesional perusahaan Anda di dunia digital.', icon: 'bi-buildings', color: '#0f766e', category: 'website', highlights: ['Selesai 2–3 minggu', 'Termasuk CMS', 'Terhubung WhatsApp'] },
    'e-commerce': { name: 'Website E-Commerce', tagline: 'Toko online lengkap dengan pembayaran & pengiriman.', icon: 'bi-cart3', color: '#be123c', category: 'website', highlights: ['Payment gateway penuh', 'Ongkir otomatis', 'Dashboard admin lengkap'] },
    'landing-page': { name: 'Landing Page', tagline: 'Satu halaman yang fokus pada konversi penjualan.', icon: 'bi-rocket-takeoff', color: '#d97706', category: 'website', highlights: ['Live 1–2 minggu', 'Mobile first', 'Siap pixel iklan'] },
    'web-profile': { name: 'Web Profil Bisnis', tagline: 'Situs ringkas untuk personal brand & UMKM.', icon: 'bi-person-vcard', color: '#4f46e5', category: 'website', highlights: ['Jadi 1 minggu', 'Investasi hemat', 'Order via WhatsApp'] },
    'undangan-digital': { name: 'Website Undangan Digital', tagline: 'Undangan pernikahan & acara yang elegan dibuka dari HP.', icon: 'bi-envelope-heart', color: '#e11d48', category: 'website', highlights: ['Tayang 2–5 hari', 'RSVP & buku tamu', 'Musik & live streaming'] }
  };

  function rebrand(text) {
    return String(text || '').replace(/Kafeinarts/gi, 'Sistem');
  }


  function normalize(json, slug) {
    var meta = (json && json.meta) || {};
    var hero = (json && json.hero) || {};
    return {
      slug: slug,
      name: rebrand(meta.name || hero.name || slug),
      tagline: rebrand(hero.tagline || ''),
      icon: meta.icon || hero.icon || 'bi-box-seam',
      color: meta.color || '#059669',
      category: meta.category === 'system' ? 'system' : 'website',
      highlights: Array.isArray(hero.highlights) ? hero.highlights.slice(0, 3).map(rebrand) : [],
    };
  }


  function buildList(overrides) {
    return SLUGS.map(function (slug) {
      var snap = FALLBACK[slug];
      var live = overrides && overrides[slug];
      var merged = live ? Object.assign({}, snap, live, { slug: slug }) : Object.assign({ slug: slug }, snap);
      merged.detailUrl = PRODUCT_PAGE + slug;
      return merged;
    });
  }

  function fetchLive() {
    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 6000);
    var jobs = SLUGS.map(function (slug) {
      return fetch(SOURCE_BASE + '/' + slug + '.json', { signal: controller.signal, cache: 'no-cache' })
        .then(function (res) { return res.ok ? res.json() : null; })
        .then(function (json) { return json ? normalize(json, slug) : null; })
        .catch(function () { return null; });
    });
    return Promise.all(jobs).then(function (results) {
      clearTimeout(timer);
      var out = {};
      results.forEach(function (r, i) { if (r) out[SLUGS[i]] = r; });
      return out;
    });
  }

  window.SistemKatalog = {
    getList: function () { return buildList(null); },
    loadFresh: function () { return fetchLive().then(function (overrides) { return buildList(overrides); }); }
  };
})();
