import ProductCatalog from '../../components/ProductCatalog';
import { siteOg } from '../../lib/og';

export const metadata = {
  title: 'Jasa Pengembang Software & Web Depok',
  description:
    'Jasa pengembang software dan web di Depok — Arif Permana Putrasuryana. Website company profile, landing page, e-commerce, ERP, EMS, CMS, LMS, SIMRS & aplikasi custom dengan Laravel, Vue.js, Quasar. Konsultasi gratis via WhatsApp 0858-1704-8266.',
  keywords: ['Jasa Pengembang Software dan Web di Depok', 'Jasa Pembuatan Website Depok', 'Web Developer Depok', 'Software Engineer Depok', 'Jasa IT Solution Depok', 'ERP', 'SIMRS', 'itsmebroarif'],
  alternates: { canonical: '/services' },
  openGraph: {
    ...siteOg,
    url: '/services',
    title: 'Jasa Pengembang Software & Web Depok — Arif Permana',
    description: 'Jasa pengembang software & web di Depok: ERP, EMS, CMS, LMS, SIMRS, website perusahaan, landing page & aplikasi custom.',
  },
};

const SERVICES = [
  { icon: 'bi-code-slash', color: '#047857', title: 'Pengembangan Web', text: 'Situs web modern, responsif, dan SEO friendly — company profile, landing page, portal berita, hingga dashboard internal dengan Laravel & Vue.js.' },
  { icon: 'bi-boxes', color: '#0f766e', title: 'IT Solution & Sistem Informasi', text: <>Solusi IT end-to-end untuk berbagai sektor — <strong>ERP</strong> untuk operasional bisnis, <strong>EMS</strong> untuk event, <strong>CMS</strong> &amp; <strong>LMS</strong> untuk konten dan pembelajaran, hingga <strong>SIMRS</strong> untuk rumah sakit, klinik, dan puskesmas — dengan Quasar frontend dan Laravel backend.</> },
  { icon: 'bi-phone', color: '#be123d', title: 'Pengembangan Aplikasi', text: 'Aplikasi web progresif (PWA) dan desktop (Electron.js) yang nyaman dipakai di mana saja — satu basis kode, banyak platform.' },
  { icon: 'bi-server', color: '#b45309', title: 'Backend & API', text: 'REST API yang kuat dan terdokumentasi, autentikasi & otorisasi rapi, serta integrasi pihak ketiga (payment gateway, WhatsApp, SATUSEHAT).' },
  { icon: 'bi-cloud-arrow-up', color: '#1d4ed8', title: 'Cloud & Deployment', text: 'Setup VPS, domain, SSL, CI/CD, monitoring, dan optimasi performa — agar aplikasi Anda selalu online dan cepat diakses.' },
  { icon: 'bi-shield-lock', color: '#15803d', title: 'Keamanan Sistem', text: 'Hardening aplikasi & server, audit dependency, backup terjadwal, serta penerapan best practice keamanan web OWASP.' },
];

const STEPS = [
  { n: '1', icon: 'bi-grid-3x3-gap', color: '#047857', title: 'Pilih Produk', text: 'Pilih produk yang ingin Anda konsultasikan — ERP, SIMRS, CMS, LMS, dan lainnya.' },
  { n: '2', icon: 'bi-ui-checks-grid', color: '#0f766e', title: 'Centang Fitur', text: 'Centang fitur yang Anda butuhkan, atau tulis kebutuhan tambahan Anda sendiri.' },
  { n: '3', icon: 'bi-person-vcard', color: '#be123d', title: 'Isi Biodata', text: 'Nama, no. WhatsApp, bisnis/instansi, email, dan kota — kurang dari 1 menit.' },
  { n: '4', icon: 'bi-send-check', color: '#b45309', title: 'Ringkasan & Kirim', text: 'Cek ringkasan order, lalu kirim langsung ke WhatsApp atau unduh Ratecard PDF.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ======= Layanan ======= */}
      <section className="section" style={{ paddingBottom: 'clamp(2rem,4vw,3rem)' }} aria-labelledby="services-title">
        <div className="container">
          <div className="section-title left reveal">
            <span className="eyebrow"><span className="dot"></span> Layanan</span>
            <h2 id="services-title">Jasa pengembang software dan web <span className="gradient-text">di Depok</span></h2>
            <p>Jasa pengembang software dan web di Depok — dari perencanaan hingga rilis. Saya bantu wujudkan kebutuhan digital Anda: website company profile, landing page, e-commerce, ERP, EMS, CMS, LMS, SIMRS, hingga aplikasi custom. Onsite (Depok &amp; Bodetabek) maupun remote.</p>
          </div>

          <div className="grid grid-3">
            {SERVICES.map((s) => (
              <article className="card card-lift reveal" key={s.title}>
                <div className="icon-tile" style={{ '--tile-color': s.color }}><i className={`bi ${s.icon}`} aria-hidden="true"></i></div>
                <h3>{s.title}</h3>
                <p style={{ marginBottom: 0 }}>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======= Katalog Produk ======= */}
      <section id="produk" className="section section-alt" aria-labelledby="produk-title">
        <div className="container">
          <div className="section-title left reveal">
            <span className="eyebrow"><span className="dot"></span> Katalog Produk</span>
            <h2 id="produk-title">Produk <span className="gradient-text">Sistem</span> siap pesan</h2>
            <p>
              Detail setiap produk ada di halaman ini — klik <strong>Detail Produk</strong> untuk melihat fitur lengkap. Tidak ada harga kaku: harga final disepakati saat project berjalan.
            </p>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.8rem' }}>
              <a className="btn btn-outline" href="/assets/docs/ratecard-arifpermana.pdf" download style={{ padding: '.48rem .9rem', fontSize: '.82rem' }}>
                <i className="bi bi-file-earmark-pdf" aria-hidden="true"></i> Unduh Ratecard (PDF)
              </a>
            </div>
          </div>

          <ProductCatalog withFilter showAll />

          <p className="reveal" style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '.85rem', color: 'var(--muted)' }}>
            Butuh sesuatu yang tidak ada di katalog?{' '}
            <button type="button" className="cert-link btn-ghost-link" data-open-consult style={{ background: 'none', border: 0, cursor: 'pointer', fontSize: '.85rem' }}>
              Request custom <i className="bi bi-arrow-right-short" aria-hidden="true"></i>
            </button>
          </p>
        </div>
      </section>

      {/* ======= Alur order ======= */}
      <section className="section" aria-labelledby="flow-title">
        <div className="container">
          <div className="section-title left reveal">
            <span className="eyebrow"><span className="dot"></span> Cara Order</span>
            <h2 id="flow-title">Request → Konsultasi → <span className="gradient-text">Dikerjakan</span></h2>
          </div>
          <div className="grid grid-4">
            {STEPS.map((st) => (
              <div className="card step-card reveal" key={st.n}>
                <span className="step-number" style={{ background: st.color }}>{st.n}</span>
                <h3 style={{ fontSize: '.95rem' }}><i className={`bi ${st.icon}`} style={{ color: st.color }} aria-hidden="true"></i> {st.title}</h3>
                <p style={{ fontSize: '.86rem', marginBottom: 0 }}>{st.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="cta-services-title">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2 id="cta-services-title">Siap mulai proyek Anda?</h2>
              <p>Konsultasi gratis tanpa komitmen. Jawaban saya biasanya di hari yang sama.</p>
            </div>
            <button type="button" className="btn btn-whatsapp btn-lg" data-open-consult>
              <i className="bi bi-whatsapp" aria-hidden="true"></i> Request Pembuatan Website
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
