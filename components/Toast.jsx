'use client';

/**
 * Toast ringan — dipakai ContactForm & ConsultModal.
 * <ToastHost /> dipasang sekali di root layout.
 */
import React, { useEffect, useRef, useState } from 'react';

const listeners = new Set();
export function toast(message) {
  listeners.forEach((fn) => fn(message));
}

export function ToastHost() {
  const [message, setMessage] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    const off = (msg) => {
      setMessage(msg);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setMessage(null), 4200);
    };
    listeners.add(off);
    return () => {
      listeners.delete(off);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  if (!message) return null;
  return (
    <div className="toast-host" role="status" aria-live="polite">
      <i className="bi bi-whatsapp" aria-hidden="true"></i>
      <span>{message}</span>
    </div>
  );
}
