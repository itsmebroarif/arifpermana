'use client';

/**
 * Header — solid white corporate bar, nav dengan underline active-state,
 * CTA "Request Website" (membuka ConsultModal lewat [data-open-consult]),
 * dan hamburger untuk mobile.
 */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/services', label: 'Produk & Layanan' },
  { href: '/contact', label: 'Contact' },
];

const SOCIALS = [
  { href: 'https://github.com/itsmebroarif', label: 'GitHub', icon: 'bi-github' },
  { href: 'https://www.instagram.com/eexxvvn/', label: 'Instagram', icon: 'bi-instagram' },
  { href: 'https://www.facebook.com/arif.alexander.56/', label: 'Facebook', icon: 'bi-facebook' },
  { href: 'https://www.linkedin.com/in/arif-permana-putrasuryana-121b761b9/', label: 'LinkedIn', icon: 'bi-linkedin' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    function onDocClick(e) {
      if (!navRef.current || !toggleRef.current) return;
      if (!navRef.current.contains(e.target) && !toggleRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <div className="header-inner">
      <Link className="logo" href="/" aria-label="Arif Permana — Beranda">
        <img className="logo-badge-img" src="/assets/img/logo.svg" alt="" width="34" height="34" />
        <span>Arif<span className="gradient-text">.</span></span>
      </Link>

      <nav aria-label="Navigasi utama">
        <ul className={`nav-list ${open ? 'open' : ''}`} id="nav-list" ref={navRef}>
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link className="nav-link" href={item.href} aria-current={active ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="header-actions">
        {SOCIALS.map((s) => (
          <a key={s.label} className="icon-btn hide-sm" href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
            <i className={`bi ${s.icon}`} aria-hidden="true"></i>
          </a>
        ))}
        <button type="button" className="btn btn-whatsapp header-cta" data-open-consult>
          <i className="bi bi-whatsapp" aria-hidden="true"></i> Request Website
        </button>
        <button
          className="nav-toggle"
          ref={toggleRef}
          aria-expanded={open}
          aria-controls="nav-list"
          aria-label="Buka tutup menu"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
