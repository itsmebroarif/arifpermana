export const metadata = {
  title: 'Resume — IT Solution Developer',
  description:
    'Resume Arif Permana Putrasuryana: IT Solution Developer open to work (onsite & remote). Berpengalaman mengembangkan ERP, EMS, CMS, LMS, dan SIMRS — di antaranya dibangun di PT. Sintasi Persada Teknologi (2025–2026) dengan Laravel, Vue.js, Quasar.',
  alternates: { canonical: '/resume' },
  openGraph: {
    title: 'Resume — Arif Permana Putrasuryana',
    description: 'IT Solution Developer — ERP, EMS, CMS, LMS & SIMRS. Open to work — onsite & remote.',
  },
};

const EDUCATION = [
  { title: 'Pendidikan Formal (SMP)', meta: 'SMP Yapemri Depok · 2016 — 2019', text: 'Berfokus pada pengembangan karakter dan mulai mempelajari komputer & jaringan secara otodidak, serta pemrograman dasar seperti HTML dan CSS.' },
  { title: 'Rekayasa Perangkat Lunak', meta: 'SMK Taruna Bhakti Depok · 2019 — 2022', text: 'Berfokus pada pengembangan perangkat lunak seperti website dan aplikasi dengan menggunakan Laravel dan Vue.js dengan teknologi PWA di dalamnya.' },
  { title: 'Bootcamp Web Developer', meta: 'freeCodeCamp, San Francisco, US · 2022 — 2024', text: 'Fokus pada desain website yang responsif, algoritma JavaScript, dan struktur data menggunakan bahasa pemrograman JavaScript.' },
];

const CERTS = [
  { title: 'Javascript Course Contributor (ID)', meta: '12 April 2025', href: '/assets/img/certificate/arif-javascript-belajarbareng.pdf' },
  { title: 'Golang Course Contributor (ID)', meta: '15 Maret 2025', href: '/assets/img/certificate/arif-golang.pdf' },
  { title: 'Digital Advertising with Web Technologies (ID)', meta: '23 Februari 2025 · Young On Top', href: '/assets/img/certificate/itsmebroarif-yot.png' },
  { title: 'Flutter Course Contributor (ID)', meta: '21 Desember 2024', href: '/assets/img/certificate/arif-flutter.pdf' },
  { title: 'Javascript Algorithm & Data Structure (US)', meta: '16 Juli 2024 · freeCodeCamp', href: 'https://www.freecodecamp.org/certification/itsmebroarif801/javascript-algorithms-and-data-structures-v8' },
  { title: 'Responsive Web Design (US)', meta: '16 Juli 2024 · freeCodeCamp', href: 'https://www.freecodecamp.org/certification/itsmebroarif801/responsive-web-design' },
];

