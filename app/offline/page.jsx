import Link from 'next/link';

export const metadata = {
  title: 'Offline — Koneksi Tidak Tersedia',
  description: 'Halaman ini tampil saat perangkat sedang offline.',
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <section className="section offline-page" aria-labelledby="offline-title">
      <div className="container" style={{ maxWidth: '34rem', textAlign: 'center' }}>
        <div className="icon-tile" style={{ '--tile-color': '#047857', marginInline: 'auto', width: 72, height: 72, fontSize: '2rem' }}>
          <i className="bi bi-wifi-off" aria-hidden="true"></i>
        </div>
        <h1 id="offline-title" style={{ fontSize: '1.6rem' }}>Sedang Offline</h1>
        <p style={{ color: 'var(--muted)' }}>
          Koneksi internet Anda sedang tidak tersedia. Halaman yang pernah dibuka tetap bisa diakses —
          begitu online kembali, semuanya akan termuat otomatis.
        </p>
        <div style={{ display: 'flex', gap: '.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary"><i className="bi bi-house" aria-hidden="true"></i> Ke Beranda</Link>
          <a className="btn btn-outline" href="https://wa.me/6285817048266" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp" aria-hidden="true"></i> Chat WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
