'use client';

/**
 * MockShowcase — pratinjau dashboard 7 produk Sistem (SIMRS, ERP, CMS, LMS, EMS, POS, Landing Page).
 * Murni HTML/CSS + state React. Tab memakai role="tablist".
 */
import React, { useState } from 'react';

const SCREENS = [
  {
    id: 'simrs', label: 'SIMRS', icon: 'bi-hospital',
    footLeft: <><b>Sistem SIMRS</b> · v2.4</>, footRight: 'Uptime 99.98% · RME terintegrasi',
    kpis: [
      { label: 'Kunjungan Hari Ini', value: '1.284', delta: '▲ 12%' },
      { label: 'Klaim BPJS', value: '98.2%', delta: '▲ valid' },
      { label: 'Antrean IGD', value: '18', delta: '▼ normal' },
    ],
    chartLabel: 'Kunjungan 7 Hari', chartBadge: 'SATUSEHAT ✓',
    bars: [44, 62, 38, 96, 71, 84, 55], hot: 3,
    rows: [
      { icon: 'bi-person-check', title: 'Siti Rahma', desc: '— poli Gigi', tag: 'Selesai' },
      { icon: 'bi-prescription2', title: 'Asep Sudarman', desc: '— resep farmasi', tag: 'Diproses', amber: true },
      { icon: 'bi-file-earmark-medical', title: 'Labkesda #L-2291', desc: '— hasil keluar', tag: 'Terbit' },
    ],
  },
  {
    id: 'erp', label: 'ERP', icon: 'bi-diagram-3',
    footLeft: <><b>Sistem ERP</b> · v3.1</>, footRight: 'Multi-cabang · multi-gudang',
    kpis: [
      { label: 'Order Bulan Ini', value: '1.284', delta: '▲ 18% MoM' },
      { label: 'Stok Menipis', value: '12', delta: '▼ segera' },
      { label: 'Faktur Terbit', value: '1.096', delta: '▲ otomatis' },
    ],
    chartLabel: 'Penjualan 7 Bulan', chartBadge: 'Real-time ✓',
    bars: [40, 55, 48, 70, 66, 100, 82], hot: 5,
    rows: [
      { icon: 'bi-file-earmark-check', title: 'PO #1293', desc: '— Supplier Maju — disetujui', tag: 'Disetujui' },
      { icon: 'bi-box-seam', title: 'SKU K-12', desc: '— stok gudang Bekasi menipis', tag: 'Restock', amber: true },
      { icon: 'bi-receipt', title: 'Faktur #F-2210', desc: '— PT Karya Sejahtera — lunas', tag: 'Lunas' },
    ],
  },
  {
    id: 'cms', label: 'CMS', icon: 'bi-layout-text-window-reverse',
    footLeft: <><b>Sistem CMS</b> · v1.9</>, footRight: 'SEO friendly · WYSIWYG',
    kpis: [
      { label: 'Artikel Terbit', value: '128', delta: '▲ 24/bln' },
      { label: 'Draft', value: '14', delta: '▼ antre' },
      { label: 'Total Views', value: '45,2rb', delta: '▲ organik' },
    ],
    chartLabel: 'Publikasi 7 Minggu', chartBadge: 'Terjadwal ✓',
    bars: [35, 50, 75, 45, 88, 100, 60], hot: 5,
    rows: [
      { icon: 'bi-file-earmark-text', title: 'Cara Migrasi Blade → Vue', desc: '— 12rb views', tag: 'Published' },
      { icon: 'bi-pencil-square', title: '7 Tools Laravel Terbaik', desc: '— menunggu review', tag: 'Draft', amber: true },
      { icon: 'bi-images', title: 'Media Library', desc: '— 340 aset media rapi', tag: 'Rapi' },
    ],
  },
  {
    id: 'lms', label: 'LMS', icon: 'bi-mortarboard',
    footLeft: <><b>Sistem LMS</b> · v2.2</>, footRight: 'Sertifikat terbit otomatis',
    kpis: [
      { label: 'Siswa Aktif', value: '1.940', delta: '▲ 210/bln' },
      { label: 'Kelulusan', value: '94%', delta: '▲ kelas' },
      { label: 'Sertifikat Terbit', value: '312', delta: '▲ otomatis' },
    ],
    chartLabel: 'Aktivitas Belajar 7 Hari', chartBadge: 'Live class ✓',
    bars: [48, 70, 64, 82, 100, 58, 74], hot: 4,
    rows: [
      { icon: 'bi-broadcast', title: 'Kelas Laravel Dasar', desc: '— 320 siswa — live', tag: 'Live' },
      { icon: 'bi-ui-checks-grid', title: 'Kuis Modul #4', desc: '— 94% siswa lulus', tag: 'Selesai' },
      { icon: 'bi-patch-check', title: 'Sertifikat #S-0087', desc: '— terbit otomatis', tag: 'Baru', amber: true },
    ],
  },
  {
    id: 'ems', label: 'EMS', icon: 'bi-calendar2-event',
    footLeft: <><b>Sistem EMS</b> · v1.7</>, footRight: 'QR check-in 3 detik',
    kpis: [
      { label: 'Tiket Terjual', value: '3.850', delta: '▲ 640/mgg' },
      { label: 'Check-in H-0', value: '71%', delta: '▲ lancar' },
      { label: 'QR Terscan', value: '2.731', delta: '▲ hari ini' },
    ],
    chartLabel: 'Penjualan Tiket 7 Hari', chartBadge: 'QRIS ✓',
    bars: [30, 44, 58, 76, 90, 100, 83], hot: 5,
    rows: [
      { icon: 'bi-flag', title: 'Marathon Depok 2026', desc: '— 2.400 peserta', tag: 'H-7' },
      { icon: 'bi-mic', title: 'Seminar Tech Nasional', desc: '— 850 tiket terjual', tag: 'H-19' },
      { icon: 'bi-qr-code-scan', title: 'Gate A', desc: '— 2.731 scan check-in hari ini', tag: 'Scan', amber: true },
    ],
  },
  {
    id: 'pos', label: 'POS', icon: 'bi-shop',
    footLeft: <><b>Point of Sales</b> · v2.9</>, footRight: 'Offline-first · struk thermal',
    kpis: [
      { label: 'Transaksi Hari Ini', value: '342', delta: '▲ 22/hari' },
      { label: 'Item Terjual', value: '1.208', delta: '▲ outlet' },
      { label: 'Struk Dicetak', value: '338', delta: '▲ thermal' },
    ],
    chartLabel: 'Jam Sibuk 07.00–21.00', chartBadge: 'Offline-ready ✓',
    bars: [25, 40, 65, 92, 100, 96, 58], hot: 5,
    rows: [
      { icon: 'bi-person-badge', title: 'Shift Pagi', desc: '— Kasir Rina — 142 transaksi', tag: 'Aktif' },
      { icon: 'bi-person-badge', title: 'Shift Siang', desc: '— Kasir Dimas — 200 transaksi', tag: 'Siap', amber: true },
      { icon: 'bi-whatsapp', title: 'Laporan Harian', desc: '— terkirim ke WA pemilik', tag: 'Terkirim' },
    ],
  },
  {
    id: 'landing', label: 'Landing', icon: 'bi-rocket-takeoff',
    footLeft: <><b>Landing Page</b> · 1–2 mng</>, footRight: 'Mobile first · siap pixel iklan',
    kpis: [
      { label: 'Konversi', value: '6,8%', delta: '▲ iklan' },
      { label: 'Klik Iklan', value: '2.410', delta: '▲ 7 hari' },
      { label: 'Lead Masuk', value: '164', delta: '▲ ke WA' },
    ],
    chartLabel: 'Lead 7 Hari', chartBadge: 'Pixel aktif ✓',
    bars: [30, 42, 66, 58, 100, 78, 88], hot: 4,
    rows: [
      { icon: 'bi-megaphone', title: 'Kampanye Q4', desc: '— CTR 4,2% — di atas rata-rata', tag: 'On Track' },
      { icon: 'bi-bullseye', title: 'Pixel & Analytics', desc: '— terpasang & merekam', tag: 'OK' },
      { icon: 'bi-send-check', title: 'Form Lead', desc: '— 164 terhubung langsung ke WA', tag: 'Hot', amber: true },
    ],
  },
];

