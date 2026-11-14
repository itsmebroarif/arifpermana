# Portfolio Website - arifpermana.vercel.app

Repositori untuk kode sumber website portfolio pribadi saya, yang dapat diakses di [arifpermana.vercel.app](https://arifpermana.vercel.app).

## Deskripsi

Website portfolio bergaya **Material Professional Corporate** yang memperkenalkan saya sebagai IT Solution Developer — berpengalaman mengerjakan **ERP, EMS, CMS, LMS, dan SIMRS** (Sistem Informasi Manajemen Rumah Sakit) serta berbagai aplikasi bisnis menggunakan **Laravel**, **Vue.js**, dan **Quasar Framework**.

## Fitur Utama

- **Material Professional Corporate** — desain korporat yang bersih & catchy: palet emerald/slate/amber, tombol flat profesional, utility bar korporat, KPI band gelap, dan dashboard mock sebagai hero visual.
- **Dashboard Mock Hero** — pratinjau SaaS/SIMRS bergaya korporat (titlebar, sidebar, KPI cards, bar chart) yang terbuat murni dari HTML/CSS — ringan, tajam di retina, tanpa beban library 3D.
- **Tanpa Harga Kaku** — seluruh katalog produk tidak menampilkan harga; negosiasi dilakukan langsung saat diskusi di WhatsApp.
- **Katalog Produk Sistem** — 11 produk (SIMRS, ERP, LMS, CMS, EMS, POS, Company Profile, E-Commerce, Landing Page, Web Profil, Undangan Digital) yang datanya diambil langsung dari [kafeinarts.web.id/products](https://kafeinarts.web.id/products/) (dengan snapshot lokal sebagai fallback) dan di-rebrand menjadi **Sistem**.
- **Request Pembuatan Website** — tombol CTA dan tombol produk membuka **form konsultasi React** (useReducer + validasi) yang langsung melanjutkan ke WhatsApp **0858-1704-8266** untuk diskusi & negosiasi harga.
- **Form Kontak → WhatsApp** — form kontak dibangun dengan **React (useState)** dan meneruskan pesan langsung ke WhatsApp untuk negosiasi.
- **SEO Friendly & Mobile-First** — meta Open Graph/Twitter, JSON-LD `Person` & `WebSite`, `sitemap.xml`, `robots.txt`, `site.webmanifest`, semantic HTML, skip-link, dan `lang="id"`.
- **Resume terbaru** — termasuk pengalaman sebagai Fullstack Software Engineer di **PT. Sintasi Persada Teknologi** (Project SIMRS, Laravel + Vue.js + Quasar).

## Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3 (custom design system — tanpa framework CSS), Vanilla JavaScript (ES6)
- **Forms**: React 18 (hooks + state management), dibundle dengan esbuild → `assets/js/forms.bundle.js` (`npm run build:react`)
- **State**: hooks — `useState` (form kontak) & `useReducer` (modal konsultasi produk)
- **Icons**: Bootstrap Icons
- **Deployment**: Vercel
