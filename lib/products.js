/**
 * Katalog produk "Sistem" (rebrand "Kafeinarts" → "Sistem").
 * Isi detail produk ditulis ulang (bukan salinan mentah dari sumber) —
 * sumber harga hanya untuk PDF ratecard (harga dasar termurah), TIDAK ditampilkan di UI.
 * Harga final disepakati saat project berjalan, via WhatsApp.
 */

export const PRODUCT_PAGE = "https://kafeinarts.web.id/products";
const SOURCE_BASE = "https://kafeinarts.web.id/data/products";

export const SLUGS = [
  "erp",
  "simrs",
  "lms",
  "cms",
  "event-management",
  "point-of-sale",
  "company-profile",
  "e-commerce",
  "landing-page",
  "web-profile",
  "undangan-digital",
];

export const FALLBACK_PRODUCTS = [
  {
    slug: "erp",
    name: "Sistem ERP",
    category: "system",
    color: "#2563eb",
    icon: "bi-diagram-3",
    tagline: "Kelola seluruh operasional bisnis dalam satu platform terpadu.",
    highlights: [
      "10+ modul terintegrasi",
      "Laporan real-time",
      "Multi-cabang & multi-gudang",
    ],
    description:
      "Sistem ERP yang menyatukan keuangan, inventori, pembelian, penjualan, dan SDM dalam satu dasbor terpusat — sehingga keputusan bisnis diambil berdasarkan data yang akurat dan real-time, bukan tebakan.",
    idealFor: [
      "Perusahaan menengah yang mulai kewalahan spreadsheet",
      "Bisnis multi-cabang dengan gudang terpisah",
      "Manajemen yang butuh laporan harian otomatis",
    ],
    basePrice: 2500000,
    features: [
      {
        icon: "bi-cash-coin",
        label: "Modul Keuangan",
        desc: "Kas, bank, jurnal otomatis, dan laporan laba rugi real-time.",
      },
      {
        icon: "bi-box-seam",
        label: "Inventori & Gudang",
        desc: "Stok masuk/keluar, opname, dan mutasi antar gudang.",
      },
      {
        icon: "bi-cart-check",
        label: "Pembelian & Penjualan",
        desc: "PO, faktur, dan retur dengan approval berjenjang.",
      },
      {
        icon: "bi-people",
        label: "SDM & Absensi",
        desc: "Data karyawan, gaji, lembur, dan cuti dalam satu sistem.",
      },
      {
        icon: "bi-graph-up-arrow",
        label: "Laporan & BI",
        desc: "Dasbor eksekutif dan ekspor Excel/PDF kapan pun.",
      },
      {
        icon: "bi-building-gear",
        label: "Multi-Cabang",
        desc: "Konsolidasi laporan lintas cabang dan gudang.",
      },
      {
        icon: "bi-shield-lock",
        label: "Hak Akses & Audit",
        desc: "Role per pengguna dan audit trail setiap perubahan.",
      },
      {
        icon: "bi-cloud-arrow-up",
        label: "Hosting & Backup",
        desc: "Deployment VPS + backup otomatis harian.",
      },
    ],
  },
  {
    slug: "simrs",
    name: "Sistem SIMRS",
    category: "system",
    color: "#0d9488",
    icon: "bi-hospital",
    tagline: "Sistem Informasi Manajemen Rumah Sakit yang tepat guna.",
    highlights: [
      "Standar SATUSEHAT",
      "Bridging BPJS VClaim",
      "RME terintegrasi",
    ],
    description:
      "SIMRS yang menyatukan pendaftaran, rawat jalan, rawat inap, farmasi, laboratorium, hingga kasir dalam satu alur kerja — satu rekam medis elektronik yang mengalir otomatis ke setiap unit pelayanan.",
    idealFor: [
      "Rumah sakit tipe C/D yang ingin go-digital",
      "Klinik pratama & utama",
      "Puskesmas & labkesda",
      "Tempat praktek mandiri dokter & bidan",
    ],
    basePrice: 4500000,
    features: [
      {
        icon: "bi-person-badge",
        label: "Pendaftaran & Antrean",
        desc: "Antrean online terintegrasi Mobile JKN dan loket.",
      },
      {
        icon: "bi-file-earmark-medical",
        label: "Rekam Medis Elektronik",
        desc: "RME terstruktur, tanda tangan digital, dan alur IGD.",
      },
      {
        icon: "bi-prescription2",
        label: "Farmasi",
        desc: "E-resep, stok obat, dan formulir resep otomatis.",
      },
      {
        icon: "bi-droplet-half",
        label: "Laboratorium",
        desc: "Order lab, hasil keluar, dan cetakan otomatis.",
      },
      {
        icon: "bi-receipt-cutoff",
        label: "Kasir & Billing",
        desc: "Klaim BPJS (VClaim), kuitansi, dan laporan keuangan.",
      },
      {
        icon: "bi-shield-check",
        label: "SATUSEHAT & Integrasi",
        desc: "Bridging SATUSEHAT, BPJS VClaim, dan sistem Kemenkes.",
      },
      {
        icon: "bi-bar-chart-line",
        label: "Laporan Mutu & RSMM",
        desc: "Indikator mutu, LOS, BOR, dan rekap otomatis.",
      },
      {
        icon: "bi-person-gear",
        label: "Modul Praktek Mandiri",
        desc: "Versi ringkas untuk praktek dokter & bidan.",
      },
    ],
  },
  {
    slug: "lms",
    name: "Sistem LMS",
    category: "system",
    color: "#7c3aed",
    icon: "bi-mortarboard",
    tagline: "Platform pembelajaran online untuk sekolah dan korporat.",
    highlights: [
      "Kelas virtual & live class",
      "Kuis dengan penilaian otomatis",
      "Sertifikat terbit otomatis",
    ],
    description:
      "Learning Management System untuk sekolah, kampus, korporat, atau komunitas — kelas terstruktur, live session, kuis bernilai otomatis, dan sertifikat terbit sendiri saat siswa lulus.",
    idealFor: [
      "Sekolah & kampus yang ingin hybrid learning",
      "Perusahaan dengan onboarding/training internal",
      "Lembaga kursus & pelatihan",
    ],
    basePrice: 1250000,
    features: [
      {
        icon: "bi-collection-play",
        label: "Kelas & Modul",
        desc: "Video, materi, tugas, dan progres belajar per siswa.",
      },
      {
        icon: "bi-broadcast",
        label: "Live Class & Webinar",
        desc: "Sesi langsung terjadwal dengan rekaman tersimpan.",
      },
      {
        icon: "bi-ui-checks-grid",
        label: "Kuis & Penilaian",
        desc: "Soal acak, timer, dan koreksi otomatis.",
      },
      {
        icon: "bi-patch-check",
        label: "Sertifikat Otomatis",
        desc: "Sertifikat terbit sendiri saat kelulusan, bisa diverifikasi.",
      },
      {
        icon: "bi-people",
        label: "Manajemen Peserta",
        desc: "Enrollment, grup, dan progress tracking.",
      },
      {
        icon: "bi-chat-square-dots",
        label: "Forum & Diskusi",
        desc: "Tanya-jawab per kelas dan notifikasi pengumuman.",
      },
      {
        icon: "bi-graph-up",
        label: "Laporan Belajar",
        desc: "Nilai, kehadiran, dan kelulusan per kohort.",
      },
      {
        icon: "bi-phone",
        label: "Mobile Friendly",
        desc: "Bisa diakses dari HP tanpa aplikasi terpisah.",
      },
    ],
  },
  {
    slug: "cms",
    name: "Sistem CMS",
    category: "system",
    color: "#ea580c",
    icon: "bi-layout-text-window-reverse",
    tagline: "Kelola konten website tanpa perlu menyentuh kode.",
    highlights: ["Editor visual WYSIWYG", "Pustaka media rapi", "SEO friendly"],
    description:
      "CMS yang membuat siapa pun bisa mengelola artikel, halaman, dan media — tanpa coding. Sempurna untuk perusahaan yang ingin mandiri update konten tanpa menunggu developer.",
    idealFor: [
      "Perusahaan dengan tim konten internal",
      "Portal berita & blog korporat",
      "Instansi yang rutin publish informasi",
    ],
    basePrice: 750000,
    features: [
      {
        icon: "bi-pencil-square",
        label: "Editor WYSIWYG",
        desc: "Tulis & lihat hasilnya langsung — tanpa format aneh-aneh.",
      },
      {
        icon: "bi-images",
        label: "Pustaka Media",
        desc: "Semua gambar/dokumen tersimpan rapi dan mudah dicari.",
      },
      {
        icon: "bi-search",
        label: "SEO On-Page",
        desc: "Meta title/description, sitemap, dan struktur heading benar.",
      },
      {
        icon: "bi-person-badge",
        label: "Multi-Penulis",
        desc: "Role admin, editor, dan penulis dengan hak akses berbeda.",
      },
      {
        icon: "bi-calendar-week",
        label: "Jadwal Terbit",
        desc: "Antrian & jadwal publikasi artikel otomatis.",
      },
      {
        icon: "bi-translate",
        label: "Multi-Bahasa",
        desc: "Dukungan lebih dari satu bahasa (opsional).",
      },
      {
        icon: "bi-bell",
        label: "Notifikasi Konten",
        desc: "Email/WA notifikasi saat artikel tayang.",
      },
      {
        icon: "bi-clock-history",
        label: "Versioning",
        desc: "Riwayat revisi artikel — aman dari salah edit.",
      },
    ],
  },
  {
    slug: "event-management",
    name: "Sistem EMS",
    category: "system",
    color: "#db2777",
    icon: "bi-calendar2-event",
    tagline: "Atur event dari pendaftaran hingga sertifikat peserta.",
    highlights: [
      "QR check-in 3 detik",
      "Payment gateway QRIS",
      "Sertifikat peserta otomatis",
    ],
    description:
      "Event Management System: buat event, jual tiket, check-in peserta via QR dalam 3 detik, hingga sertifikat terbit otomatis — cocok untuk seminar, lomba, konser, dan acara komunitas.",
    idealFor: [
      "EO & panitia acara internal",
      "Event kampus & komunitas",
      "Seminar/webinar berbayar dengan sertifikat",
    ],
    basePrice: 1500000,
    features: [
      {
        icon: "bi-ticket-perforated",
        label: "Tiket & Registrasi",
        desc: "Formulir pendaftaran kustom dan kategori tiket.",
      },
      {
        icon: "bi-qr-code-scan",
        label: "QR Check-In",
        desc: "Scan QR di pintu masuk — antrean mengalir cepat.",
      },
      {
        icon: "bi-credit-card-2-front",
        label: "Payment Gateway",
        desc: "Pembayaran QRIS/transfer dengan konfirmasi otomatis.",
      },
      {
        icon: "bi-patch-check",
        label: "Sertifikat Otomatis",
        desc: "Sertifikat digital terbit otomatis per peserta.",
      },
      {
        icon: "bi-envelope-paper",
        label: "Email & WA Notifikasi",
        desc: "Pengingat H-1 dan info perubahan acara.",
      },
      {
        icon: "bi-people-fill",
        label: "Data Peserta",
        desc: "Database peserta, impor/ekspor CSV, dan filter.",
      },
      {
        icon: "bi-graph-up",
        label: "Laporan Event",
        desc: "Statistik peserta, penjualan, dan kehadiran.",
      },
      {
        icon: "bi-megaphone",
        label: "Landing Page Event",
        desc: "Halaman promo event yang siap pasang iklan.",
      },
    ],
  },
  {
    slug: "point-of-sale",
    name: "Point of Sales",
    category: "system",
    color: "#0f766e",
    icon: "bi-shop",
    tagline: "Kasir cepat untuk retail, F&B, dan multi-outlet.",
    highlights: ["Mode offline-first", "Struk thermal", "Laporan real-time"],
    description:
      "Aplikasi kasir yang cepat: tetap bisa transaksi walau internet mati, cetak struk thermal, dan lihat omzet semua outlet dari mana pun — dirancang untuk F&B dan retail yang sibuk.",
    idealFor: [
      "F&B (kedai kopi, resto, franchise)",
      "Retail & minimarket",
      "UMKM yang ingin go-digital & punya laporan",
    ],
    basePrice: 1500000,
    features: [
      {
        icon: "bi-wifi-off",
        label: "Offline-First",
        desc: "Transaksi tetap jalan tanpa internet, sinkron otomatis saat online.",
      },
      {
        icon: "bi-receipt",
        label: "Struk Thermal & PDF",
        desc: "Cetak langsung ke printer thermal atau kirim PDF ke WA.",
      },
      {
        icon: "bi-box-seam",
        label: "Master Menu & SKU",
        desc: "Kategori, varian, dan stok dengan peringatan menipis.",
      },
      {
        icon: "bi-person-badge",
        label: "Multi-Kasir & Shift",
        desc: "Absensi shift, otorisasi void, dan laporan per kasir.",
      },
      {
        icon: "bi-shop-window",
        label: "Multi-Outlet",
        desc: "Konsolidasi laporan semua cabang dalam satu dasbor.",
      },
      {
        icon: "bi-gift",
        label: "Promo & Member",
        desc: "Diskon, voucher, dan loyalty point pelanggan.",
      },
      {
        icon: "bi-graph-up",
        label: "Laporan Real-Time",
        desc: "Omzet, menu terlaris, dan jam sibuk — kirim WA harian.",
      },
      {
        icon: "bi-phone",
        label: "Tablet & Desktop",
        desc: "Jalan di tablet kasir dan komputer admin.",
      },
    ],
  },
  {
    slug: "company-profile",
    name: "Website Company Profile",
    category: "website",
    color: "#0f766e",
    icon: "bi-buildings",
    tagline: "Wajah profesional perusahaan Anda di dunia digital.",
    highlights: ["Selesai 2–3 minggu", "Termasuk CMS", "Terhubung WhatsApp"],
    description:
      "Website company profile yang meyakinkan sejak menit pertama — profil, layanan, portofolio, sampai tombol WhatsApp — plus CMS agar tim Anda bisa update konten sendiri.",
    idealFor: [
      "Perusahaan yang butuh kredibilitas di Google",
      "Kontraktor, supplier, distributor",
      "Yayasan & klinik swasta",
    ],
    basePrice: 1250000,
    features: [
      {
        icon: "bi-building",
        label: "Profil & Visi Misi",
        desc: "Narasi identitas perusahaan yang kredibel.",
      },
      {
        icon: "bi-briefcase",
        label: "Layanan & Portofolio",
        desc: "Pajangan layanan dan proyek terbaik Anda.",
      },
      {
        icon: "bi-chat-dots",
        label: "Kontak & WhatsApp",
        desc: "Form kontak + tombol WhatsApp langsung.",
      },
      {
        icon: "bi-search",
        label: "SEO Dasar",
        desc: "Meta tag, struktur heading, dan kecepatan muat.",
      },
      {
        icon: "bi-pencil-square",
        label: "CMS Mandiri",
        desc: "Edit teks/gambar sendiri tanpa developer.",
      },
      {
        icon: "bi-translate",
        label: "Multi-Bahasa",
        desc: "ID–EN (opsional).",
      },
      {
        icon: "bi-graph-up",
        label: "Google Analytics",
        desc: "Terpasang dan terkonfigurasi.",
      },
      {
        icon: "bi-shield-check",
        label: "Domain & SSL",
        desc: "Domain .com + hosting 1 tahun termasuk.",
      },
    ],
  },
  {
    slug: "e-commerce",
    name: "Website E-Commerce",
    category: "website",
    color: "#be123c",
    icon: "bi-cart3",
    tagline: "Toko online lengkap dengan pembayaran & pengiriman.",
    highlights: [
      "Payment gateway penuh",
      "Ongkir otomatis",
      "Dashboard admin lengkap",
    ],
    description:
      "Toko online yang menjual 24/7: katalog rapi, checkout mulus, pembayaran otomatis via payment gateway, ongkir dihitung otomatis, plus dashboard admin untuk pesanan dan stok.",
    idealFor: [
      "Brand lokal yang ingin go-online",
      "Distributor & grosir",
      "Toko fisik yang ekspansi ke marketplace & web sendiri",
    ],
    basePrice: 2500000,
    features: [
      {
        icon: "bi-grid",
        label: "Katalog & Varian",
        desc: "Ribuan SKU, varian warna/ukuran, dan filter cerdas.",
      },
      {
        icon: "bi-cart-check",
        label: "Checkout Mulus",
        desc: "Guest checkout, voucher, dan ongkir kurir otomatis.",
      },
      {
        icon: "bi-credit-card",
        label: "Payment Gateway",
        desc: "QRIS, VA, e-wallet, dan kartu kredit.",
      },
      {
        icon: "bi-truck",
        label: "Integrasi Kurir",
        desc: "Cek ongkir & resi otomatis (JNE, J&T, SiCepat, dll).",
      },
      {
        icon: "bi-box-seam",
        label: "Manajemen Stok",
        desc: "Stok berkurang otomatis & notifikasi menipis.",
      },
      {
        icon: "bi-person-gear",
        label: "Dashboard Admin",
        desc: "Pesanan, pelanggan, dan laporan penjualan.",
      },
      {
        icon: "bi-megaphone",
        label: "Promo & Voucher",
        desc: "Diskon produk/order dan flash sale terjadwal.",
      },
      {
        icon: "bi-phone",
        label: "Mobile First",
        desc: "Belanja nyaman dari HP — 70% traffic e-comm.",
      },
    ],
  },
  {
    slug: "landing-page",
    name: "Landing Page",
    category: "website",
    color: "#d97706",
    icon: "bi-rocket-takeoff",
    tagline: "Satu halaman yang fokus pada konversi penjualan.",
    highlights: ["Live 1–2 minggu", "Mobile first", "Siap pixel iklan"],
    description:
      "Landing page dengan satu tujuan: mengubah pengunjung jadi pembeli/leads — headline tajam, bukti sosial, dan CTA yang jelas, siap dipasang Facebook/Google Ads besok.",
    idealFor: [
      "Iklan berbayar (FB/IG/Google Ads)",
      "Launching produk baru",
      "Webinar & pengumpulan leads",
    ],
    basePrice: 750000,
    features: [
      {
        icon: "bi-bullseye",
        label: "Copywriting Framework",
        desc: "AIDA/PAS — headline, benefit, dan CTA yang menjual.",
      },
      {
        icon: "bi-phone",
        label: "Mobile First",
        desc: "Load < 2 detik di HP — konversi tidak menunggu.",
      },
      {
        icon: "bi-bullseye",
        label: "Pixel & Analytics",
        desc: "FB Pixel, GA4, dan event tracking terpasang.",
      },
      {
        icon: "bi-chat-dots",
        label: "CTA ke WhatsApp",
        desc: "Pengunjung langsung chat — leads masuk rapi.",
      },
      {
        icon: "bi-star",
        label: "Social Proof",
        desc: "Testimoni, logo klien, dan angka yang meyakinkan.",
      },
      {
        icon: "bi-ui-checks",
        label: "A/B Testing Ready",
        desc: "Dua varian headline/tombol untuk diuji.",
      },
      {
        icon: "bi-search",
        label: "SEO On-Page",
        desc: "Meta tag dan struktur konten yang benar.",
      },
      {
        icon: "bi-lightning",
        label: "Cepat & Ringan",
        desc: "Static/Next.js — skor PageSpeed tinggi.",
      },
    ],
  },
  {
    slug: "web-profile",
    name: "Web Profil Bisnis",
    category: "website",
    color: "#4f46e5",
    icon: "bi-person-vcard",
    tagline: "Situs ringkas untuk personal brand & UMKM.",
    highlights: ["Jadi 1 minggu", "Investasi hemat", "Order via WhatsApp"],
    description:
      "Profil digital ringkas untuk UMKM, freelancer, dan profesional — satu halaman yang langsung menjawab siapa Anda, apa yang Anda tawarkan, dan cara menghubungi Anda.",
    idealFor: [
      "UMKM & warung/toko yang butuh kehadiran online",
      "Freelancer & pekerja lepas",
      "Personal brand & praktisi",
    ],
    basePrice: 350000,
    features: [
      {
        icon: "bi-person",
        label: "Profil Singkat",
        desc: "Bio, foto, dan tagline yang menjual.",
      },
      {
        icon: "bi-briefcase",
        label: "Produk & Jasa",
        desc: "Katalog ringkas dengan harga/CTA.",
      },
      {
        icon: "bi-link-45deg",
        label: "Link & Kontak",
        desc: "WA, email, Instagram, Maps — semua jadi satu.",
      },
      {
        icon: "bi-phone",
        label: "Mobile First",
        desc: "Ringan dan rapi di semua HP.",
      },
      {
        icon: "bi-search",
        label: "SEO Dasar",
        desc: "Agar mudah ditemukan tetangga Anda di Google.",
      },
      {
        icon: "bi-share",
        label: "Siap Dibagikan",
        desc: "Preview WhatsApp/Instagram yang menarik.",
      },
      {
        icon: "bi-rocket",
        label: "Cepat Jadi",
        desc: "Go-live 1 minggu sejak konten lengkap.",
      },
      {
        icon: "bi-whatsapp",
        label: "Order via WA",
        desc: "Setiap CTA mengarah ke chat Anda.",
      },
    ],
  },
  {
    slug: "undangan-digital",
    name: "Website Undangan Digital",
    category: "website",
    color: "#e11d48",
    icon: "bi-envelope-heart",
    tagline: "Undangan pernikahan & acara yang elegan dibuka dari HP.",
    highlights: [
      "Tayang 2–5 hari",
      "RSVP & buku tamu",
      "Musik & live streaming",
    ],
    description:
      "Undangan online yang elegan: dibuka sekali klik, lengkap dengan musik, galeri foto, RSVP dengan buku tamu, dan link live streaming — tampil mewah tanpa biaya cetak.",
    idealFor: [
      "Pernikahan & lamaran",
      "Khitanan, ulang tahun, syukuran",
      "Acara korporat & komunitas",
    ],
    basePrice: 150000,
    features: [
      {
        icon: "bi-envelope-heart",
        label: "Template Elegan",
        desc: "Beberapa tema premium — pilih sesuai selera.",
      },
      {
        icon: "bi-music-note-beamed",
        label: "Musik & Animasi",
        desc: "Autoplay music + animasi lembut saat discroll.",
      },
      {
        icon: "bi-camera",
        label: "Galeri & Cerita",
        desc: "Foto prewedding dan timeline cinta.",
      },
      {
        icon: "bi-ui-checks",
        label: "RSVP & Buku Tamu",
        desc: "Ucapan & konfirmasi kehadiran tersimpan otomatis.",
      },
      {
        icon: "bi-geo-alt",
        label: "Peta & Kalender",
        desc: "Tombol Maps dan save-to-calendar.",
      },
      {
        icon: "bi-broadcast",
        label: "Live Streaming",
        desc: "Embed YouTube untuk tamu yang tidak bisa hadir.",
      },
      {
        icon: "bi-box-seam",
        label: "Kirim Digital",
        desc: "Satu link untuk disebar di WA grup.",
      },
      {
        icon: "bi-cash-gift",
        label: "Amplop Digital",
        desc: "Info rekening untuk hadiah (opsional).",
      },
    ],
  },
];

