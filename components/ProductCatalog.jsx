'use client';

/**
 * Katalog produk "Sistem" — render dari snapshot (lib/products),
 * lalu refresh otomatis dari sumber live (kafeinarts.web.id).
 * Tanpa harga — kartu memakai tombol "Diskusi & Negosiasi".
 */
import React, { useEffect, useMemo, useState } from 'react';
import { getList, loadFresh } from '../lib/products';

function ProductCard({ p }) {
  return (
    <article className="card card-lift product-card" data-category={p.category}>
      <div className="icon-tile" style={{ '--tile-color': p.color }}><i className={`bi ${p.icon}`} aria-hidden="true"></i></div>
      <h3>{p.name}</h3>
      <p className="tagline">{p.tagline}</p>
      <ul className="product-highlights">
        {(p.highlights || []).slice(0, 3).map((h) => <li key={h} className="chip">{h}</li>)}
      </ul>
      <div className="product-price">
        <a className="detail-link" href={p.detailUrl} target="_blank" rel="noopener noreferrer">
          Detail produk <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
        </a>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-block btn-request-product"
        data-product={p.slug}
        style={{ marginTop: '.85rem' }}
      >
        <i className="bi bi-chat-dots" aria-hidden="true"></i> Diskusi &amp; Negosiasi
      </button>
    </article>
  );
}

export default function ProductCatalog({ limit = null, withFilter = false, showAll = false }) {
  const [products, setProducts] = useState(() => getList());
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    let mounted = true;
    loadFresh()
      .then((fresh) => { if (mounted) setProducts(fresh); })
      .catch(() => { /* snapshot tetap dipakai */ });
    return () => { mounted = false; };
  }, []);

  const visible = useMemo(() => {
    let list = products;
    if (withFilter && filter !== 'all') list = list.filter((p) => p.category === filter);
    if (limit) list = list.slice(0, limit);
    return list;
  }, [products, filter, limit, withFilter]);

  return (
    <>
      {withFilter && (
        <div className="filter-bar" role="group" aria-label="Filter kategori produk">
          <button className="filter-chip" data-filter="all" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>Semua ({products.length})</button>
          <button className="filter-chip" data-filter="system" aria-pressed={filter === 'system'} onClick={() => setFilter('system')}><i className="bi bi-boxes" aria-hidden="true"></i> Sistem</button>
          <button className="filter-chip" data-filter="website" aria-pressed={filter === 'website'} onClick={() => setFilter('website')}><i className="bi bi-globe2" aria-hidden="true"></i> Website</button>
        </div>
      )}
      <div className="grid grid-3" aria-live="polite">
        {visible.map((p) => <ProductCard key={p.slug} p={p} />)}
      </div>
    </>
  );
}