const EXPERIENCES = [
  {
    role: 'Fullstack Software Engineer', meta: 'PT. Sintasi Persada Teknologi · 2025 — 2026', highlight: true,
    project: 'SIMRS',
    projectDesc: 'Sistem Informasi Manajemen Rumah Sakit — mengembangkan sistem informasi kesehatan terintegrasi untuk berbagai fasilitas pelayanan',
    bullets: [
      <><strong>SIMRS untuk rumah sakit</strong> — alur pendaftaran, rawat jalan, rawat inap, farmasi, laboratorium, kasir, dan pelaporan.</>,
      <><strong>SIMRS Klinik &amp; Puskesmas</strong> — penyesuaian modul untuk skala klinik dan puskesmas dengan alur pelayanan primer.</>,
      <><strong>Labkesda</strong> — sistem informasi laboratorium kesehatan daerah untuk pengelolaan sampel dan hasil pemeriksaan.</>,
      <><strong>Tempat Praktek Mandiri</strong> — modul ringkas untuk praktek mandiri dokter dan bidan.</>,
      <>Dibangun dengan <strong>Laravel</strong> (backend &amp; REST API) dan <strong>Vue.js + Quasar Framework</strong> sebagai UI component — satu basis kode, responsif di desktop maupun mobile.</>,
    ],
  },
  {
    role: 'Web Developer', meta: 'Ayasylfiette · 2026',
    project: 'E-Commerce', projectDesc: 'website penjualan aset VTuber yang terhubung penuh dengan platform e-commerce',
    bullets: [
      'Membuat website untuk penjualan aset VTuber dengan katalog dan alur checkout yang mulus.',
      'Membuat fitur yang terkoneksi dengan e-commerce (produk, pembayaran, dan pesanan).',
      'Mengintegrasikan WhatsApp untuk konsultasi dan pemesanan langsung oleh pelanggan.',
    ],
  },
  {
    role: 'Fullstack Web Engineer', meta: 'Sadaraga · 2025',
    project: 'EMS (Event Management System)', projectDesc: 'platform registrasi marathon — dari pendaftaran peserta hingga BIB checking di gerbang',
    bullets: [
      'Mengembangkan website untuk registrasi marathon dengan manajemen data peserta.',
      'Menyajikan hasil (result) peserta lomba lari secara publik.',
      'Membuat sistem dengan C# untuk BIB Checking di arena lomba.',
    ],
  },
  {
    role: 'Web Builder', meta: 'Warkop Galaxy Jati Asri (ID) · 2025',
    project: 'Web Profil Bisnis', projectDesc: 'kehadiran digital dan periklanan berbasis web untuk warkop',
    bullets: [
      'Mengembangkan website untuk sebuah warkop sekaligus media periklanan.',
      'Membuat periklanan berbasis website untuk menjangkau pelanggan sekitar.',
      'Memberikan akses dan pengaturan agar bisnis tampil di hasil pencarian Google.',
    ],
  },
  {
    role: 'Laravel Developer', meta: 'Konpyūtā no himitsu (JP) · 2025',
    project: 'LMS (Learning Management System)', projectDesc: 'website kursus komputer dengan konten materi terstruktur',
    bullets: [
      'Mengembangkan website untuk kursus komputer (profil, materi, dan kontak).',
      'Mengembangkan fitur direct chat menuju WhatsApp untuk konsultasi peserta.',
      'Ikut serta dalam pengembangan materi tentang ilmu komputer.',
    ],
  },
  {
    role: 'Digital Speaker', meta: 'Young On Top (ID) · 2025',
    project: 'Landing Page', projectDesc: 'website statis untuk kampanye periklanan digital',
    bullets: [
      'Membuat website statis untuk periklanan.',
      'Mengajarkan dan mempresentasikan tentang periklanan digital.',
      'Membuat analisis tentang target market sebuah produk.',
    ],
  },
  {
    role: 'Website Builder', meta: 'Amie Jaya Motor (ID) · 2025',
    project: 'Website Company Profile', projectDesc: 'profil dealer motor yang terkoneksi dengan situs resmi Yamaha',
    bullets: [
      'Membuat website statis untuk dealer motor.',
      'Menjabarkan tentang beberapa produk motor yang ada di dealer.',
      'Membuat analisis tentang spesifikasi ideal untuk dealer motor yang terkoneksi langsung dengan situs resmi Yamaha.',
    ],
  },
  {
    role: 'Vue.js Developer', meta: 'Hangang Solution (KR) · 2025',
    project: 'LMS (Learning Management System)', projectDesc: 'platform belajar dan forum diskusi game developer Korea',
    bullets: [
      'Situs untuk menjadi tempat belajar game developer dari Korea.',
      'Membuat situs untuk menjadi forum diskusi game developer.',
      'Membuat analisis tentang spesifikasi ideal untuk game konsol maupun mobile.',
    ],
  },
  {
    role: 'Front-End Trainer', meta: 'Kafeinarts Studio (ID) · 2024',
    project: 'Workshop Front-End', projectDesc: 'pelatihan web fundamentals hingga framework modern',
    bullets: [
      'Mengajarkan HTML, CSS, JS mulai dari basic.',
      'Mempelajari framework seperti Vue.js & Bootstrap CSS.',
      'Mempelajari pembuatan aplikasi dan website portfolio.',
    ],
  },
  {
    role: 'Expert Laravel Mentor', meta: 'Rumah Coding (ID) · 2024',
    project: 'Workshop Laravel', projectDesc: 'mentoring backend Laravel dari dasar hingga studi kasus',
    bullets: [
      'Mengajarkan Laravel mulai dari basic blade templating.',
      'Memberi arahan tentang studi kasus CRUD dan Auth sederhana.',
      'Memberikan arahan akan metode MVC dan juga Teknik OOP dalam setiap studi kasus.',
    ],
  },
  {
    role: 'Remote Laravel Developer', meta: 'Hallotrans (ID) · 2024',
    project: 'Sistem Informasi Internal', projectDesc: 'aplikasi web internal berbasis Laravel & Blade',
    bullets: [
      'Mengembangkan dan memelihara aplikasi web menggunakan Laravel dan Blade template.',
      'Berkoordinasi dengan tim remote untuk penyelesaian proyek.',
      'Menyelesaikan masalah teknis dan melakukan debugging.',
    ],
  },
  {
    role: 'Tech Blogger', meta: 'Medium (ID) · 2023',
    project: 'CMS Blog', projectDesc: 'publikasi dan edukasi teknologi di Medium',
    bullets: [
      'Membahas seputar perkembangan teknologi.',
      'Mengedukasi beberapa orang yang membutuhkan ilmu komputer yang mudah dipelajari.',
      'Mereview serta mengedukasi seputar pendidikan hardware dan software komputer.',
    ],
  },
  {
    role: 'Backend Web Developer', meta: 'PT. Spero Mahakarya Nusantara (ID) · 2022',
    project: 'Backend & REST API', projectDesc: 'layanan API untuk berbagai aplikasi internal dan klien',
    bullets: [
      'Mengelola dan mengembangkan REST API untuk berbagai aplikasi.',
      'Bekerjasama dengan tim front-end untuk mengintegrasikan API.',
      'Melakukan pemeliharaan dan peningkatan pada sistem yang ada.',
    ],
  },
  {
    role: 'Fullstack Web Developer', meta: 'Guepedia (ID) · 2021',
    project: 'Sistem Informasi & Website', projectDesc: 'aplikasi web Laravel + Vue.js untuk penerbitan',
    bullets: [
      'Mengembangkan dan memelihara aplikasi web menggunakan Laravel dan Vue.js.',
      'Berkoordinasi dengan tim untuk merancang fitur-fitur baru.',
      'Menyelesaikan masalah teknis dan melakukan debugging.',
    ],
  },
];