export function getList() {
  return FALLBACK_PRODUCTS.map((p) => ({
    ...p,
    detailUrl: `${PRODUCT_PAGE}/${p.slug}`,
  }));
}

function rebrand(text) {
  return String(text || "").replace(/Kafeinarts/gi, "Sistem");
}

function normalize(json, slug) {
  const meta = (json && json.meta) || {};
  const hero = (json && json.hero) || {};
  const base = FALLBACK_PRODUCTS.find((p) => p.slug === slug);
  return {
    slug,
    ...base,
    name: rebrand(meta.name || hero.name || base?.name || slug),
    tagline: rebrand(hero.tagline || base?.tagline || ""),
    icon: meta.icon || hero.icon || base?.icon || "bi-box-seam",
    color: meta.color || base?.color || "#047857",
    category:
      meta.category === "system" ? "system" : base?.category || "website",
    highlights: Array.isArray(hero.highlights)
      ? hero.highlights.slice(0, 3).map(rebrand)
      : base?.highlights || [],
    detailUrl: `${PRODUCT_PAGE}/${slug}`,
  };
}

export async function loadFresh() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const results = await Promise.all(
      SLUGS.map((slug) =>
        fetch(`${SOURCE_BASE}/${slug}.json`, {
          signal: controller.signal,
          cache: "no-cache",
        })
          .then((res) => (res.ok ? res.json() : null))
          .then((json) => (json ? normalize(json, slug) : null))
          .catch(() => null),
      ),
    );
    return FALLBACK_PRODUCTS.map(
      (p, i) => results[i] || { ...p, detailUrl: `${PRODUCT_PAGE}/${p.slug}` },
    );
  } finally {
    clearTimeout(timer);
  }
}
