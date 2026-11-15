/**
 * Rate Card Project Based — Arif Permana
 * Desain HTML corporate → dicetak ke PDF via Chrome headless.
 * Manual:  npm run ratecard
 */
import { FALLBACK_PRODUCTS } from '../lib/products.js';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import crypto from 'node:crypto';

const execFileAsync = promisify(execFile);
const repoRoot = path.resolve(process.cwd());
const outDir = path.join(repoRoot, 'public', 'assets', 'docs');
fs.mkdirSync(outDir, { recursive: true });
const outPdf = path.join(outDir, 'ratecard-arifpermana.pdf');
const tmpHtml = process.env.RATE_CARD_KEEP_HTML
  ? path.join(outDir, 'ratecard.preview.html')
  : path.join(os.tmpdir(), 'ratecard-arifpermana.html');

const DOC_NO = 'RC/001/XI/2026';
const VALID_UNTIL = '31 Desember 2026';
const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const rows = FALLBACK_PRODUCTS.map((p, i) => `
        <tr>
          <td class="c-no">${i + 1}</td>
          <td class="c-prod"><strong>${esc(p.name)}</strong><span>${esc(p.tagline)}</span></td>
          <td class="c-cat">${p.category === 'system' ? 'Sistem' : 'Website'}</td>
          <td class="c-price">${rupiah(p.basePrice)}</td>
        </tr>`).join('');

const ketentuan = [
  'Harga yang tercantum adalah <strong>harga dasar (mulai dari)</strong> paket termurah untuk masing-masing produk — bukan harga mati, dan dapat ditinjau kembali sesuai kesepakatan.',
  'Harga final serta lingkup pekerjaan disepakati setelah <strong>analisis kebutuhan</strong> (survei / konsultasi), termasuk revisi minor pada masa implementasi.',
  'Pembayaran dilakukan bertahap: <strong>50% DP</strong> saat pekerjaan dimulai, dan pelunasan 50% sisanya saat <strong>sistem go-live</strong>.',
  'Setiap paket website sudah termasuk <strong>domain .com &amp; hosting 1 (satu) tahun</strong>, kecuali paket Undangan Digital.',
  'Masa pengerjaan, garansi, dan maintenance dicantumkan secara rinci dalam <strong>Surat Perjanjian / Kesepakatan Kerja</strong>.',
  'Customer berhak atas minimal <strong>2 (dua) kali revisi mockup</strong> desain sebelum memasuki tahap pembangunan.',
  'Kode sumber dan dokumentasi diserahkan kepada customer setelah <strong>pelunasan 100%</strong>.',
  'Penawaran harga berlaku sampai dengan <strong>31 Desember 2026</strong>, atau sampai diterbitkannya dokumen ini dalam versi terbaru.',
];

