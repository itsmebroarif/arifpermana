/**
 * Arif Permana — React Islands
 * 1. ContactForm   — form kontak (useState), submit → WhatsApp untuk negosiasi
 * 2. ConsultModal  — form konsultasi produk (useReducer) → WhatsApp untuk diskusi & negosiasi
 *
 * State management: React hooks (useState / useReducer), tanpa library tambahan.
 */
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

var WA_NUMBER = '6285817048266';

function waLink(text) {
  return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
}

function getProducts() {
  try {
    if (window.SistemKatalog && typeof window.SistemKatalog.getList === 'function') {
      return window.SistemKatalog.getList();
    }
  } catch (e) { /* fallback di bawah */ }
  return [
    { slug: 'erp', name: 'Sistem ERP' }, { slug: 'simrs', name: 'Sistem SIMRS' },
    { slug: 'lms', name: 'Sistem LMS' }, { slug: 'cms', name: 'Sistem CMS' },
    { slug: 'event-management', name: 'Sistem EMS' }, { slug: 'point-of-sale', name: 'Point of Sales' },
    { slug: 'company-profile', name: 'Website Company Profile' }, { slug: 'e-commerce', name: 'Website E-Commerce' },
    { slug: 'landing-page', name: 'Landing Page' }, { slug: 'web-profile', name: 'Web Profil Bisnis' },
    { slug: 'undangan-digital', name: 'Website Undangan Digital' }
  ];
}

var EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
var WA_RE = /^[+0-9][0-9\-\s]{7,18}$/;

/* ---------- Toast sederhana (pub/sub ringan) ---------- */
var listeners = [];
function toast(message) {
  listeners.forEach(function (fn) { fn(message); });
}
function onToast(fn) {
  listeners.push(fn);
  return function () { listeners = listeners.filter(function (l) { return l !== fn; }); };
}

function ToastHost() {
  var _useState = useState(null);
  var message = _useState[0], setMessage = _useState[1];
  var timer = useRef(null);
  useEffect(function () {
    var off = onToast(function (msg) {
      setMessage(msg);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(function () { setMessage(null); }, 4200);
    });
    return function () { off(); if (timer.current) clearTimeout(timer.current); };
  }, []);
  if (!message) return null;
  return (
    <div className="toast-host" role="status" aria-live="polite">
      <i className="bi bi-whatsapp" aria-hidden="true"></i>
      <span>{message}</span>
    </div>
  );
}

/* ==========================================================
   1) CONTACT FORM — useState
   ========================================================== */
