import Link from 'next/link';
import PhotoWithFallback from '../../components/PhotoWithFallback';

import { siteOg } from '../../lib/og';

export const metadata = {
  title: 'Tentang — Web Developer & Software Engineer',
  description:
    'Tentang Arif Permana Putrasuryana (itsmebroarif) — Web Developer & Software Engineer di Depok. Jasa pengembang software & web: ERP, EMS, CMS, LMS, SIMRS, website perusahaan & landing page dengan Laravel, Vue.js, Quasar dan Next.js. Open to work — onsite & remote.',
  keywords: ['Arif Permana Putrasuryana', 'itsmebroarif', 'Web Developer Depok', 'Software Engineer Depok', 'Jasa Pengembang Software dan Web di Depok'],
  alternates: { canonical: '/about' },
  openGraph: {
    ...siteOg,
    url: '/about',
    title: 'Tentang Arif Permana Putrasuryana — Web Developer & Software Engineer Depok',
    description: 'Web Developer & Software Engineer di Depok — jasa pengembang software & web: ERP, CMS, LMS, SIMRS, website perusahaan & landing page dengan Laravel, Vue.js, Quasar & Next.js.',
  },
};

const FACTS = [
  { icon: 'bi-telephone', label: 'Telepon', value: '+62 858-1704-8266', href: 'tel:+6285817048266' },
  { icon: 'bi-envelope', label: 'Email', value: 'aripstrike@gmail.com', href: 'mailto:aripstrike@gmail.com' },
  { icon: 'bi-geo-alt', label: 'Lokasi', value: 'Depok, Jawa Barat' },
  { icon: 'bi-briefcase', label: 'Status', value: 'Open to Work' },
];

const SKILLS = [
  { icon: 'bi-code-slash', color: '#047857', title: 'Web & Software', items: [
    ['Frontend', 'HTML, CSS, JS, Vue.js, React, Bootstrap, Tailwind, Livewire'],
    ['Backend', 'PHP, Laravel, Node.js, Go, Python'],
    ['UI Component', 'Quasar Framework, Element Plus'],
    ['Desktop', 'Electron.js'],
  ]},
  { icon: 'bi-database', color: '#0f766e', title: 'Database & Tools', items: [
    ['Database', 'MySQL, MariaDB'],
    ['Integrasi', 'REST API, WebSockets, SATUSEHAT, BPJS VClaim'],
    ['VCS', 'Git, GitHub, GitLab'],
    ['Tooling', 'NPM, Composer, Vite'],
  ]},
  { icon: 'bi-palette', color: '#be123d', title: 'UI/UX & Desain Grafis', items: [
    ['UI/UX', 'Figma, Adobe XD'],
    ['Design', 'Photoshop, Illustrator, Affinity Designer, Canva'],
  ]},
  { icon: 'bi-camera-video', color: '#b45309', title: 'Video Editing', items: [
    ['Tools', 'Adobe Premiere Pro, CapCut, Sony Vegas Pro'],
  ]},
  { icon: 'bi-file-earmark-text', color: '#1d4ed8', title: 'Office Productivity', items: [
    ['Microsoft Office', 'Word, Excel, PowerPoint, Access, Outlook'],
  ]},
  { icon: 'bi-cpu', color: '#15803d', title: 'Operating Systems', items: [
    ['Environments', 'Windows, macOS, Linux (Ubuntu, Arch Linux)'],
  ]},
];

