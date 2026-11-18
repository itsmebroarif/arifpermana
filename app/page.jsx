import Link from "next/link";
import MockShowcase from "../components/MockShowcase";
import ProductCatalog from "../components/ProductCatalog";
import { siteOg } from "../lib/og";

export const metadata = {
  title: {
    absolute: 'Arif Permana — Web Developer & Software Engineer Depok',
  },
  description:
    'Jasa pengembang software & web di Depok — Arif Permana Putrasuryana, Web Developer & Software Engineer. ERP, EMS, CMS, LMS, SIMRS, company profile & landing page dengan Laravel, Vue.js, Quasar. Konsultasi gratis via WhatsApp!',
  keywords: [
    'Web Developer Depok', 'Software Engineer Depok', 'Jasa Pengembang Software dan Web di Depok',
    'Jasa Pembuatan Website Depok', 'Arif Permana Putrasuryana', 'itsmebroarif',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    ...siteOg,
    url: '/',
    title: 'Arif Permana — Web Developer & Software Engineer di Depok',
    description:
      'Jasa pengembang software & web di Depok: ERP, EMS, CMS, LMS, SIMRS, website perusahaan & landing page. Konsultasi gratis via WhatsApp 0858-1704-8266.',
  },
};

const HIGHLIGHTS = [
  {
    icon: "bi-boxes",
    title: "IT Solution Segala Sektor",
    text: "Berpengalaman mengerjakan IT solution lintas sektor — SIMRS untuk fasilitas kesehatan (di PT. Sintasi Persada Teknologi), ERP untuk bisnis, EMS untuk event, CMS & LMS untuk konten dan pembelajaran — dengan Laravel, Vue.js, dan Quasar.",
    color: "#047857",
  },
  {
    icon: "bi-layers",
    title: "Full-Stack, End-to-End",
    text: "Dari perancangan database, REST API, hingga antarmuka yang rapi — dengan Vue.js + Quasar di sisi frontend dan Laravel di sisi backend. Satu orang, satu alur, minim miskomunikasi.",
    color: "#0f766e",
  },
  {
    icon: "bi-chat-dots",
    title: "Komunikasi Jelas",
    text: "Progress dilaporkan berkala, revisi transparan, dan tidak ada istilah “nanti jadi”. Anda tahu apa yang sedang dikerjakan, kapan selesai, dan berapa biayanya.",
    color: "#b45309",
  },
];

const TRUST = ["Laravel", "Vue.js", "Quasar", "Next.js", "MySQL", "Git"];

