import './globals.css';
import { Poppins, Inter } from 'next/font/google';
import UtilityBar from '../components/UtilityBar';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FabStack from '../components/FabStack';
import RevealOnScroll from '../components/RevealOnScroll';
import ConsultModal from '../components/ConsultModal';
import { ToastHost } from '../components/Toast';

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

export const metadata = {
  metadataBase: new URL('https://arifpermana.vercel.app'),
  title: {
    default: 'Arif Permana Putrasuryana — IT Solution Developer',
    template: '%s — Arif Permana Putrasuryana',
  },
  description:
    'IT Solution Developer yang open to work (onsite & remote) di Depok, Indonesia. Berpengalaman mengerjakan ERP, EMS, CMS, LMS, SIMRS, dan aplikasi bisnis lainnya dengan Laravel, Vue.js, dan Quasar.',
  keywords: [
    'Arif Permana', 'IT Solution Developer', 'ERP', 'EMS', 'CMS', 'LMS', 'SIMRS',
    'Web Developer Indonesia', 'Laravel', 'Vue.js', 'Quasar', 'jasa pembuatan website Depok', 'portfolio developer',
  ],
  authors: [{ name: 'Arif Permana Putrasuryana' }],
  creator: 'Arif Permana Putrasuryana',
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: {
    icon: [{ url: '/assets/img/favicon.png', type: 'image/png' }],
    apple: [{ url: '/assets/img/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'Arif Permana Putrasuryana',
    locale: 'id_ID',
    images: [{ url: '/assets/img/og-image.png', width: 1200, height: 630, alt: 'Arif Permana Putrasuryana — IT Solution Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@arifpermana',
    images: ['/assets/img/og-image.png'],
  },
};

const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arif Permana Putrasuryana',
  url: 'https://arifpermana.vercel.app/',
  image: 'https://arifalexander.vercel.app/img/admin/Saya.jpeg',
  jobTitle: 'IT Solution Developer',
  description: 'Open to work — fulltime, onsite & remote. IT Solution developer: ERP, EMS, CMS, LMS, SIMRS (Laravel, Vue.js, Quasar).',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Depok',
    addressRegion: 'Jawa Barat',
    addressCountry: 'ID',
  },
  email: 'mailto:aripstrike@gmail.com',
  telephone: '+62 858-1704-8266',
  knowsAbout: ['Laravel', 'Vue.js', 'Quasar Framework', 'JavaScript', 'TypeScript', 'PHP', 'MySQL', 'ERP', 'EMS', 'CMS', 'LMS', 'SIMRS', 'SATUSEHAT', 'UI/UX Design'],
  sameAs: [
    'https://itsmebroarif.medium.com',
    'https://www.instagram.com/eexxvvn/',
    'https://www.linkedin.com/in/arif-permana-putrasuryana-121b761b9/',
  ],
};

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arif Permana Putrasuryana',
  url: 'https://arifpermana.vercel.app/',
  inLanguage: 'id-ID',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#059669',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.min.css" precedence="default" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
        <a className="skip-link" href="#main">Lewati ke konten utama</a>
        <noscript dangerouslySetInnerHTML={{ __html: '<style>.reveal{opacity:1!important;transform:none!important}</style>' }} />

        <header className="site-header">
          <UtilityBar />
          <SiteHeader />
        </header>
        <div className="header-spacer" aria-hidden="true"></div>

        <main id="main">{children}</main>

        <SiteFooter />
        <FabStack />
        <ConsultModal />
        <ToastHost />
        <RevealOnScroll />
      </body>
    </html>
  );
}
