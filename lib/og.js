/**
 * Shared Open Graph base — Next.js mengganti objek openGraph halaman
 * secara utuh (tidak di-merge dengan layout), jadi dipakai via spread
 * agar og:image/locale/siteName tetap ada di setiap halaman.
 */
export const siteOg = {
  siteName: 'Arif Permana Putrasuryana',
  locale: 'id_ID',
  type: 'website',
  images: [
    {
      url: '/assets/img/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Arif Permana Putrasuryana — Web Developer & Software Engineer di Depok',
    },
  ],
};