const FAQ = [
  {
    q: 'Siapa Arif Permana Putrasuryana (itsmebroarif)?',
    a: 'Arif Permana Putrasuryana — dikenal di GitHub & internet dengan handle itsmebroarif — adalah Web Developer & Software Engineer berbasis di Cilodong, Depok, Jawa Barat. 4+ tahun pengalaman membangun ERP, EMS, CMS, LMS, SIMRS, website perusahaan, landing page, dan aplikasi custom dengan Laravel, Vue.js, Quasar, dan Next.js. Open to work, onsite maupun remote.',
  },
  {
    q: 'Jasa pengembang software dan web di Depok apa saja yang tersedia?',
    a: 'Jasa pengembang software dan web di Depok yang tersedia: pembuatan website company profile, landing page, portal berita, e-commerce, sistem ERP, EMS (Event Management System), CMS, LMS, SIMRS untuk rumah sakit/klinik/puskesmas, dashboard internal, REST API & integrasi (SATUSEHAT, payment gateway, WhatsApp), PWA, hingga aplikasi desktop (Electron.js).',
  },
  {
    q: 'Berapa biaya jasa pembuatan website dan software?',
    a: 'Biaya tergantung scope (fitur, desain, integrasi). Landing page dan company profile mulai dari harga terjangkau, sedangkan sistem seperti ERP/SIMRS/LMS dihitung per modul. Konsultasi kebutuhan dan penawaran resmi selalu gratis dan transparan — langsung chat WhatsApp 0858-1704-8266, biasanya dibalas di hari yang sama.',
  },
  {
    q: 'Apakah bisa kerja sama dengan klien di luar Depok?',
    a: 'Tentu bisa. Kerja sama onsite mencakup Depok, Jakarta, Bogor, Bekasi (Bodetabek) dan sekitarnya, sedangkan klien dari mana pun di Indonesia dapat bekerja sama secara remote (video call, WhatsApp, laporan progress berkala).',
  },
  {
    q: 'Tech stack apa yang digunakan?',
    a: 'Backend: Laravel (PHP), MySQL. Frontend: Vue.js 3, Quasar Framework, Next.js/React, TypeScript. Lainnya: REST API, PWA, Docker/CI-CD, dan integrasi SATUSEHAT untuk sistem kesehatan. Satu orang, satu alur kerja end-to-end — minim miskomunikasi.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ======= Hero ======= */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="reveal is-visible">
            <span className="hero-badge">
              <span className="pulse" aria-hidden="true"></span> Open to Work —
              Onsite &amp; Remote
            </span>
            <h1 id="hero-title">
              Arif Permana
              <br />
              <span className="gradient-text">Putrasuryana</span>
            </h1>
            <p className="lead">
              <strong>Web Developer &amp; Software Engineer di Depok</strong>{" "}
              — <strong>jasa pengembang software dan web</strong> yang
              membangun solusi teknologi end-to-end — rapi, cepat, dan
              berdampak — dari <strong>ERP, EMS, CMS, LMS</strong>,{" "}
              <strong>SIMRS</strong>, hingga website perusahaan.
            </p>
            <div className="hero-cta">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                data-open-consult
              >
                <i className="bi bi-rocket-takeoff" aria-hidden="true"></i>{" "}
                Request Pembuatan Website
              </button>
              <Link className="btn btn-outline btn-lg" href="/services">
                <i className="bi bi-grid" aria-hidden="true"></i> Lihat Produk
                &amp; Layanan
              </Link>
            </div>
            <div className="hero-meta">
              <span>
                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>{" "}
                4+ Tahun Pengalaman
              </span>
              <span>
                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>{" "}
                15+ Proyek &amp; Klien
              </span>
              <span>
                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>{" "}
                ERP · EMS · CMS · LMS · SIMRS
              </span>
            </div>
            <p className="hero-stack" aria-label="Teknologi utama">
              <small>STACK</small>
              {TRUST.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </p>
          </div>

          <MockShowcase />
        </div>
      </section>

      {/* ======= KPI band ======= */}
      <div
        className="container stats-wrap"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div
          className="stats-strip reveal"
          role="group"
          aria-label="Sorotan karier"
        >
          <div className="stat-card">
            <strong>4+</strong>
            <span>Tahun Pengalaman</span>
          </div>
          <div className="stat-card">
            <strong>15+</strong>
            <span>Proyek &amp; Klien</span>
          </div>
          <div className="stat-card">
            <strong>11</strong>
            <span>Produk Sistem Siap Pakai</span>
          </div>
          <div className="stat-card">
            <strong>5</strong>
            <span>Sertifikasi &amp; Seminar</span>
          </div>
        </div>
      </div>

      {/* ======= Kenapa Saya ======= */}
      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="section-title left reveal">
            <span className="eyebrow">
              <span className="dot"></span> Mengapa Saya
            </span>
            <h2 id="why-title">
              Developer yang paham{" "}
              <span className="gradient-text">bisnis &amp; kode</span>
            </h2>
            <p>
              Bukan sekadar menulis kode — saya memahami alur kerja bisnis dan
              instansi lintas sektor, sehingga solusi yang dibangun benar-benar
              dipakai, bukan dipajang.
            </p>
          </div>

          <div className="grid grid-3">
            {HIGHLIGHTS.map((h) => (
              <article className="card card-lift reveal" key={h.title}>
                <div className="icon-tile" style={{ "--tile-color": h.color }}>
                  <i className={`bi ${h.icon}`} aria-hidden="true"></i>
                </div>
                <h3>{h.title}</h3>
                <p style={{ marginBottom: 0 }}>{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======= Produk unggulan ======= */}
      <section className="section section-alt" aria-labelledby="featured-title">
        <div className="container">
          <div className="section-title left reveal">
            <span className="eyebrow">
              <span className="dot"></span> Produk Sistem
            </span>
            <h2 id="featured-title">
              Produk siap{" "}
              <span className="gradient-text">pesan &amp; pakai</span>
            </h2>
            <p>
              Pilihan produk Sistem — dari SIMRS, ERP, hingga website company
              profile. Tekan <strong>Diskusi &amp; Negosiasi</strong>, langsung
              terhubung ke WhatsApp untuk diskusi kebutuhan.
            </p>
          </div>

          <ProductCatalog limit={6} />

          <div
            className="reveal"
            style={{ textAlign: "center", marginTop: "1.75rem" }}
          >
            <Link className="btn btn-outline" href="/services#produk">
              <i className="bi bi-grid-3x3-gap" aria-hidden="true"></i> Lihat
              Semua 11 Produk
            </Link>
          </div>
        </div>
      </section>

      {/* ======= FAQ ======= */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container" style={{ maxWidth: "880px" }}>
          <div className="section-title left reveal">
            <span className="eyebrow">
              <span className="dot"></span> Tanya Jawab
            </span>
            <h2 id="faq-title">
              Jasa pengembang software dan web{" "}
              <span className="gradient-text">di Depok</span>
            </h2>
          </div>
          <div className="faq-list">
            {FAQ.map((item) => (
              <details className="faq-item reveal" key={item.q}>
                <summary>
                  {item.q}
                  <i className="bi bi-chevron-down faq-chevron" aria-hidden="true"></i>
                </summary>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section
        className="section"
        style={{ paddingTop: 0 }}
        aria-labelledby="cta-title"
      >
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2 id="cta-title">
                Punya ide website atau sistem?
                <br />
                Mari eksekusi bersama.
              </h2>
              <p>
                Konsultasi gratis, penawaran transparan, dan pengerjaan
                bergaransi. Request langsung ke WhatsApp saya — biasanya saya
                balas di hari yang sama.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-whatsapp btn-lg"
              data-open-consult
            >
              <i className="bi bi-whatsapp" aria-hidden="true"></i> Request via
              WhatsApp — 0858-1704-8266
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