export default function MockShowcase() {
  const [active, setActive] = useState('simrs');
  const screen = SCREENS.find((s) => s.id === active) ?? SCREENS[0];

  return (
    <div className="mock-wrap reveal is-visible" role="group" aria-label="Pratinjau UI produk Sistem: SIMRS, ERP, CMS, LMS, EMS, POS, Landing Page">
      <div className="mock">
        <div className="mock-titlebar">
          <div className="mock-dots" aria-hidden="true"><span></span><span></span><span></span></div>
          <div className="mock-url"><i className="bi bi-lock-fill" aria-hidden="true"></i> app.sistem.id/dashboard</div>
        </div>

        <div className="mock-body">
          <aside className="mock-side" role="tablist" aria-label="Pratinjau produk Sistem">
            <div className="mock-side-logo"><i className="bi bi-boxes" aria-hidden="true"></i> Sistem</div>
            {SCREENS.map((s) => (
              <button
                key={s.id}
                className={`mock-nav ${s.id === active ? 'active' : ''}`}
                role="tab"
                aria-selected={s.id === active}
                onClick={() => setActive(s.id)}
              >
                <i className={`bi ${s.icon}`} aria-hidden="true"></i> {s.label}
              </button>
            ))}
          </aside>

          <div className="mock-main">
            <div className="mock-screen is-active" role="tabpanel" key={screen.id}>
              <div className="mock-kpis">
                {screen.kpis.map((k) => (
                  <div className="mock-kpi" key={k.label}>
                    <small>{k.label}</small><strong>{k.value}</strong><br /><span className="up">{k.delta}</span>
                  </div>
                ))}
              </div>
              <div className="mock-chart">
                <div className="mock-chart-head"><span>{screen.chartLabel}</span><em>{screen.chartBadge}</em></div>
                <div className="mock-bars" aria-hidden="true">
                  {screen.bars.map((h, i) => (
                    <div key={i} className={`mock-bar ${i === screen.hot ? 'hot' : ''}`} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="mock-rows">
                {screen.rows.map((r) => (
                  <div className="mock-row" key={r.title}>
                    <i className={`bi ${r.icon}`} aria-hidden="true"></i>
                    <span><b>{r.title}</b> {r.desc}</span>
                    <span className={`tag ${r.amber ? 'amber' : ''}`}>{r.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mock-foot"><span>{screen.footLeft}</span><span>{screen.footRight}</span></div>
      </div>

      <span className="float-chip chip-tl"><i className="bi bi-shield-check" aria-hidden="true"></i> SATUSEHAT Ready</span>
      <span className="float-chip chip-bl"><i className="bi bi-lightning-charge" aria-hidden="true"></i> Go-live 2–3 minggu</span>
    </div>
  );
}
