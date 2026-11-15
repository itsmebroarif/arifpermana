'use client';

/**
 * Satu kali dipasang di layout — mengamati semua .reveal dan menambah .is-visible
 * saat masuk viewport. Fallback: setelah 1 detik semuanya ditampilkan
 * (agar konten tidak pernah tersangkut tersembunyi).
 */
import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    const revealAll = () => document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => el.classList.add('is-visible'));
    const els = Array.from(document.querySelectorAll('.reveal:not(.is-visible)'));
    if (!('IntersectionObserver' in window)) {
      revealAll();
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    const safety = window.setTimeout(revealAll, 1200);
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
