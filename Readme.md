# Portfolio Website — arifpermana.vercel.app

Website portfolio pribadi saya (Arif Permana Putrasuryana), dibangun dengan **Next.js (App Router) + React 19** — static export, SEO friendly, mobile-first, bergaya **Material Professional Corporate** (emerald/slate/amber, clean & catchy).

## Deskripsi

Portfolio sebagai **IT Solution Developer** yang berkecimpung di berbagai solusi teknologi — **ERP, EMS, CMS, LMS, SIMRS**, dan aplikasi bisnis — dibangun dengan **Laravel**, **Vue.js**, dan **Quasar Framework**.

## Menjalankan

```bash
npm install
npm run dev      # development → http://localhost:3000
npm run build    # static export → folder out/
npm run ratecard # regenerate PDF ratecard (harga dasar termurah) → public/assets/docs/ratecard-arifpermana.pdf
npm run icons    # regenerate logo/favicon/OG image dari master SVG → public/assets/img/
```

Deploy: Vercel (preset Next.js otomatis — `output: 'export'` menghasilkan static site dari folder `out/`).

## Struktur

```
├─ app/                 # App Router pages (/, /about, /resume, /services, /contact) + layout + globals.css
├─ components/          # Client components: SiteHeader, SiteFooter, MockShowcase, ProductCatalog,
│                       #   ConsultModal, ContactForm, FabStack, UtilityBar, RevealOnScroll, Toast, PhotoWithFallback
├─ lib/products.js      # Data snapshot + fetch live (kafeinarts.web.id) produk "Sistem"
├─ public/assets/       # gambar, CV, sertifikat, favicon, bootstrap-icons, vendor CSS
├─ scripts/            # generate-ratecard.mjs, generate-icons.mjs (logo/favicon/OG dari SVG master)
├─ public/{robots.txt, sitemap.xml, site.webmanifest}
└─ next.config.mjs      # output: 'export' (static site)
```

## Fitur

- **Full React (Next.js)** — setiap halaman prerender statis (SSG) + komponen interaktif di client.
- **Material Professional Corporate** — utility bar korporat, solid white header dengan underline active-state, KPI band gelap, tombol flat profesional, CTA split panel dark dengan aksen amber.
- **Dashboard Mock Hero** — pratinjau 7 UI produk (SIMRS, ERP, CMS, LMS, EMS, POS, Landing Page) sebagai tab interaktif — ringan (murni CSS), tajam di semua layar.
- **Katalog Produk Sistem** — 11 produk (data diambil dari [kafeinarts.web.id/products](https://kafeinarts.web.id/products/), di-rebrand "Sistem"); filter Sistem/Website; tanpa harga — negosiasi langsung via WhatsApp.
- **ConsultModal (useReducer)** — form konsultasi produk (preselect dari tombol kartu) → buka `wa.me/6285817048266` untuk diskusi & negosiasi.
- **ContactForm (useState)** — validasi inline → pesan langsung terbuka di WhatsApp.
- **Ratecard PDF formal** — dokumen penawaran korporat (nomor dokumen, ketentuan, tanda tangan, kontak WA/email) dengan harga dasar termurah tiap produk; dipakai untuk dikirim ke customer/klien.
- **PWA installable** — manifest lengkap (icon 192/512 + maskable, theme/background color, standalone), service worker (network-first navigasi + cache-first aset, fallback `/offline.html`), tombol Install di desktop & HP, `display-mode: standalone`.
- **SPA feel** — navigasi antar halaman client-side (tanpa full reload, `app/template.jsx` memberi transisi halus & scroll-to-top otomatis).
- **SEO & Metadata API** — `metadata` per halaman (title template, description, keywords, OG, Twitter, canonical), JSON-LD `Person` + `ProfessionalService` (Jasa Pengembang Software & Web di Depok, geo, openingHours) + `WebSite` + `FAQPage`, `sitemap.xml`, `robots.txt`, `site.webmanifest`, `lang="id"`, skip-link. Target keyword: *Web Developer Depok*, *Software Engineer Depok*, *Jasa Pengembang Software dan Web di Depok*, dan *itsmebroarif*.
- **Brand identity baru** — logo "AP" monogram geometris (chevron-kode + emerald gradient di tile dark-slate), dibuat via `scripts/generate-icons.mjs` (SVG → sharp): `logo.svg`, `favicon.png`, `icon-192/512`, maskable, `apple-touch-icon`, dan `og-image.png` 1200×630.
- **Home & About yang rapi** — hero split dengan dashboard mock, stack chips, KPI band; About dengan caption photo overlay, fact grid 2×2, dan cerita terstruktur.
