import './globals.css';
import { Poppins, Inter } from 'next/font/google';
import UtilityBar from '../components/UtilityBar';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FabStack from '../components/FabStack';
import ProductExperience from '../components/ProductExperience';
import { ToastHost } from '../components/Toast';
import PWARegister from '../components/PWARegister';
import InstallApp from '../components/InstallApp';
import { siteOg } from '../lib/og';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://arifpermana.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Arif Permana Putrasuryana — Web Developer & Software Engineer Depok',
    template: '%s | Arif Permana',
  },
  description:
    'Jasa pengembang software & web di Depok — Arif Permana Putrasuryana, Web Developer & Software Engineer. ERP, EMS, CMS, LMS, SIMRS, website perusahaan & landing page. Konsultasi gratis!',
  keywords: [
    'Arif Permana Putrasuryana', 'Arif Permana', 'itsmebroarif',
    'Web Developer Depok', 'Software Engineer Depok',
    'Jasa Pengembang Software dan Web di Depok', 'Jasa Pengembang Software di Depok', 'Jasa Pengembang Web di Depok',
    'Jasa Pembuatan Website Depok', 'Jasa Website Depok', 'Web Developer Indonesia',
    'Jasa IT Solution Depok', 'Software House Depok', 'Pembuatan Aplikasi Depok',
    'ERP', 'EMS', 'CMS', 'LMS', 'SIMRS',
    'Laravel', 'Vue.js', 'Quasar', 'Next.js', 'jasa website perusahaan Depok', 'portfolio developer',
  ],
  authors: [{ name: 'Arif Permana Putrasuryana', url: SITE_URL }],
  creator: 'Arif Permana Putrasuryana',
  publisher: 'Arif Permana Putrasuryana',
  category: 'technology',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  icons: {
    icon: [
      { url: '/assets/img/favicon.png', type: 'image/png', sizes: '256x256' },
      { url: '/assets/img/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/assets/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/assets/img/favicon.png'],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Arif Permana',
  },
  openGraph: {
    ...siteOg,
    url: '/',
    title: 'Arif Permana — Web Developer & Software Engineer di Depok',
    description:
      'Jasa pengembang software & web di Depok: ERP, EMS, CMS, LMS, SIMRS, company profile, landing page & aplikasi custom dengan Laravel, Vue.js & Quasar. Konsultasi gratis via WhatsApp.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arif Permana — Web Developer & Software Engineer di Depok',
    description:
      'Jasa pengembang software & web di Depok: ERP, CMS, LMS, SIMRS, website perusahaan & landing page. Konsultasi gratis via WhatsApp.',
    images: ['/assets/img/og-image.png'],
  },
};

// ---------- Structured data ----------
const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Arif Permana Putrasuryana',
  alternateName: 'itsmebroarif',
  givenName: 'Arif Permana',
  familyName: 'Putrasuryana',
  url: SITE_URL,
  image: `${SITE_URL}/assets/img/about.jpg`,
  jobTitle: 'Web Developer & Software Engineer',
  description:
    'Web Developer & Software Engineer di Depok, Indonesia. Jasa pengembang software & web: ERP, EMS, CMS, LMS, SIMRS, website perusahaan, landing page, dan aplikasi custom dengan Laravel, Vue.js, Quasar, dan Next.js. Open to work — onsite & remote.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Perumahan Sukamaju Permai, Jl. Sukamaju Permai Blok B1 Ujung, Rt.01 Rw.28 No.13, Cilodong',
    addressLocality: 'Depok',
    addressRegion: 'Jawa Barat',
    postalCode: '16415',
    addressCountry: 'ID',
  },
  email: 'mailto:aripstrike@gmail.com',
  telephone: '+62 858-1704-8266',
  knowsAbout: [
    'Web Development', 'Software Engineering', 'Laravel', 'Vue.js', 'Quasar Framework', 'Next.js',
    'JavaScript', 'TypeScript', 'PHP', 'MySQL', 'ERP', 'EMS', 'CMS', 'LMS', 'SIMRS', 'SATUSEHAT',
    'REST API', 'UI/UX Design', 'Jasa Pembuatan Website', 'Jasa Pengembang Software',
  ],
  knowsLanguage: ['id', 'en'],
  sameAs: [
    'https://github.com/itsmebroarif',
    'https://www.instagram.com/eexxvvn/',
    'https://www.facebook.com/arif.alexander.56/',
    'https://www.linkedin.com/in/arif-permana-putrasuryana-121b761b9/',
    'https://id.linkedin.com/in/arif-permana-putrasuryana-121b761b9/',
    'https://itsmebroarif.medium.com',
  ],
};

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#service`,
  name: 'Arif Permana — Jasa Pengembang Software & Web di Depok',
  alternateName: ['itsmebroarif', 'Arif Permana Putrasuryana'],
  image: `${SITE_URL}/assets/img/og-image.png`,
  logo: `${SITE_URL}/assets/img/icon-512.png`,
  url: SITE_URL,
  telephone: '+62 858-1704-8266',
  email: 'aripstrike@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Perumahan Sukamaju Permai, Jl. Sukamaju Permai Blok B1 Ujung, Rt.01 Rw.28 No.13, Cilodong',
    addressLocality: 'Depok',
    addressRegion: 'Jawa Barat',
    postalCode: '16415',
    addressCountry: 'ID',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -6.4025, longitude: 106.7942 },
  areaServed: [
    { '@type': 'City', name: 'Depok' },
    { '@type': 'City', name: 'Jakarta' },
    { '@type': 'City', name: 'Bogor' },
    { '@type': 'City', name: 'Bekasi' },
    { '@type': 'AdministrativeArea', name: 'Bodetabek' },
    { '@type': 'Country', name: 'Indonesia' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '22:00',
  },
  description:
    'Jasa pengembang software dan web di Depok: pembuatan website company profile, landing page, e-commerce, sistem ERP, EMS, CMS, LMS, SIMRS, dan aplikasi custom. Dibangun dengan Laravel, Vue.js, Quasar, dan Next.js. Konsultasi & penawaran gratis via WhatsApp.',
  sameAs: [
    'https://github.com/itsmebroarif',
    'https://www.instagram.com/eexxvvn/',
    'https://www.facebook.com/arif.alexander.56/',
    'https://www.linkedin.com/in/arif-permana-putrasuryana-121b761b9/',
    'https://itsmebroarif.medium.com',
  ],
  founder: { '@id': `${SITE_URL}/#person` },
};

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Arif Permana Putrasuryana',
  alternateName: 'itsmebroarif',
  url: SITE_URL,
  inLanguage: 'id-ID',
  publisher: { '@id': `${SITE_URL}/#person` },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.min.css" precedence="default" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
        <a className="skip-link" href="#main">Lewati ke konten utama</a>

        <header className="site-header">
          <UtilityBar />
          <SiteHeader />
        </header>
        <div className="header-spacer" aria-hidden="true"></div>

        <main id="main">{children}</main>

        <SiteFooter />
        <FabStack />
        <ProductExperience />
        <ToastHost />
        <PWARegister />
        <InstallApp />
      </body>
    </html>
  );
}
