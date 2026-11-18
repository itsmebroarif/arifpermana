/** Footer korporat — brand, navigasi, produk populer, copyright. */
import Link from 'next/link';

const SOCIALS = [
  { href: 'https://github.com/itsmebroarif', label: 'GitHub', icon: 'bi-github' },
  { href: 'https://www.instagram.com/eexxvvn/', label: 'Instagram', icon: 'bi-instagram' },
  { href: 'https://www.facebook.com/arif.alexander.56/', label: 'Facebook', icon: 'bi-facebook' },
  { href: 'https://www.linkedin.com/in/arif-permana-putrasuryana-121b761b9/', label: 'LinkedIn', icon: 'bi-linkedin' },
  { href: 'https://itsmebroarif.medium.com', label: 'Medium', icon: 'bi-medium' },
  { href: 'https://wa.me/6285817048266', label: 'WhatsApp', icon: 'bi-whatsapp' },
];

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/services', label: 'Produk & Layanan' },
  { href: '/contact', label: 'Contact' },
];

const POPULAR = ['Sistem SIMRS', 'Sistem ERP', 'Website Company Profile', 'Landing Page'];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="logo" href="/" style={{ marginBottom: '.6rem' }} aria-label="Arif Permana — Beranda">
              <img className="logo-badge-img" src="/assets/img/logo.svg" alt="" width="34" height="34" />
              <span style={{ color: '#fff' }}>Arif<span style={{ color: '#34d399' }}>.</span></span>
            </Link>
            <p style={{ color: '#a9bfb0', fontSize: '.9rem' }}>
              <strong style={{ color: '#fff' }}>Web Developer &amp; Software Engineer di Depok</strong> —
              jasa pengembang software dan web yang fleksibel dan siap bekerja secara
              {' '}<strong style={{ color: '#fff' }}>onsite maupun remote</strong> — apa pun kebutuhan IT Anda:
              {' '}<strong style={{ color: '#fff' }}>ERP, EMS, CMS, LMS, SIMRS</strong>, website perusahaan, landing page, maupun aplikasi custom.
              Dibangun dengan Laravel, Vue.js &amp; Quasar. Berbasis di Cilodong, Depok, Jawa Barat.
              Ikuti <strong style={{ color: '#fff' }}>itsmebroarif</strong> di GitHub, Instagram, Facebook &amp; LinkedIn.
            </p>
            <div className="footer-social">
              {SOCIALS.map((s) => (
                <a key={s.label} className="icon-btn" href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <i className={`bi ${s.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navigasi footer">
            <h5>Navigasi</h5>
            <ul className="footer-links">
              {NAV.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Produk populer">
            <h5>Produk Populer</h5>
            <ul className="footer-links">
              {POPULAR.map((p) => (
                <li key={p}><Link href="/services#produk">{p}</Link></li>
              ))}
              <li>
                <a href="https://kafeinarts.web.id/products/" target="_blank" rel="noopener noreferrer">
                  Lihat katalog lengkap <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© {year} Arif Permana Putrasuryana. Seluruh hak cipta dilindungi.</span>
          <span>Dibuat dengan <i className="bi bi-heart-fill" style={{ color: '#f08ca6' }} aria-hidden="true"></i> di Depok, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
