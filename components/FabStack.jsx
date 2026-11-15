'use client';

/** FAB: chat WhatsApp selalu tampil; tombol back-to-top muncul setelah scroll. */
import React, { useEffect, useState } from 'react';

export default function FabStack() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fab-stack">
      <a
        className="fab fab-whatsapp"
        href="https://wa.me/6285817048266"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp 0858-1704-8266"
      >
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
      </a>
      <button
        type="button"
        className={`fab fab-top ${showTop ? 'visible' : ''}`}
        aria-label="Kembali ke atas"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="bi bi-arrow-up" aria-hidden="true"></i>
      </button>
    </div>
  );
}
