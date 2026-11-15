'use client';

/** Foto profil dengan fallback ke avatar inisial jika sumber eksternal gagal dimuat. */
export default function PhotoWithFallback() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://arifalexander.vercel.app/img/admin/Saya.jpeg"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = '/assets/img/avatar-fallback.svg';
      }}
      alt="Foto profil Arif Permana Putrasuryana"
      width={560}
      height={560}
    />
  );
}