function ContactForm() {
  var _useState2 = useState({ name: '', email: '', subject: '', message: '' });
  var form = _useState2[0], setForm = _useState2[1];
  var _useState3 = useState({});
  var errors = _useState3[0], setErrors = _useState3[1];
  var _useState4 = useState(false);
  var sending = _useState4[0], setSending = _useState4[1];

  function update(field) {
    return function (e) {
      var value = e.target.value;
      setForm(function (prev) { var next = Object.assign({}, prev); next[field] = value; return next; });
      if (errors[field]) setErrors(function (prev) { var next = Object.assign({}, prev); delete next[field]; return next; });
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    var nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Nama wajib diisi.';
    if (!EMAIL_RE.test(form.email.trim())) nextErrors.email = 'Format email tidak valid.';
    if (!form.subject.trim()) nextErrors.subject = 'Subjek wajib diisi.';
    if (form.message.trim().length < 5) nextErrors.message = 'Pesan minimal 5 karakter.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    var text =
      'Halo Arif, saya ' + form.name.trim() + '.\n\n' +
      'Subjek: ' + form.subject.trim() + '\n' +
      'Email: ' + form.email.trim() + '\n\n' +
      'Pesan:\n' + form.message.trim() + '\n\n' +
      'Saya ingin diskusi & negosiasi lebih lanjut mengenai hal ini.';
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
    toast('WhatsApp terbuka — mari lanjut diskusi & negosiasi di sana.');
    setForm({ name: '', email: '', subject: '', message: '' });
    setSending(false);
  }

  return (
    <form className="card contact-react-card" style={{ transitionDelay: '.1s' }} onSubmit={handleSubmit} noValidate>
      <h3 style={{ fontSize: '1.15rem' }}>Kirim Pesan</h3>
      <p style={{ fontSize: '.9rem' }}>Isi formulir di bawah — sekali klik, pesannya langsung terbuka di WhatsApp untuk diskusi &amp; negosiasi.</p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-name">Nama</label>
          <input className="form-control" type="text" id="cf-name" name="name" placeholder="Nama Anda" autoComplete="name" value={form.name} onChange={update('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'cf-name-err' : undefined} required />
          {errors.name && <span className="form-error" id="cf-name-err" role="alert">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cf-email">Email</label>
          <input className="form-control" type="email" id="cf-email" name="email" placeholder="nama@email.com" autoComplete="email" value={form.email} onChange={update('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'cf-email-err' : undefined} required />
          {errors.email && <span className="form-error" id="cf-email-err" role="alert">{errors.email}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="cf-subject">Subjek</label>
        <input className="form-control" type="text" id="cf-subject" name="subject" placeholder="Mis: Request pembuatan website company profile" value={form.subject} onChange={update('subject')} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'cf-subject-err' : undefined} required />
        {errors.subject && <span className="form-error" id="cf-subject-err" role="alert">{errors.subject}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="cf-message">Pesan</label>
        <textarea className="form-control" id="cf-message" name="message" rows="5" placeholder="Ceritakan kebutuhan Anda…" value={form.message} onChange={update('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'cf-message-err' : undefined} required></textarea>
        {errors.message && <span className="form-error" id="cf-message-err" role="alert">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn-whatsapp btn-block btn-lg" disabled={sending}>
        <i className="bi bi-whatsapp" aria-hidden="true"></i> {sending ? 'Membuka WhatsApp…' : 'Kirim & Diskusi via WhatsApp'}
      </button>
    </form>
  );
}

/* ==========================================================
   2) CONSULT MODAL — useReducer
   ========================================================== */
var initialState = {
  open: false,
  preselect: null,
  fields: { nama: '', wa: '', bisnis: '', produk: 'custom', catatan: '' },
  errors: {}
};

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN': {
      var produk = action.slug || state.fields.produk || 'custom';
      var known = getProducts().some(function (p) { return p.slug === produk; });
      return Object.assign({}, state, {
        open: true,
        preselect: action.slug || null,
        fields: Object.assign({}, state.fields, { produk: (known || produk === 'custom') ? produk : 'custom' }),
        errors: {}
      });
    }
    case 'CLOSE':
      return Object.assign({}, state, { open: false, errors: {} });
    case 'SET_FIELD': {
      var nextFields = Object.assign({}, state.fields);
      nextFields[action.field] = action.value;
      var nextErrors = Object.assign({}, state.errors);
      delete nextErrors[action.field];
      return Object.assign({}, state, { fields: nextFields, errors: nextErrors });
    }
    case 'SET_ERRORS':
      return Object.assign({}, state, { errors: action.errors });
    case 'RESET_FIELDS':
      return Object.assign({}, state, { errors: {}, fields: Object.assign({}, initialState.fields) });
    default:
      return state;
  }
}

function ConsultModal() {
  var _useReducer = useReducer(reducer, initialState);
  var state = _useReducer[0], dispatch = _useReducer[1];
  var namaRef = useRef(null);
  var products = getProducts();

  // Buka modal lewat tombol .btn-open-request / .btn-request-product (delegasi, tahan re-render katalog)
  useEffect(function () {
    function onClick(e) {
      var productBtn = e.target.closest ? e.target.closest('.btn-request-product') : null;
      if (productBtn) {
        e.preventDefault();
        dispatch({ type: 'OPEN', slug: productBtn.getAttribute('data-product') });
        return;
      }
      var trigger = e.target.closest ? e.target.closest('.btn-open-request') : null;
      if (trigger) {
        e.preventDefault();
        dispatch({ type: 'OPEN', slug: trigger.getAttribute('data-product') || null });
      }
    }
    document.addEventListener('click', onClick);
    return function () { document.removeEventListener('click', onClick); };
  }, []);

  // Escape untuk menutup + kunci scroll body
  useEffect(function () {
    if (!state.open) return undefined;
    function onKey(e) { if (e.key === 'Escape') dispatch({ type: 'CLOSE' }); }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    if (namaRef.current) namaRef.current.focus();
    return function () {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [state.open]);

  function setField(field) {
    return function (e) { dispatch({ type: 'SET_FIELD', field: field, value: e.target.value }); };
  }

  function handleSubmit(e) {
    e.preventDefault();
    var f = state.fields;
    var nextErrors = {};
    if (!f.nama.trim()) nextErrors.nama = 'Nama wajib diisi.';
    if (!WA_RE.test(f.wa.trim())) nextErrors.wa = 'Format No. WhatsApp tidak valid.';
    dispatch({ type: 'SET_ERRORS', errors: nextErrors });
    if (Object.keys(nextErrors).length > 0) return;

    var selected = products.find(function (p) { return p.slug === f.produk; });
    var produkName = f.produk === 'custom' ? 'Website / Produk Custom' : (selected ? selected.name : f.produk);
    var text =
      'Halo Arif! Saya ingin diskusi & negosiasi untuk: ' + produkName + '.\n\n' +
      '• Nama: ' + f.nama.trim() + '\n' +
      '• No. WA saya: ' + f.wa.trim() + '\n' +
      (f.bisnis.trim() ? '• Bisnis/Instansi: ' + f.bisnis.trim() + '\n' : '') +
      (f.catatan.trim() ? '• Catatan: ' + f.catatan.trim() : '') +
      '\n\nMohon info detail & penawarannya, terima kasih.';

    window.open(waLink(text), '_blank', 'noopener,noreferrer');
    toast('WhatsApp terbuka — mari diskusi & negosiasi di sana.');
    dispatch({ type: 'RESET_FIELDS' });
    dispatch({ type: 'CLOSE' });
  }

  var f = state.fields, errors = state.errors;
  return (
    <div>
      {state.open && (
        <>
          <div className="consult-overlay" onClick={function () { dispatch({ type: 'CLOSE' }); }} aria-hidden="true"></div>
          <div className="consult-dialog" role="dialog" aria-modal="true" aria-labelledby="consult-title">
            <button type="button" className="consult-close" onClick={function () { dispatch({ type: 'CLOSE' }); }} aria-label="Tutup">
              <i className="bi bi-x-lg" aria-hidden="true"></i>
            </button>
            <span className="eyebrow" style={{ marginBottom: '.5rem' }}><span className="dot"></span> Konsultasi Produk</span>
            <h3 id="consult-title" style={{ fontSize: '1.25rem' }}>Request Project — Diskusi via WhatsApp</h3>
            <p style={{ fontSize: '.9rem', marginBottom: '1rem' }}>Isi singkat kebutuhan Anda — langsung terbuka di WhatsApp saya untuk diskusi &amp; negosiasi, tanpa harga kaku.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="swal-form">
                <div>
                  <label htmlFor="rp-nama">Nama Lengkap *</label>
                  <input id="rp-nama" ref={namaRef} placeholder="Nama Anda" autoComplete="name" value={f.nama} onChange={setField('nama')} aria-invalid={!!errors.nama} required />
                  {errors.nama && <span className="form-error" role="alert">{errors.nama}</span>}
                </div>
                <div className="swal-row">
                  <div>
                    <label htmlFor="rp-wa">No. WhatsApp *</label>
                    <input id="rp-wa" placeholder="08xxxxxxxxxx" inputMode="tel" autoComplete="tel" value={f.wa} onChange={setField('wa')} aria-invalid={!!errors.wa} required />
                    {errors.wa && <span className="form-error" role="alert">{errors.wa}</span>}
                  </div>
                  <div>
                    <label htmlFor="rp-bisnis">Bisnis / Instansi</label>
                    <input id="rp-bisnis" placeholder="Opsional" value={f.bisnis} onChange={setField('bisnis')} />
                  </div>
                </div>
                <div>
                  <label htmlFor="rp-produk">Produk yang Diminati *</label>
                  <select id="rp-produk" value={f.produk} onChange={setField('produk')}>
                    <option value="custom">Website / Produk Custom (diskusikan dulu)</option>
                    {products.map(function (p) { return <option key={p.slug} value={p.slug}>{p.name}</option>; })}
                  </select>
                </div>
                <div>
                  <label htmlFor="rp-catatan">Catatan / Kebutuhan</label>
                  <textarea id="rp-catatan" rows="2" placeholder="Ceritakan singkat kebutuhan Anda…" value={f.catatan} onChange={setField('catatan')}></textarea>
                </div>
              </div>
              <div className="consult-actions">
                <button type="button" className="btn btn-outline" onClick={function () { dispatch({ type: 'CLOSE' }); }}>Batal</button>
                <button type="submit" className="btn btn-whatsapp"><i className="bi bi-whatsapp" aria-hidden="true"></i> Diskusi via WhatsApp</button>
              </div>
            </form>
          </div>
        </>
      )}
      <ToastHost />
    </div>
  );
}

/* ---------- Mount ---------- */
var consultRoot = document.getElementById('consult-root');
if (consultRoot) createRoot(consultRoot).render(<ConsultModal />);

var contactRoot = document.getElementById('contact-form-root');
if (contactRoot) createRoot(contactRoot).render(<ContactForm />);
