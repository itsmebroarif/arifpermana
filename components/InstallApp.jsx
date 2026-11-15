'use client';

/**
 * InstallApp — pill "Install Aplikasi" untuk desktop & Android (beforeinstallprompt),
 * instruksi manual untuk iOS (Add to Home Screen), bisa ditutup (localStorage).
 */
import React, { useEffect, useState } from 'react';

const DISMISS_KEY = 'ap-install-dismissed';

export default function InstallApp() {
  const [deferred, setDeferred] = useState(null);
  const [showIos, setShowIos] = useState(false);
  const [dismissed, setDismissed] = useState(true); // default hidden sampai dicek

  useEffect(() => {
    try {
      if (window.localStorage.getItem(DISMISS_KEY) === '1') { setDismissed(true); return; }
      setDismissed(false);
    } catch { setDismissed(false); }

    const ua = window.navigator.userAgent || '';
    const isIos = /iPhone|iPad|iPod/i.test(ua);
    const standalone = window.navigator.standalone === true
      || window.matchMedia('(display-mode: standalone)').matches;
    if (isIos && !standalone) setShowIos(true);

    const onPrompt = (e) => {
      e.preventDefault();
      setDeferred(e);
    };
    window.addEventListener('beforeinstallprompt', onPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onPrompt);
  }, []);

  if (dismissed) return null;

  const dismiss = () => {
    try { window.localStorage.setItem(DISMISS_KEY, '1'); } catch {}
    setDismissed(true);
  };

  const install = async () => {
    if (!deferred) return;
    deferred.prompt();
    try { await deferred.userChoice; } catch {}
    setDeferred(null);
    dismiss();
  };

  return (
    <div className="install-pill" role="region" aria-label="Install aplikasi">
      <span className="install-pill-icon" aria-hidden="true"><i className="bi bi-download"></i></span>
      <span className="install-pill-text">
        <strong>Install aplikasi Arif AP</strong>
        <small>{showIos ? 'iPhone/iPad: Safari → Bagikan → “Tambah ke Layar Utama”' : 'Cek & order produk lebih cepat — langsung dari desktop atau HP'}</small>
      </span>
      {deferred && (
        <button type="button" className="btn btn-primary install-pill-btn" onClick={install}>
          <i className="bi bi-download" aria-hidden="true"></i> Install
        </button>
      )}
      <button type="button" className="install-pill-close" onClick={dismiss} aria-label="Tutup">
        <i className="bi bi-x-lg" aria-hidden="true"></i>
      </button>
    </div>
  );
}