export default function AboutPage() {
  return (
    <>
      {/* ======= Intro ======= */}
      <section className="section" aria-labelledby="about-title">
        <div className="container">
          <div className="section-title left reveal">
            <span className="eyebrow"><span className="dot"></span> Tentang Saya</span>
            <h2 id="about-title">Web Developer &amp; Software Engineer &amp; <span className="gradient-text">UI/UX Enthusiast</span></h2>
            <p>Web Developer &amp; Software Engineer di Depok — jasa pengembang software dan web yang berfokus pada pengembangan web dan aplikasi: dari backend yang kokoh hingga antarmuka yang rapi dan user friendly. Mengerjakan berbagai solusi teknologi: <strong>ERP, EMS, CMS, LMS</strong>, dan <strong>SIMRS</strong> — salah satunya SIMRS di PT. Sintasi Persada Teknologi (rumah sakit, klinik, puskesmas, labkesda, serta tempat praktek mandiri dokter dan bidan).</p>
          </div>

          <div className="about-grid">
            {/* Foto + fakta */}
            <div className="reveal">
              <figure className="about-photo-wrap">
                <PhotoWithFallback />
                <figcaption className="about-photo-caption">
                  <strong>Arif Permana Putrasuryana</strong>
                  <small>Web Developer &amp; Software Engineer — Depok, ID</small>
                </figcaption>
              </figure>

              <div className="fact-grid">
                {FACTS.map((f) => (
                  <div className="fact-item" key={f.label}>
                    <i className={`bi ${f.icon}`} aria-hidden="true"></i>
                    <span>
                      <small>{f.label}</small>
                      <strong>{f.href ? <a href={f.href} style={{ color: 'inherit' }}>{f.value}</a> : f.value}</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cerita */}
            <div className="reveal" style={{ transitionDelay: '.1s' }}>
              <div className="card story-card">
                <span className="eyebrow" style={{ marginBottom: '.35rem' }}><span className="dot"></span> Cerita Singkat</span>
                <h3 style={{ fontSize: '1.2rem' }}>Dari otodidak, SMK, hingga membangun sistem lintas sektor.</h3>
                <p>Berawal dari otodidak komputer dan jaringan di bangku SMP, lalu menekuni Rekayasa Perangkat Lunak di SMK Taruna Bhakti Depok, hingga mengikuti bootcamp dan meraih sertifikasi dari freeCodeCamp. Selama lebih dari 4 tahun saya menangani berbagai proyek — mulai dari website company profile, e-commerce, SIMRS, ERP, EMS, CMS, LMS, hingga platform edukasi.</p>
                <p>Kombinasi kemampuan <strong>engineering</strong> dan <strong>desain</strong> membuat saya terbiasa memikirkan keduanya secara bersamaan: sistem yang benar secara teknis, sekaligus nyaman dipakai oleh pengguna nyata — baik itu admin rumah sakit, kasir, maupun pasien.</p>
                <p style={{ marginBottom: '1.25rem' }}>Jika Anda membutuhkan partner teknis untuk membangun produk digital — dari nol hingga rilis — mari bicarakan kebutuhan Anda.</p>

                <div className="story-actions">
                  <a className="btn btn-primary" href="/assets/docs/CV%20-%20Arif%20Permana%20Putrasuryana.pdf" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-download" aria-hidden="true"></i> Download CV Saya
                  </a>
                  <Link className="btn btn-outline" href="/contact">
                    <i className="bi bi-chat-dots" aria-hidden="true"></i> Diskusi Proyek
                  </Link>
                </div>

                <ul className="story-points" aria-label="Ringkasan keunggulan">
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> 4+ tahun produksi, bukan proyek latihan</li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> SIMRS dipakai nyata di RS, klinik &amp; puskesmas</li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i> Cepat merespons, revisi transparan, harga negosiasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Skills ======= */}
      <section className="section section-alt" aria-labelledby="skills-title" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="container">
          <div className="section-title left reveal">
            <span className="eyebrow"><span className="dot"></span> Keahlian</span>
            <h2 id="skills-title">Skill yang <span className="gradient-text">terbukti dipakai</span></h2>
            <p>Kelompok keahlian berdasarkan kurang lebih 4 tahun pengalaman di proyek klien maupun pekerjaan profesional.</p>
          </div>

          <div className="grid grid-3">
            {SKILLS.map((s) => (
              <article className="card card-lift reveal" key={s.title}>
                <div className="icon-tile" style={{ '--tile-color': s.color }}><i className={`bi ${s.icon}`} aria-hidden="true"></i></div>
                <h3 style={{ fontSize: '1.02rem' }}>{s.title}</h3>
                <ul className="skill-list">
                  {s.items.map(([label, desc]) => (
                    <li key={label}><i className="bi bi-chevron-right" aria-hidden="true"></i><span><strong>{label}:</strong> {desc}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
