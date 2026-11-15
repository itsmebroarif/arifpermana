'use client';

/**
 * ConsultModal — form konsultasi produk (useReducer).
 * Dibuka lewat elemen dengan atribut `data-open-consult`
 * atau tombol kartu produk `.btn-request-product[data-product]`.
 * Submit → wa.me/6285817048266 (diskusi & negosiasi).
 */
import React, { useEffect, useReducer, useRef } from 'react';
import { toast } from './Toast';
import { getList } from '../lib/products';

const WA_NUMBER = '6285817048266';
const WA_RE = /^[+0-9][0-9\-\s]{7,18}$/;

const initialState = {
  open: false,
  fields: { nama: '', wa: '', bisnis: '', produk: 'custom', catatan: '' },
  errors: {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN': {
      const known = getList().some((p) => p.slug === action.slug);
      return {
        ...state,
        open: true,
        errors: {},
        fields: {
          ...state.fields,
          produk: action.slug ? (known || action.slug === 'custom' ? action.slug : 'custom') : state.fields.produk,
        },
      };
    }
    case 'CLOSE':
      return { ...state, open: false, errors: {} };
    case 'SET_FIELD': {
      const fields = { ...state.fields, [action.field]: action.value };
      const errors = { ...state.errors };
      delete errors[action.field];
      return { ...state, fields, errors };
    }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'RESET':
      return { ...state, errors: {}, fields: { ...initialState.fields } };
    default:
      return state;
  }
}

function buildMessage(f, productName) {
  return (
    `Halo Arif! Saya ingin diskusi & negosiasi untuk: ${productName}.\n\n` +
    `• Nama: ${f.nama.trim()}\n` +
    `• No. WA saya: ${f.wa.trim()}\n` +
    (f.bisnis.trim() ? `• Bisnis/Instansi: ${f.bisnis.trim()}\n` : '') +
    (f.catatan.trim() ? `• Catatan: ${f.catatan.trim()}\n` : '') +
    `\nMohon info detail & penawarannya, terima kasih.`
  );
}

export default function ConsultModal() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const namaRef = useRef(null);
  const products = getList();

  useEffect(() => {
    function onClick(e) {
      const productBtn = e.target.closest?.('.btn-request-product');
      if (productBtn) {
        e.preventDefault();
        dispatch({ type: 'OPEN', slug: productBtn.getAttribute('data-product') });
        return;
      }
      const trigger = e.target.closest?.('[data-open-consult]');
      if (trigger) {
        e.preventDefault();
        dispatch({ type: 'OPEN', slug: trigger.getAttribute('data-product') || null });
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!state.open) return undefined;
    function onKey(e) { if (e.key === 'Escape') dispatch({ type: 'CLOSE' }); }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    namaRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [state.open]);

  function handleSubmit(e) {
    e.preventDefault();
    const f = state.fields;
    const errors = {};
    if (!f.nama.trim()) errors.nama = 'Nama wajib diisi.';
    if (!WA_RE.test(f.wa.trim())) errors.wa = 'Format No. WhatsApp tidak valid.';
    dispatch({ type: 'SET_ERRORS', errors });
    if (Object.keys(errors).length) return;

    const productName = f.produk === 'custom'
      ? 'Website / Produk Custom'
      : products.find((p) => p.slug === f.produk)?.name ?? f.produk;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildMessage(f, productName))}`, '_blank', 'noopener,noreferrer');
    toast('WhatsApp terbuka — mari diskusi & negosiasi di sana.');
    dispatch({ type: 'RESET' });
    dispatch({ type: 'CLOSE' });
  }

  const { fields: f, errors } = state;

  return (
    <>
      {state.open && (
        <>
          <div className="consult-overlay" onClick={() => dispatch({ type: 'CLOSE' })} aria-hidden="true" />
          <div className="consult-dialog" role="dialog" aria-modal="true" aria-labelledby="consult-title">
            <button type="button" className="consult-close" onClick={() => dispatch({ type: 'CLOSE' })} aria-label="Tutup">
              <i className="bi bi-x-lg" aria-hidden="true"></i>
            </button>
            <span className="eyebrow" style={{ marginBottom: '.5rem' }}><span className="dot" /> Konsultasi Produk</span>
            <h3 id="consult-title" style={{ fontSize: '1.25rem' }}>Request Project — Diskusi via WhatsApp</h3>
            <p style={{ fontSize: '.9rem', marginBottom: '1rem' }}>
              Isi singkat kebutuhan Anda — langsung terbuka di WhatsApp saya untuk diskusi &amp; negosiasi, tanpa harga kaku.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="swal-form">
                <div>
                  <label htmlFor="rp-nama">Nama Lengkap *</label>
                  <input id="rp-nama" ref={namaRef} placeholder="Nama Anda" autoComplete="name" value={f.nama}
                    onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'nama', value: e.target.value })}
                    aria-invalid={!!errors.nama} required />
                  {errors.nama && <span className="form-error" role="alert">{errors.nama}</span>}
                </div>
                <div className="swal-row">
                  <div>
                    <label htmlFor="rp-wa">No. WhatsApp *</label>
                    <input id="rp-wa" placeholder="08xxxxxxxxxx" inputMode="tel" autoComplete="tel" value={f.wa}
                      onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'wa', value: e.target.value })}
                      aria-invalid={!!errors.wa} required />
                    {errors.wa && <span className="form-error" role="alert">{errors.wa}</span>}
                  </div>
                  <div>
                    <label htmlFor="rp-bisnis">Bisnis / Instansi</label>
                    <input id="rp-bisnis" placeholder="Opsional" value={f.bisnis}
                      onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'bisnis', value: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label htmlFor="rp-produk">Produk yang Diminati *</label>
                  <select id="rp-produk" value={f.produk}
                    onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'produk', value: e.target.value })}>
                    <option value="custom">Website / Produk Custom (diskusikan dulu)</option>
                    {products.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="rp-catatan">Catatan / Kebutuhan</label>
                  <textarea id="rp-catatan" rows={2} placeholder="Ceritakan singkat kebutuhan Anda…" value={f.catatan}
                    onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'catatan', value: e.target.value })} />
                </div>
              </div>
              <div className="consult-actions">
                <button type="button" className="btn btn-outline" onClick={() => dispatch({ type: 'CLOSE' })}>Batal</button>
                <button type="submit" className="btn btn-whatsapp"><i className="bi bi-whatsapp" aria-hidden="true"></i> Diskusi via WhatsApp</button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