const html = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Rate Card — ${DOC_NO} — Arif Permana</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --navy: #0f172a; --navy-2: #1e293b; --brand: #047857; --brand-dark: #065f46;
    --amber: #d97706; --gold: #f59e0b; --muted: #64748b; --line: #e2e8f0;
    --tint: #f8fafc; --white: #ffffff;
  }
  html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color: var(--navy-2); background: #fff; }

  .page { width: 210mm; height: 297mm; position: relative; overflow: hidden; background: #fff; page-break-after: always; }
  .page:last-child { page-break-after: auto; }

  /* ===== Header band ===== */
  .brand {
    height: 30mm; background: var(--navy); border-bottom: 1.6mm solid var(--amber);
    display: grid; grid-template-columns: 15mm 1fr auto; align-items: center;
    padding: 0 12mm; gap: 6mm; color: var(--white);
  }
  .logo-mark {
    width: 15mm; height: 15mm; border-radius: 3.4mm; background: var(--brand);
    display: grid; place-items: center; font-family: 'Poppins'; font-weight: 800;
    font-size: 17pt; color: #fff; box-shadow: 2mm 2.6mm 0 #065f46;
  }
  .identity .name { font-family: 'Poppins'; font-weight: 700; font-size: 15.5pt; letter-spacing: .8pt; line-height: 1.1; }
  .identity .role { font-size: 6.3pt; letter-spacing: 2.6pt; color: #94a3b8; margin-top: 1.2mm; font-weight: 600; }
  .identity .open { display: inline-block; font-size: 5.6pt; font-weight: 800; letter-spacing: 2.4pt; color: var(--gold); margin-top: 1.6mm; }
  .docmeta { text-align: right; }
  .docmeta .label { font-size: 5.4pt; letter-spacing: 2pt; color: #94a3b8; font-weight: 700; }
  .docmeta .no { font-family: 'Poppins'; font-weight: 700; font-size: 10.5pt; margin-top: .8mm; }
  .docmeta .meta { font-size: 6.6pt; color: #cbd5e1; margin-top: 1.4mm; }
  .docmeta .meta b { color: #fff; font-weight: 600; }

  /* ===== Content ===== */
  .content { padding: 10mm 12mm 22mm; }
  .kicker { font-size: 7.2pt; font-weight: 800; letter-spacing: 2.8pt; color: var(--brand-dark); margin-bottom: 1.6mm; }
  h1.title { font-family: 'Poppins'; font-weight: 800; font-size: 30pt; line-height: 1.02; letter-spacing: -0.5pt; color: var(--navy); }
  h1.title small { display: block; font-size: 13.5pt; font-weight: 600; color: var(--brand-dark); letter-spacing: 1pt; margin-top: 1.6mm; }
  .rule { width: 18mm; height: 1.4mm; background: var(--amber); margin: 4.5mm 0 4mm; }
  .lead { font-size: 7.8pt; color: var(--muted); line-height: 1.55; max-width: 168mm; }

  /* ===== Table ===== */
  table.prices { width: 100%; border-collapse: collapse; margin-top: 6mm; font-size: 7.6pt; }
  .prices thead { background: var(--navy); color: #fff; }
  .prices th { font-size: 6pt; letter-spacing: 1.6pt; text-align: left; padding: 2.6mm 3mm; font-weight: 700; }
  .prices th.c-cat, .prices td.c-cat { text-align: center; }
  .prices th.c-price, .prices td.c-price { text-align: right; }
  .prices th.c-no, .prices td.c-no { text-align: center; width: 8mm; }
  .prices th.c-price { width: 34mm; }
  .prices th.c-cat { width: 20mm; }
  .prices td { padding: 2.35mm 3mm; border-bottom: 0.35pt solid var(--line); vertical-align: middle; }
  .prices tbody tr:nth-child(even) { background: var(--tint); }
  .prices td.c-prod strong { display: block; font-size: 7.6pt; color: var(--navy); font-weight: 700; }
  .prices td.c-prod span { display: block; font-size: 5.9pt; color: var(--muted); margin-top: 0.6mm; }
  .prices td.c-no { color: var(--muted); font-weight: 600; }
  .prices td.c-price { font-family: 'Poppins'; font-weight: 700; color: var(--brand-dark); font-size: 7.8pt; white-space: nowrap; }

  .footnote { margin-top: 4mm; font-size: 6.6pt; color: var(--muted); }
  .footnote b { color: var(--navy); }

  /* ===== Section titles ===== */
  .sec { margin-top: 7mm; }
  .sec-title { font-family: 'Poppins'; font-weight: 700; font-size: 9.5pt; letter-spacing: 2pt; color: var(--navy); }
  .sec-rule { width: 12mm; height: 1.1mm; background: var(--amber); margin: 1.6mm 0 4mm; }

  ol.ketentuan { list-style: none; counter-reset: item; }
  ol.ketentuan li {
    counter-increment: item; position: relative; padding-left: 9mm;
    font-size: 7.6pt; line-height: 1.6; color: var(--navy-2); margin-bottom: 3.1mm;
  }
  ol.ketentuan li::before {
    content: counter(item, decimal-leading-zero);
    position: absolute; left: 0; top: -0.4mm;
    font-family: 'Poppins'; font-weight: 800; font-size: 9pt; color: var(--amber);
  }

  .penutup p { font-size: 7.8pt; line-height: 1.65; color: var(--navy-2); }

  /* ===== Kotak kontak & tanda tangan ===== */
  .closing { display: grid; grid-template-columns: 1.15fr 1fr; gap: 6mm; margin-top: 6mm; }
  .contact-box {
    background: var(--tint); border: 0.5pt solid var(--line); border-radius: 2.4mm;
    padding: 5mm 6mm;
  }
  .contact-box .label { font-size: 5.8pt; font-weight: 800; letter-spacing: 1.8pt; color: var(--muted); }
  .contact-box .who { font-family: 'Poppins'; font-weight: 700; font-size: 11pt; color: var(--navy); margin: 2mm 0 3mm; }
  .contact-box .line { font-size: 7.4pt; margin-top: 1.6mm; color: var(--navy-2); }
  .contact-box .line b { display: inline-block; width: 15mm; color: var(--muted); font-weight: 600; font-size: 6.6pt; letter-spacing: .4pt; text-transform: uppercase; }
  .contact-box .fast { margin-top: 3mm; font-size: 6.8pt; font-weight: 700; color: var(--brand-dark); border-top: 0.5pt dashed var(--line); padding-top: 2.6mm; }

  .signature { padding: 2mm 1mm 0; }
  .signature .label { font-size: 5.8pt; font-weight: 800; letter-spacing: 1.8pt; color: var(--muted); }
  .signature .party { font-family: 'Poppins'; font-weight: 600; font-size: 7.8pt; color: var(--navy); margin: 1.6mm 0 14mm; }
  .signature .ruleline { border-top: 0.6pt solid var(--navy); padding-top: 1.6mm; }
  .signature .signname { font-family: 'Poppins'; font-weight: 700; font-size: 9pt; color: var(--navy); }
  .signature .role { font-size: 6.4pt; color: var(--muted); margin-top: .6mm; }

  /* ===== Footer band ===== */
  .foot {
    position: absolute; bottom: 0; left: 0; right: 0; height: 15mm;
    background: var(--navy); border-top: 1.2mm solid var(--amber);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 12mm; color: #94a3b8; font-size: 6pt;
  }
  .foot .right { text-align: right; color: var(--gold); font-weight: 700; letter-spacing: .6pt; }
  .foot .doc { color: #cbd5e1; }
</style>
</head>
<body>

<!-- ============ HALAMAN 1 ============ -->
<section class="page">
  <header class="brand">
    <div class="logo-mark">AP</div>
    <div class="identity">
      <div class="name">ARIF PERMANA</div>
      <div class="role">I T &nbsp; S O L U T I O N &nbsp; D E V E L O P E R</div>
      <span class="open">O P E N &nbsp; T O &nbsp; W O R K</span>
    </div>
    <div class="docmeta">
      <div class="label">N O M O R &nbsp; D O K U M E N</div>
      <div class="no">${DOC_NO}</div>
      <div class="meta">Terbit : <b>${esc(today)}</b></div>
      <div class="meta">Valid : <b>s.d. ${esc(VALID_UNTIL)}</b></div>
    </div>
  </header>

  <main class="content">
    <div class="kicker">D A F T A R &nbsp; H A R G A</div>
    <h1 class="title">RATE CARD<small>P R O J E C T &nbsp; B A S E D</small></h1>
    <div class="rule"></div>
    <p class="lead">Daftar harga dasar (mulai dari) paket termurah setiap produk Sistem — acuan penawaran awal kepada customer / klien. Harga final &amp; lingkup pekerjaan disepakati bersama setelah analisis kebutuhan (survei / konsultasi).</p>

    <table class="prices">
      <thead>
        <tr><th class="c-no">NO</th><th class="c-prod">PRODUK</th><th class="c-cat">KATEGORI</th><th class="c-price">HARGA DASAR</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>

    <p class="footnote"><b>Catatan:</b> harga di atas adalah paket termurah (base price) masing-masing produk. Harga final disepakati setelah analisis kebutuhan — lihat halaman 2 <b>Ketentuan Penawaran</b>.</p>
  </main>

  <footer class="foot">
    <div>WA 0858-1704-8266 &nbsp;·&nbsp; aripstrike@gmail.com &nbsp;·&nbsp; arifpermana.vercel.app<br><span class="doc">© 2026 Arif Permana Putrasuryana — Isi dokumen ini dapat berubah tanpa pemberitahuan tertulis.</span></div>
    <div class="right">Hal 1/2<br><span class="doc">${DOC_NO}</span></div>
  </footer>
</section>

<!-- ============ HALAMAN 2 ============ -->
<section class="page">
  <header class="brand">
    <div class="logo-mark">AP</div>
    <div class="identity">
      <div class="name">ARIF PERMANA</div>
      <div class="role">I T &nbsp; S O L U T I O N &nbsp; D E V E L O P E R</div>
      <span class="open">O P E N &nbsp; T O &nbsp; W O R K</span>
    </div>
    <div class="docmeta">
      <div class="label">N O M O R &nbsp; D O K U M E N</div>
      <div class="no">${DOC_NO}</div>
      <div class="meta">Terbit : <b>${esc(today)}</b></div>
      <div class="meta">Valid : <b>s.d. ${esc(VALID_UNTIL)}</b></div>
    </div>
  </header>

  <main class="content">
    <div class="sec">
      <div class="sec-title">K E T E N T U A N &nbsp; P E N A W A R A N</div>
      <div class="sec-rule"></div>
      <ol class="ketentuan">${ketentuan.map((t) => `<li>${t}</li>`).join('\n        ')}</ol>
    </div>

    <div class="sec penutup">
      <div class="sec-title">P E N U T U P</div>
      <div class="sec-rule"></div>
      <p>Kami berkomitmen membangun sistem yang rapi, tepat guna, dan berdampak — mulai dari identifikasi kebutuhan, desain, pembangunan, hingga go-live dan maintenance. Semoga penawaran ini melahirkan kerja sama yang saling menguntungkan. Demikian penawaran harga ini kami sampaikan; atas perhatian dan kerja samanya, kami ucapkan terima kasih.</p>
    </div>

    <div class="closing">
      <div class="contact-box">
        <div class="label">K O N T A K &nbsp; &amp; &nbsp; O R D E R</div>
        <div class="who">Arif Permana Putrasuryana</div>
        <div class="line"><b>WhatsApp</b>0858-1704-8266</div>
        <div class="line"><b>Email</b>aripstrike@gmail.com</div>
        <div class="line"><b>Website</b>arifpermana.vercel.app</div>
        <div class="fast"><i></i> Respons cepat — biasanya di hari yang sama.</div>
      </div>
      <div class="signature">
        <div class="label">M E N G E T A H U I / M E N Y E T U J U I</div>
        <div class="party">Pihak Pertama,</div>
        <div class="ruleline">
          <div class="signname">Arif Permana Putrasuryana</div>
          <div class="role">IT Solution Developer</div>
        </div>
      </div>
    </div>
  </main>

  <footer class="foot">
    <div>WA 0858-1704-8266 &nbsp;·&nbsp; aripstrike@gmail.com &nbsp;·&nbsp; arifpermana.vercel.app<br><span class="doc">© 2026 Arif Permana Putrasuryana — Isi dokumen ini dapat berubah tanpa pemberitahuan tertulis.</span></div>
    <div class="right">Hal 2/2<br><span class="doc">${DOC_NO}</span></div>
  </footer>
</section>

</body>
</html>`;

fs.writeFileSync(tmpHtml, html, 'utf8');

function findChrome() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.CHROME_PATH,
  ].filter(Boolean);
  for (const c of candidates) if (fs.existsSync(c)) return c;
  throw new Error('Chrome tidak ditemukan — install Google Chrome');
}

const chrome = findChrome();
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--no-sandbox',
  `--print-to-pdf=${outPdf}`,
  'file://' + tmpHtml,
];
try {
  await execFileAsync(chrome, args, { timeout: 90000 });
  const size = fs.statSync(outPdf).size;
  console.log(`Ratecard PDF written to ${outPdf} (${(size / 1024).toFixed(1)} KB, via Chrome headless)`);
} catch (err) {
  console.error('Gagal mencetak PDF:', err.message);
  process.exit(1);
} finally {
  if (!process.env.RATE_CARD_KEEP_HTML) fs.rmSync(tmpHtml, { force: true });
}
