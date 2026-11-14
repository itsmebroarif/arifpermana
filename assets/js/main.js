/**
 * Arif Permana — Portfolio · Main JS
 * Menangani: preloader, sticky header, mobile nav, back-to-top, reveal-on-scroll,
 * footer year, dan katalog produk "Sistem" (render + filter).
 * Form kontak & form konsultasi produk berada di src/forms.jsx (React, useState/useReducer)
 * yang di-bundle menjadi assets/js/forms.bundle.js.
 */
(function () {
  'use strict';

  var select = function (el, all) {
    return all ? Array.prototype.slice.call(document.querySelectorAll(el))
               : document.querySelector(el);
  };

  /* ---------- Preloader ---------- */
  window.addEventListener('load', function () {
    var preloader = select('#preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(function () { preloader.remove(); }, 350);
    }
  });

  /* ---------- Sticky header emphasis ---------- */
  var headerBar = select('.header-inner');
  if (headerBar) {
    var onScrollBar = function () {
      headerBar.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScrollBar, { passive: true });
    onScrollBar();
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = select('.nav-toggle');
  var navList = select('.nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      var open = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.innerHTML = open
        ? '<i class="bi bi-x-lg"></i>'
        : '<i class="bi bi-list"></i>';
    });
    document.addEventListener('click', function (e) {
      if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<i class="bi bi-list"></i>';
      }
    });
  }

  /* ---------- Back to top FAB ---------- */
  var fabTop = select('.fab-top');
  if (fabTop) {
    var toggleFab = function () { fabTop.classList.toggle('visible', window.scrollY > 320); };
    window.addEventListener('scroll', toggleFab, { passive: true });
    toggleFab();
    fabTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = select('.reveal', true);
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Footer year ---------- */
  var yearEl = select('#footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ==========================================================
     Katalog Produk "Sistem" — render kartu (tanpa harga,
     negosiasi dilakukan saat diskusi di WhatsApp)
     ========================================================== */
  var cacheList = null;

  function catalog() {
    if (!cacheList) {
      cacheList = (window.SistemKatalog && window.SistemKatalog.getList()) || [];
    }
    return cacheList;
  }

  function escapeHTML(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function productCardHTML(p) {
    var chips = (p.highlights || []).slice(0, 3).map(function (h) {
      return '<li class="chip">' + escapeHTML(h) + '</li>';
    }).join('');
    return '' +
      '<article class="card card-lift product-card reveal is-visible" data-category="' + escapeHTML(p.category) + '">' +
        '<div class="icon-tile" style="--tile-color:' + escapeHTML(p.color) + '"><i class="bi ' + escapeHTML(p.icon) + '"></i></div>' +
        '<h3>' + escapeHTML(p.name) + '</h3>' +
        '<p class="tagline">' + escapeHTML(p.tagline) + '</p>' +
        '<ul class="product-highlights">' + chips + '</ul>' +
        '<div class="product-price">' +
          '<a class="detail-link" href="' + escapeHTML(p.detailUrl) + '" target="_blank" rel="noopener">Detail produk <i class="bi bi-box-arrow-up-right"></i></a>' +
        '</div>' +
        '<button type="button" class="btn btn-primary btn-block btn-request-product" data-product="' + escapeHTML(p.slug) + '" style="margin-top:.85rem">' +
          '<i class="bi bi-chat-dots"></i> Diskusi &amp; Negosiasi' +
        '</button>' +
      '</article>';
  }

  function renderProducts(gridEl, list, limit) {
    if (!gridEl) return;
    var items = list.slice(0, limit || list.length);
    gridEl.innerHTML = items.map(productCardHTML).join('');
  }

  function initProductGrid(gridId, limit) {
    var grid = document.getElementById(gridId);
    if (!grid) return;
    // Halaman sudah berisi snapshot statis (SEO) — jangan timpa sebelum data live masuk
    var hasStatic = !!grid.querySelector('.product-card');
    if (!hasStatic) renderProducts(grid, catalog(), limit);
    if (window.SistemKatalog && window.SistemKatalog.loadFresh) {
      window.SistemKatalog.loadFresh().then(function (fresh) {
        cacheList = fresh;
        renderProducts(grid, fresh, limit);
      }).catch(function () { /* snapshot tetap dipakai */ });
    }
  }

  /* Filter chips (services page) */
  function initFilters() {
    var bar = select('.filter-bar');
    var grid = document.getElementById('products-grid');
    if (!bar || !grid) return;
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-chip');
      if (!btn) return;
      bar.querySelectorAll('.filter-chip').forEach(function (c) {
        c.setAttribute('aria-pressed', String(c === btn));
      });
      var filter = btn.getAttribute('data-filter');
      grid.querySelectorAll('.product-card').forEach(function (card) {
        var show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  }

  /* ---------- Init catalog UIs ---------- */
  initProductGrid('featured-products', 6);
  initProductGrid('products-grid');
  initFilters();
})();
