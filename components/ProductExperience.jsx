'use client';

/**
 * ProductExperience — satu modal dengan dua tampilan:
 *  1) "detail"  : halaman detail produk (dirender di situs ini, bukan iframe/link luar)
 *  2) "wizard"  : konsultasi 4 langkah — Produk → Fitur → Biodata → Ringkasan → WhatsApp
 *
 * Trigger (delegasi global):
 *  - [data-product-detail]      → buka detail
 *  - .btn-request-product        → buka wizard (preselect produk kartu)
 *  - [data-open-consult]         → buka wizard (step 1, atau data-product jika diisi)
 */
import React, { useEffect, useMemo, useState } from 'react';
import { toast } from './Toast';
import { getList } from '../lib/products';

const WA_NUMBER = '6285817048266';
const WA_RE = /^[+0-9][0-9\-\s]{7,18}$/;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const RATE_CARD = '/assets/docs/ratecard-arifpermana.pdf';
const TOTAL_STEPS = 4;
const STEP_LABELS = ['Produk', 'Fitur', 'Biodata', 'Ringkasan'];

const emptyFields = { nama: '', wa: '', bisnis: '', email: '', kota: '' };

export default function ProductExperience() {
  const products = useMemo(() => getList(), []);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState('wizard'); // 'detail' | 'wizard'
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState(null); // slug
  const [checked, setChecked] = useState({}); // slug -> string[]
  const [custom, setCustom] = useState({}); // slug -> string
  const [fields, setFields] = useState(emptyFields);
  const [errors, setErrors] = useState({});

  const current = product ? products.find((p) => p.slug === product) : null;
  const selected = (product && checked[product]) || [];
  const customNote = (product && custom[product]) || '';

  /* ---------- triggers ---------- */
  useEffect(() => {
    function onClick(e) {
      const detailBtn = e.target.closest?.('[data-product-detail]');
      if (detailBtn) {
        e.preventDefault();
        const slug = detailBtn.getAttribute('data-product-detail');
        setProduct(slug || products[0].slug);
        setView('detail');
        setOpen(true);
        return;
      }
      const productBtn = e.target.closest?.('.btn-request-product');
      if (productBtn) {
        e.preventDefault();
        openWizard(productBtn.getAttribute('data-product') || null);
        return;
      }
      const consultBtn = e.target.closest?.('[data-open-consult]');
      if (consultBtn) {
        e.preventDefault();
        openWizard(consultBtn.getAttribute('data-product') || null);
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openWizard(slug) {
    setProduct(slug || null);
    setView('wizard');
    setStep(slug ? 2 : 1);
    setErrors({});
    setOpen(true);
  }

  /* ---------- body lock + escape ---------- */
  useEffect(() => {
    if (!open) return undefined;
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  /* ---------- helpers ---------- */
  function toggleFeature(label) {
    setChecked((prev) => {
      const list = prev[product] || [];
      const next = list.includes(label) ? list.filter((x) => x !== label) : [...list, label];
      return { ...prev, [product]: next };
    });
    setErrors((e) => ({ ...e, features: undefined }));
  }

  function setField(field, value) {
    setFields((prev) => ({ ...prev, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validateStep(s) {
    const next = {};
    if (s === 1 && !product) next.product = 'Pilih salah satu produk untuk melanjutkan.';
    if (s === 2) {
      if (selected.length === 0 && !customNote.trim()) next.features = 'Pilih minimal 1 fitur, atau tuliskan kebutuhan lain di kolom "Fitur lainnya".';
    }
    if (s === 3) {
      if (!fields.nama.trim()) next.nama = 'Nama wajib diisi.';
      if (!WA_RE.test(fields.wa.trim())) next.wa = 'Format No. WhatsApp tidak valid.';
      if (fields.email.trim() && !EMAIL_RE.test(fields.email.trim())) next.email = 'Format email tidak valid.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() { if (validateStep(step)) setStep((s) => Math.min(TOTAL_STEPS, s + 1)); }
  function goBack() { setStep((s) => Math.max(1, s - 1)); }

  function buildMessage() {
    const name = current?.name ?? product;
    const lines = [`Halo Arif! Saya ingin request ${name}.`, ''];
    lines.push('FITUR YANG DIBUTUHKAN:');
    selected.forEach((f) => lines.push(`• ${f}`));
    if (customNote.trim()) lines.push(`• Catatan tambahan: ${customNote.trim()}`);
    lines.push('', 'BIODATA PEMESAN:');
    lines.push(`• Nama: ${fields.nama.trim()}`);
    lines.push(`• No. WA: ${fields.wa.trim()}`);
    if (fields.bisnis.trim()) lines.push(`• Bisnis/Instansi: ${fields.bisnis.trim()}`);
    if (fields.email.trim()) lines.push(`• Email: ${fields.email.trim()}`);
    if (fields.kota.trim()) lines.push(`• Kota/Domisili: ${fields.kota.trim()}`);
    lines.push('', 'Mohon info lebih lanjut dan penawarannya. Terima kasih.');
    return lines.join('\n');
  }

  function sendToWhatsApp() {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildMessage())}`, '_blank', 'noopener,noreferrer');
    toast('WhatsApp terbuka — mari lanjutkan negosiasi di sana.');
    setOpen(false);
    // reset bertahap setelah modal tertutup
    setChecked({}); setCustom({}); setFields(emptyFields); setErrors({});
    setProduct(null); setStep(1); setView('wizard');
  }

  if (!open) return null;

  const wide = view === 'detail' || step === 4;

  return (
    <>
      <div className="consult-overlay" onClick={() => setOpen(false)} aria-hidden="true" />
      <div className={`consult-dialog ${wide ? 'consult-dialog--wide' : ''}`} role="dialog" aria-modal="true" aria-labelledby="pe-title">
        <button type="button" className="consult-close" onClick={() => setOpen(false)} aria-label="Tutup">
          <i className="bi bi-x-lg" aria-hidden="true"></i>
        </button>

        {view === 'detail' && current && (
          <DetailView product={current} onStartWizard={() => openWizard(current.slug)} onClose={() => setOpen(false)} />
        )}

        {view === 'wizard' && (
          <>
            <span className="eyebrow" style={{ marginBottom: '.4rem' }}><span className="dot"></span> Konsultasi &amp; Request Project</span>
            <WizardSteps step={step} />
            <h3 id="pe-title" className="wizard-title">{STEP_LABELS[step - 1] === 'Produk' ? 'Pilih Produk Anda' : step === 2 ? `Fitur untuk ${current?.name ?? 'Produk'}` : step === 3 ? 'Biodata Pemesan' : 'Ringkasan Order'}</h3>

            {/* STEP 1 — produk */}
            {step === 1 && (
              <div className="wizard-body">
                {errors.product && <span className="form-error" role="alert">{errors.product}</span>}
                <div className="wizard-product-grid" role="listbox" aria-label="Pilih produk">
                  {products.map((p) => {
                    const on = product === p.slug;
                    return (
                      <button key={p.slug} type="button" className={`wizard-product ${on ? 'on' : ''}`} role="option" aria-selected={on}
                        onClick={() => { setProduct(p.slug); setErrors((e) => ({ ...e, product: undefined })); }}>
                        <span className="icon-tile" style={{ '--tile-color': p.color, marginBottom: 0, width: 44, height: 44, fontSize: '1.1rem' }}><i className={`bi ${p.icon}`} aria-hidden="true"></i></span>
                        <span className="wizard-product-name">{p.name}</span>
                        <span className="wizard-product-check" aria-hidden="true"><i className="bi bi-check2"></i></span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2 — fitur */}
            {step === 2 && current && (
              <div className="wizard-body">
                <p className="wizard-hint">Centang fitur yang Anda butuhkan (bisa lebih dari satu). Kalau ada kebutuhan lain, tulis di "Fitur lainnya".</p>
                {errors.features && <span className="form-error" role="alert">{errors.features}</span>}
                <div className="wizard-feature-grid">
                  {current.features.map((f) => {
                    const on = selected.includes(f.label);
                    return (
                      <button key={f.label} type="button" className={`wizard-feature ${on ? 'on' : ''}`} aria-pressed={on} onClick={() => toggleFeature(f.label)}>
                        <span className="wizard-feature-icon"><i className={`bi ${f.icon}`} aria-hidden="true"></i></span>
                        <span className="wizard-feature-text">
                          <strong>{f.label}</strong>
                          <small>{f.desc}</small>
                        </span>
                        <span className="wizard-feature-check" aria-hidden="true"><i className="bi bi-check2"></i></span>
                      </button>
                    );
                  })}
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label htmlFor="pe-custom">Fitur lainnya (opsional)</label>
                  <textarea id="pe-custom" className="form-control" rows={2} placeholder="Mis: integrasi WhatsApp gateway, cetak resi, 2 bahasa…" value={customNote}
                    onChange={(e) => { setCustom((prev) => ({ ...prev, [product]: e.target.value })); setErrors((er) => ({ ...er, features: undefined })); }} />
                </div>
              </div>
            )}

            {/* STEP 3 — biodata */}
            {step === 3 && (
              <div className="wizard-body">
                <div className="swal-form">
                  <div>
                    <label htmlFor="pe-nama">Nama Lengkap *</label>
                    <input id="pe-nama" placeholder="Nama Anda" autoComplete="name" value={fields.nama}
                      onChange={(e) => setField('nama', e.target.value)} aria-invalid={!!errors.nama} />
                    {errors.nama && <span className="form-error" role="alert">{errors.nama}</span>}
                  </div>
                  <div className="swal-row">
                    <div>
                      <label htmlFor="pe-wa">No. WhatsApp *</label>
                      <input id="pe-wa" placeholder="08xxxxxxxxxx" inputMode="tel" autoComplete="tel" value={fields.wa}
                        onChange={(e) => setField('wa', e.target.value)} aria-invalid={!!errors.wa} />
                      {errors.wa && <span className="form-error" role="alert">{errors.wa}</span>}
                    </div>
                    <div>
                      <label htmlFor="pe-email">Email</label>
                      <input id="pe-email" type="email" placeholder="nama@email.com" autoComplete="email" value={fields.email}
                        onChange={(e) => setField('email', e.target.value)} aria-invalid={!!errors.email} />
                      {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="swal-row">
                    <div>
                      <label htmlFor="pe-bisnis">Bisnis / Instansi</label>
                      <input id="pe-bisnis" placeholder="Opsional" value={fields.bisnis} onChange={(e) => setField('bisnis', e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="pe-kota">Kota / Domisili</label>
                      <input id="pe-kota" placeholder="Opsional — mis: Depok" value={fields.kota} onChange={(e) => setField('kota', e.target.value)} />
                    </div>
                  </div>
                </div>
                <p className="wizard-hint" style={{ marginBottom: 0 }}><i className="bi bi-shield-lock" aria-hidden="true"></i> Data hanya dipakai untuk keperluan komunikasi project ini.</p>
              </div>
            )}

            {/* STEP 4 — ringkasan */}
            {step === 4 && current && (
              <div className="wizard-body">
                <div className="summary-card">
                  <div className="summary-head">
                    <span className="icon-tile" style={{ '--tile-color': current.color, marginBottom: 0, width: 48, height: 48, fontSize: '1.2rem' }}><i className={`bi ${current.icon}`} aria-hidden="true"></i></span>
                    <div>
                      <small>PRODUK DIPILIH</small>
                      <h4>{current.name}</h4>
                    </div>
                  </div>
                  <div className="summary-block">
                    <small>FITUR YANG DIBUTUHKAN ({selected.length + (customNote.trim() ? 1 : 0)})</small>
                    <ul className="summary-features">
                      {selected.map((f) => <li key={f}><i className="bi bi-check2-circle" aria-hidden="true"></i>{f}</li>)}
                      {customNote.trim() && <li><i className="bi bi-pencil-square" aria-hidden="true"></i>{customNote.trim()}</li>}
                    </ul>
                  </div>
                  <div className="summary-block">
                    <small>BIODATA PEMESAN</small>
                    <div className="summary-biodata">
                      <span>Nama</span><b>{fields.nama.trim()}</b>
                      <span>WhatsApp</span><b>{fields.wa.trim()}</b>
                      {fields.bisnis.trim() && (<><span>Bisnis / Instansi</span><b>{fields.bisnis.trim()}</b></>)}
                      {fields.email.trim() && (<><span>Email</span><b>{fields.email.trim()}</b></>)}
                      {fields.kota.trim() && (<><span>Kota / Domisili</span><b>{fields.kota.trim()}</b></>)}
                    </div>
                  </div>
                  <p className="summary-note">
                    <i className="bi bi-info-circle" aria-hidden="true"></i>
                    Harga <strong>final disepakati saat project berjalan</strong> berdasarkan analisis kebutuhan. Ratecard terlampir berisi harga dasar termurah.
                  </p>
                </div>
                <a className="btn btn-outline btn-block" href={RATE_CARD} target="_blank" rel="noopener noreferrer" style={{ marginTop: '.75rem' }}>
                  <i className="bi bi-file-earmark-pdf" aria-hidden="true"></i> Unduh Ratecard (PDF)
                </a>
              </div>
            )}

            {/* Navigation */}
            <div className="consult-actions wizard-nav">
              {step > 1
                ? <button type="button" className="btn btn-outline" onClick={goBack}><i className="bi bi-arrow-left" aria-hidden="true"></i> Kembali</button>
                : <button type="button" className="btn btn-outline" onClick={() => setOpen(false)}>Batal</button>}
              {step < TOTAL_STEPS
                ? <button type="button" className="btn btn-primary" onClick={goNext}>Lanjut <i className="bi bi-arrow-right" aria-hidden="true"></i></button>
                : <button type="button" className="btn btn-whatsapp btn-lg" onClick={sendToWhatsApp}><i className="bi bi-whatsapp" aria-hidden="true"></i> Kirim ke WhatsApp</button>}
            </div>
          </>
        )}
      </div>
    </>
  );
}

/* ================= Detail View ================= */
function DetailView({ product: p, onStartWizard, onClose }) {
  return (
    <div className="detail-view">
      <span className="eyebrow" style={{ marginBottom: '.4rem' }}><span className="dot"></span> Detail Produk</span>
      <div className="detail-hero">
        <span className="icon-tile" style={{ '--tile-color': p.color, marginBottom: 0, width: 64, height: 64, fontSize: '1.6rem' }}>
          <i className={`bi ${p.icon}`} aria-hidden="true"></i>
        </span>
        <div>
          <h3 id="pe-title" style={{ fontSize: '1.35rem', marginBottom: '.15rem' }}>{p.name}</h3>
          <p style={{ marginBottom: 0, color: 'var(--muted)' }}>{p.tagline}</p>
        </div>
      </div>

      <p className="detail-desc">{p.description}</p>

      <ul className="product-highlights" style={{ marginBottom: '1rem' }}>
        {p.highlights.map((h) => <li key={h} className="chip chip-tint">{h}</li>)}
      </ul>

      <small className="detail-section-label">FITUR UTAMA</small>
      <div className="detail-features">
        {p.features.map((f) => (
          <div className="detail-feature" key={f.label}>
            <i className={`bi ${f.icon}`} aria-hidden="true"></i>
            <span><strong>{f.label}</strong><small>{f.desc}</small></span>
          </div>
        ))}
      </div>

      <small className="detail-section-label">COCOK UNTUK</small>
      <ul className="detail-ideal">
        {p.idealFor.map((i) => <li key={i}><i className="bi bi-check2-circle" aria-hidden="true"></i>{i}</li>)}
      </ul>

      <div className="consult-actions" style={{ justifyContent: 'space-between' }}>
        <a className="btn btn-ghost" href={RATE_CARD} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-file-earmark-pdf" aria-hidden="true"></i> Ratecard (PDF)
        </a>
        <button type="button" className="btn btn-primary" onClick={onStartWizard}>
          <i className="bi bi-rocket-takeoff" aria-hidden="true"></i> Konsultasi &amp; Request
        </button>
      </div>
    </div>
  );
}

/* ================= Stepper ================= */
function WizardSteps({ step }) {
  return (
    <ol className="wizard-steps" aria-label="Langkah konsultasi">
      {STEP_LABELS.map((label, i) => {
        const n = i + 1;
        const state = n < step ? 'done' : n === step ? 'current' : 'todo';
        return (
          <li key={label} className={`wizard-step ${state}`} aria-current={state === 'current' ? 'step' : undefined}>
            <span className="wizard-step-dot">{state === 'done' ? <i className="bi bi-check2" aria-hidden="true"></i> : n}</span>
            <span className="wizard-step-label">{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
