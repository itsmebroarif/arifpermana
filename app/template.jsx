'use client';

/**
 * Template — memberi transisi halus antar route (SPA feel)
 * dan scroll kembali ke atas setiap pindah halaman.
 */
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="page-transition">{children}</div>;
}