export default function ResumePage() {
  const cvHref = '/assets/docs/CV%20-%20Arif%20Permana%20Putrasuryana.pdf';
  return (
    <section className="section" aria-labelledby="resume-title">
      <div className="container">
        <div className="section-title left reveal">
          <span className="eyebrow"><span className="dot"></span> Resume</span>
          <h2 id="resume-title">Perjalanan <span className="gradient-text">profesional</span> saya</h2>
          <p>Seorang IT Solution developer dengan pengalaman dalam berbagai proyek — ERP, EMS, CMS, LMS, SIMRS, pengembangan web dan aplikasi, serta sistem manajemen basis data. Lulusan Rekayasa Perangkat Lunak (SMK) dengan sertifikasi yang relevan di bidang teknologi informasi.</p>
          <a className="btn btn-outline" href={cvHref} target="_blank" rel="noopener noreferrer" style={{ marginTop: '1rem' }}>
            <i className="bi bi-file-earmark-pdf" aria-hidden="true"></i> Download CV (PDF)
          </a>
        </div>

        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          {/* Kolom kiri */}
          <div className="timeline reveal">
            <h3 className="timeline-heading">Ringkasan</h3>
            <article className="t-item">
              <h4>Arif Permana Putrasuryana</h4>
              <span className="t-meta"><i className="bi bi-geo-alt" aria-hidden="true"></i> Depok, Jawa Barat · (+62) 858-1704-8266 · aripstrike@gmail.com</span>
              <p style={{ fontSize: '.9rem', marginBottom: 0 }}>
                <em>Inovatif dan bekerja dengan tenggat waktu — IT Solution developer dengan pengalaman lebih dari 4 tahun merancang, mengembangkan, dan merilis produk digital yang berpusat pada pengguna, mulai dari konsep awal hingga hasil akhir yang sempurna.</em>
              </p>
            </article>

            <h3 className="timeline-heading">Pendidikan</h3>
            {EDUCATION.map((ed) => (
              <article className="t-item" key={ed.title}>
                <h4>{ed.title}</h4>
                <span className="t-meta">{ed.meta}</span>
                <p style={{ fontSize: '.9rem', marginBottom: 0 }}>{ed.text}</p>
              </article>
            ))}

            <h3 className="timeline-heading">Sertifikasi</h3>
            {CERTS.map((c) => (
              <article className="t-item" key={c.title}>
                <h4>{c.title}</h4>
                <span className="t-meta">{c.meta}</span><br />
                <a className="cert-link" href={c.href} target="_blank" rel="noopener noreferrer">
                  Lihat Sertifikat <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                </a>
              </article>
            ))}
          </div>

          {/* Kolom kanan */}
          <div className="timeline reveal" style={{ transitionDelay: '.12s' }}>
            <h3 className="timeline-heading">Pengalaman Profesional</h3>
            {EXPERIENCES.map((x) => (
              <article className={`t-item ${x.highlight ? 'highlight' : ''}`} key={`${x.role}-${x.meta}`}>
                <h4>{x.role}</h4>
                <span className="t-meta">{x.meta}</span>
                <p style={{ fontSize: '.88rem' }}><strong>Project: {x.project}</strong> — {x.projectDesc}</p>
                <ul>
                  {x.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
