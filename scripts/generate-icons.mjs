/**
 * generate-icons.mjs — Membuat seluruh aset ikon/logo & OG image dari master SVG.
 *
 * Desain: "AP" monogram geometris bergaya tech — huruf A dibentuk dari
 * stroke diagonal ala chevron kode (</>), P dibentuk stem + busur setengah
 * lingkaran (gaya geometric sans). Gradient emerald→mint di atas tile
 * dark-slate — profesional, tajam di semua ukuran.
 *
 * Output ke public/assets/img/:
 *   logo.svg / logo-mark.svg          (master vector)
 *   favicon.png (256)                 (browser)
 *   icon-192.png / icon-512.png       (manifest "any")
 *   icon-maskable-192/512.png         (safe-zone 80%)
 *   apple-touch-icon.png (180)        (opaque)
 *   og-image.png (1200x630)           (Open Graph / Twitter)
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG = join(__dirname, '..', 'public', 'assets', 'img');

// ---------- shared defs ----------
const defs = `
  <linearGradient id="tile" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1c2942"/>
    <stop offset="1" stop-color="#0b1120"/>
  </linearGradient>
  <radialGradient id="sheen" cx="0.5" cy="0.18" r="0.9">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.14"/>
    <stop offset="0.45" stop-color="#ffffff" stop-opacity="0.03"/>
    <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="glyph" gradientUnits="userSpaceOnUse" x1="200" y1="740" x2="880" y2="280">
    <stop offset="0" stop-color="#059669"/>
    <stop offset="0.38" stop-color="#10b981"/>
    <stop offset="0.72" stop-color="#34d399"/>
    <stop offset="1" stop-color="#8bf0c4"/>
  </linearGradient>
  <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="26" result="b"/>
    <feMerge>
      <feMergeNode in="b"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
`;

// ---------- monogram glyph (A + P) ----------
// A: dua stroke diagonal + crossbar. P: stem + busur setengah lingkaran.
const glyph = `
  <g fill="none" stroke="url(#glyph)" stroke-width="84" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 172 732 L 356 292 L 540 732"/>
    <path d="M 249 582 H 463"/>
    <path d="M 622 732 V 292"/>
    <path d="M 622 292 H 742 A 118 118 0 0 1 742 528 H 622"/>
  </g>
`;
const glyphGlow = `
  <g fill="none" stroke="#34d399" stroke-opacity="0.5" stroke-width="84" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)">
    <path d="M 172 732 L 356 292 L 540 732"/>
    <path d="M 249 582 H 463"/>
    <path d="M 622 732 V 292"/>
    <path d="M 622 292 H 742 A 118 118 0 0 1 742 528 H 622"/>
  </g>
`;

// ---------- tile variants ----------
const roundedTile = (size = 1024) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 1024 1024">
  <defs>${defs}</defs>
  <rect width="1024" height="1024" rx="225" fill="url(#tile)"/>
  <rect width="1024" height="1024" rx="225" fill="url(#sheen)"/>
  <circle cx="886" cy="140" r="7" fill="#34d399" fill-opacity="0.9"/>
  <circle cx="886" cy="140" r="16" fill="none" stroke="#34d399" stroke-opacity="0.45" stroke-width="3"/>
  <circle cx="150" cy="886" r="7" fill="#34d399" fill-opacity="0.9"/>
  <circle cx="150" cy="886" r="16" fill="none" stroke="#34d399" stroke-opacity="0.45" stroke-width="3"/>
  ${glyphGlow}
  ${glyph}
</svg>`;

// Maskable / apple-touch: full-bleed, glyph di area aman 80%
const fullBleedTile = (scale = 0.78) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <defs>${defs}</defs>
  <rect width="1024" height="1024" fill="url(#tile)"/>
  <rect width="1024" height="1024" fill="url(#sheen)"/>
  <g transform="translate(512 512) scale(${scale}) translate(-526 -512)">
    ${glyphGlow}
    ${glyph}
  </g>
</svg>`;

const logoSvg = roundedTile(1024);
const logoMarkSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <defs>${defs}</defs>
  ${glyph}
</svg>`;

// ---------- OG image 1200x630 ----------
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="ogBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#16213b"/>
      <stop offset="0.55" stop-color="#0f172a"/>
      <stop offset="1" stop-color="#080d1c"/>
    </linearGradient>
    <radialGradient id="ogGlow" cx="0.86" cy="0.1" r="0.75">
      <stop offset="0" stop-color="#10b981" stop-opacity="0.38"/>
      <stop offset="0.6" stop-color="#10b981" stop-opacity="0.06"/>
      <stop offset="1" stop-color="#10b981" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ogGlyph" gradientUnits="userSpaceOnUse" x1="60" y1="470" x2="420" y2="220">
      <stop offset="0" stop-color="#059669"/>
      <stop offset="0.4" stop-color="#10b981"/>
      <stop offset="0.75" stop-color="#34d399"/>
      <stop offset="1" stop-color="#8bf0c4"/>
    </linearGradient>
    <linearGradient id="ogText" gradientUnits="userSpaceOnUse" x1="520" y1="0" x2="1150" y2="0">
      <stop offset="0" stop-color="#34d399"/>
      <stop offset="1" stop-color="#6ee7b7"/>
    </linearGradient>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M 44 0 H 0 V 44" fill="none" stroke="#ffffff" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#ogBg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#ogGlow)"/>

  <!-- logo tile -->
  <g transform="translate(96 165)">
    <rect x="0" y="0" width="300" height="300" rx="66" fill="#0b1120" stroke="#34d399" stroke-opacity="0.35" stroke-width="2"/>
    <g transform="translate(150 150) scale(0.24) translate(-526 -512)" fill="none" stroke="url(#ogGlyph)" stroke-width="84" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 172 732 L 356 292 L 540 732"/>
      <path d="M 249 582 H 463"/>
      <path d="M 622 732 V 292"/>
      <path d="M 622 292 H 742 A 118 118 0 0 1 742 528 H 622"/>
    </g>
  </g>

  <!-- text block -->
  <text x="472" y="252" font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="62" fill="#f8fafc" letter-spacing="1">ARIF PERMANA</text>
  <text x="472" y="326" font-family="'Arial Black',Arial,sans-serif" font-weight="900" font-size="62" fill="url(#ogText)" letter-spacing="1">PUTRASURYANA</text>
  <line x1="472" y1="352" x2="1050" y2="352" stroke="#34d399" stroke-opacity="0.4" stroke-width="2"/>
  <text x="472" y="402" font-family="Arial,sans-serif" font-size="27" fill="#e2e8f0">Web Developer &amp; Software Engineer</text>
  <text x="472" y="440" font-family="Arial,sans-serif" font-size="21" fill="#94a3b8">Jasa Pengembang Software &amp; Web · Depok</text>
  <text x="472" y="512" font-family="'Courier New',monospace" font-size="21" fill="#34d399">arifpermana.vercel.app</text>
  <text x="472" y="546" font-family="'Courier New',monospace" font-size="17" fill="#64748b">github.com/itsmebroarif</text>
</svg>`;

const jobs = [
  ['logo.svg', Buffer.from(logoSvg)],
  ['logo-mark.svg', Buffer.from(logoMarkSvg)],
  ['favicon.png', Buffer.from(roundedTile()), 256],
  ['icon-192.png', Buffer.from(roundedTile()), 192],
  ['icon-512.png', Buffer.from(roundedTile()), 512],
  ['icon-maskable-192.png', Buffer.from(fullBleedTile(0.78)), 192],
  ['icon-maskable-512.png', Buffer.from(fullBleedTile(0.78)), 512],
  ['apple-touch-icon.png', Buffer.from(fullBleedTile(0.86)), 180],
  ['og-image.png', Buffer.from(ogSvg), null],
];

for (const [name, input, size] of jobs) {
  const dest = join(IMG, name);
  if (name.endsWith('.svg')) {
    writeFileSync(dest, input);
  } else if (size) {
    await sharp(input, { density: 300 }).resize(size, size).png().toFile(dest);
  } else {
    await sharp(input).resize(1200, 630, { fit: 'fill' }).png({ compressionLevel: 9 }).toFile(dest);
  }
  console.log('✓', name);
}
console.log('Done → public/assets/img/');
