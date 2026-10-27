// Comportamiento general: menú móvil, apariciones al hacer scroll, videos y formulario hacia WhatsApp.
(function () {
  'use strict';
  document.documentElement.classList.remove('no-js');

  const WHATSAPP = '573014099377';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('menu');
    if (toggle && menu) {
      const setOpen = (open) => {
        menu.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      };
      toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
      menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    }

    // Aparición suave: si no hay IntersectionObserver, todo queda visible.
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !reduceMotion) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('is-in'));
    }

    // Videos: se reproducen solo mientras se ven, y nunca con "reducir movimiento" (queda el póster).
    const videos = document.querySelectorAll('video[data-autoplay]');
    if (!reduceMotion && 'IntersectionObserver' in window) {
      const vio = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          const v = en.target;
          if (en.isIntersecting) { const p = v.play(); if (p) p.catch(() => {}); } else { v.pause(); }
        });
      }, { threshold: 0.25 });
      videos.forEach((v) => vio.observe(v));
    }

    // Los enlaces de cada servicio preseleccionan la opción del formulario.
    const form = document.getElementById('formContacto');
    document.querySelectorAll('[data-servicio]').forEach((a) => {
      a.addEventListener('click', () => { if (form) form.servicio.value = a.dataset.servicio; });
    });

    // Formulario: arma el mensaje y abre WhatsApp (no hay servidor ni se guarda nada).
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = form.nombre.value.trim();
        const mensaje = form.mensaje.value.trim();
        if (!nombre || !mensaje) {
          (nombre ? form.mensaje : form.nombre).focus();
          form.reportValidity();
          return;
        }
        const texto = `Hola, soy ${nombre}. Me interesa: ${form.servicio.value}.\n\n${mensaje}`;
        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
      });
    }
  });
})();
