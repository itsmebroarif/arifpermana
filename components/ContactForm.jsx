'use client';

/** ContactForm — useState, validasi inline, submit → wa.me (diskusi & negosiasi). */
import React, { useState } from 'react';
import { toast } from './Toast';

const WA_NUMBER = '6285817048266';
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const update = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Nama wajib diisi.';
    if (!EMAIL_RE.test(form.email.trim())) nextErrors.email = 'Format email tidak valid.';
    if (!form.subject.trim()) nextErrors.subject = 'Subjek wajib diisi.';
    if (form.message.trim().length < 5) nextErrors.message = 'Pesan minimal 5 karakter.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSending(true);
    const text =
      `Halo Arif, saya ${form.name.trim()}.\n\n` +
      `Subjek: ${form.subject.trim()}\n` +
      `Email: ${form.email.trim()}\n\n` +
      `Pesan:\n${form.message.trim()}\n\n` +
      `Saya ingin diskusi & negosiasi lebih lanjut mengenai hal ini.`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    toast('WhatsApp terbuka — mari lanjut diskusi & negosiasi di sana.');
    setForm({ name: '', email: '', subject: '', message: '' });
    setSending(false);
  }

  return (
    <form className="card contact-react-card" onSubmit={handleSubmit} noValidate>
      <h3 style={{ fontSize: '1.15rem' }}>Kirim Pesan</h3>
      <p style={{ fontSize: '.9rem' }}>Isi formulir di bawah — sekali klik, pesannya langsung terbuka di WhatsApp untuk diskusi &amp; negosiasi.</p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-name">Nama</label>
          <input className="form-control" type="text" id="cf-name" name="name" placeholder="Nama Anda" autoComplete="name"
            value={form.name} onChange={update('name')} aria-invalid={!!errors.name} required />
          {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cf-email">Email</label>
          <input className="form-control" type="email" id="cf-email" name="email" placeholder="nama@email.com" autoComplete="email"
            value={form.email} onChange={update('email')} aria-invalid={!!errors.email} required />
          {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="cf-subject">Subjek</label>
        <input className="form-control" type="text" id="cf-subject" name="subject"
          placeholder="Mis: Request pembuatan website company profile"
          value={form.subject} onChange={update('subject')} aria-invalid={!!errors.subject} required />
        {errors.subject && <span className="form-error" role="alert">{errors.subject}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="cf-message">Pesan</label>
        <textarea className="form-control" id="cf-message" name="message" rows={5} placeholder="Ceritakan kebutuhan Anda…"
          value={form.message} onChange={update('message')} aria-invalid={!!errors.message} required />
        {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn-whatsapp btn-block btn-lg" disabled={sending}>
        <i className="bi bi-whatsapp" aria-hidden="true"></i> {sending ? 'Membuka WhatsApp…' : 'Kirim & Diskusi via WhatsApp'}
      </button>
    </form>
  );
}
