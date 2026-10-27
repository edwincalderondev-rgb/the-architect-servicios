// Asistente de The Architect: responde por coincidencia de palabras clave contra window.TA_KB (chat-kb.js).
// Sin IA, sin servidor y sin costo: todo ocurre en el navegador.
(function () {
  'use strict';

  const WHATSAPP = 'https://wa.me/573014099377?text=' + encodeURIComponent('Hola, vengo del asistente de su página y tengo una pregunta.');
  const CONFIDENT = 40;
  const MAYBE = 16;
  const MENU = ['servicios', 'paginas-web', 'nucleo', 'tesis', 'cotizar'];

  const STOP = new Set('a al algo algun alguna como con cual cuales cuando de del el ella ellos en es esa ese eso esta este esto estoy ha hay la las le les lo los me mi mis muy no o para pero por que quien se si sin sobre su sus te tengo ti tu tus un una uno unos y ya yo usted ustedes ustedes favor puedo puedes podrian podria quiero quisiera saber necesito tienen tiene hacen hace dime cuentame informacion info'.split(' '));
  const SYN = {
    pagina: 'web', paginas: 'web', sitio: 'web', sitios: 'web', website: 'web', landing: 'web', webs: 'web',
    pos: 'nucleo', caja: 'nucleo', inventario: 'nucleo', inventarios: 'nucleo', tienda: 'nucleo', bodega: 'nucleo', minimercado: 'nucleo', facturar: 'nucleo',
    tesis: 'tesis', monografia: 'tesis', grado: 'tesis', sustentacion: 'tesis', trabajo: 'tesis', universidad: 'tesis', estudiante: 'tesis',
    precio: 'precios', costo: 'precios', costos: 'precios', cuanto: 'precios', cuesta: 'precios', vale: 'precios', valor: 'precios', cobran: 'precios', tarifa: 'precios', tarifas: 'precios',
    cotizacion: 'cotizar', cotizo: 'cotizar', presupuesto: 'cotizar',
    whatsapp: 'contacto', wasap: 'contacto', wsp: 'contacto', whats: 'contacto', celular: 'contacto', telefono: 'contacto', numero: 'contacto', correo: 'contacto', email: 'contacto', mail: 'contacto',
    dian: 'facturacion', factura: 'facturacion', facturas: 'facturacion',
    donde: 'ubicacion', ciudad: 'ubicacion', santa: 'ubicacion', marta: 'ubicacion',
  };

  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9ñ\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const tokens = (s) => norm(s).split(' ').filter((t) => t && !STOP.has(t));
  const expand = (toks) => { const out = new Set(toks); toks.forEach((t) => { if (SYN[t]) out.add(SYN[t]); }); return [...out]; };

  // Distancia de edición acotada: corrige erratas en palabras de 5 letras o más.
  function near(a, b) {
    if (a === b) return true;
    if (a.length < 5 || b.length < 5 || Math.abs(a.length - b.length) > 1) return false;
    let i = 0, j = 0, diff = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++diff > 1) return false;
      if (a.length > b.length) i++; else if (b.length > a.length) j++; else { i++; j++; }
    }
    return diff + (a.length - i) + (b.length - j) <= 1;
  }

  const KB = (window.TA_KB || []).map((e) => ({
    ...e,
    _p: (e.p || []).map(norm),
    _k: (e.k || []).map(norm),
    _t: tokens(e.t || ''),
  }));
  const byId = Object.fromEntries(KB.map((e) => [e.id, e]));

  // Puntaje = la MEJOR frase (no la suma: si no, una entrada con muchas frases parecidas se infla)
  // + palabras clave + título + id. La frase parcial premia sobre todo cubrir la pregunta entera.
  function score(entry, q, qt) {
    let best = 0;
    for (const p of entry._p) {
      if (!p) continue;
      if (q.includes(p)) { best = 60; break; }
      const pt = tokens(p);
      if (!pt.length || !qt.length) continue;
      const hit = pt.filter((t) => qt.some((u) => near(t, u))).length;
      const cover = qt.filter((u) => pt.some((t) => near(t, u))).length / qt.length;
      best = Math.max(best, Math.round(20 * (hit / pt.length) + 30 * cover));
    }
    let s = best;
    for (const k of entry._k) if (qt.some((u) => near(k, u) || (k.length > 5 && u.startsWith(k.slice(0, 5))))) s += 12;
    for (const t of entry._t) if (qt.includes(t)) s += 8;
    if (qt.includes(entry.id)) s += 20;
    return s;
  }

  function match(text) {
    const q = norm(text);
    const qt = expand(tokens(text));
    return KB.map((e) => ({ e, s: score(e, q, qt) })).sort((a, b) => b.s - a.s);
  }

  // Charla: solo responde si la base no reconoció el tema con certeza.
  const SMALL = [
    { re: /^(hola|buenas|buenos dias|buenas tardes|buenas noches|hey|que mas|saludos)\b/, a: () => `<p>${saludo()} 👋 Soy el asistente de <b>The Architect</b>. Te cuento sobre nuestras páginas web, Núcleo (punto de venta) y el acompañamiento en proyectos de grado. ¿Qué te interesa?</p>`, chips: MENU },
    { re: /\b(gracias|muchas gracias|mil gracias|te agradezco)\b/, a: () => '<p>¡Con gusto! Si quieres, te dejo directo con Edwin o Daniela por WhatsApp para que te coticen.</p>', chips: ['cotizar', 'servicios'], wa: true },
    { re: /\b(quien eres|eres (un )?(robot|bot|humano|ia)|con quien hablo|como te llamas)\b/, a: () => '<p>Soy el asistente de The Architect: respondo al instante con la información de este sitio. Para algo puntual, Edwin o Daniela te atienden por WhatsApp.</p>', chips: MENU, wa: true },
    { re: /^(chao|adios|hasta luego|nos vemos|bye)\b/, a: () => '<p>¡Hasta pronto! Cuando quieras retomar, aquí estoy.</p>', chips: [] },
    { re: /^(ok|vale|listo|perfecto|entiendo|bien|genial|super)$/, a: () => '<p>¡Listo! ¿Te cuento algo más?</p>', chips: MENU },
  ];
  function saludo() { const h = new Date().getHours(); return h < 12 ? '¡Buenos días!' : h < 19 ? '¡Buenas tardes!' : '¡Buenas noches!'; }

  // ── Interfaz ─────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.chat-toggle');
    const panel = document.getElementById('chatPanel');
    if (!toggle || !panel) return;
    const log = panel.querySelector('.chat-log');
    const form = panel.querySelector('.chat-form');
    const input = panel.querySelector('#chatInput');
    let started = false;

    function scrollTo(el) { log.scrollTop = Math.max(0, el.offsetTop - 12); }

    function addMsg(html, who) {
      const div = document.createElement('div');
      div.className = 'msg msg--' + who;
      div.innerHTML = html;
      log.appendChild(div);
      return div;
    }

    function addChips(ids, withWa) {
      const list = ids.filter((id) => byId[id]);
      if (!list.length && !withWa) return;
      const wrap = document.createElement('div');
      wrap.className = 'chat-chips';
      list.forEach((id) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = byId[id].t;
        b.addEventListener('click', () => ask(byId[id].t, id));
        wrap.appendChild(b);
      });
      if (withWa) {
        const a = document.createElement('a');
        a.href = WHATSAPP; a.target = '_blank'; a.rel = 'noopener';
        a.textContent = '💬 Hablar por WhatsApp';
        wrap.appendChild(a);
      }
      log.appendChild(wrap);
    }

    function reply(text, forcedId) {
      const q = norm(text);
      const ranked = forcedId ? [{ e: byId[forcedId], s: 999 }] : match(text);
      const top = ranked[0];
      if (!forcedId && (!top || top.s < CONFIDENT)) {
        const chat = SMALL.find((r) => r.re.test(q));
        if (chat && (!top || top.s < MAYBE || q.split(' ').length <= 3)) {
          const m = addMsg(chat.a(), 'bot'); addChips(chat.chips, !!chat.wa); return m;
        }
      }
      if (top && top.s >= CONFIDENT) {
        const m = addMsg(top.e.a, 'bot');
        addChips(top.e.next || [], ['cotizar', 'contacto'].includes(top.e.id));
        return m;
      }
      if (top && top.s >= MAYBE) {
        const m = addMsg('<p>Creo que preguntas por alguno de estos temas:</p>', 'bot');
        addChips(ranked.filter((r) => r.s >= MAYBE).slice(0, 3).map((r) => r.e.id), false);
        return m;
      }
      const m = addMsg(`<p>No tengo esa respuesta en mi información, pero Edwin o Daniela sí pueden ayudarte con «${esc(text.slice(0, 80))}».</p><p>Mientras tanto, esto es lo que te puedo contar:</p>`, 'bot');
      addChips(MENU, true);
      return m;
    }

    function ask(text, forcedId) {
      const clean = text.trim();
      if (!clean) return;
      addMsg(`<p>${esc(clean)}</p>`, 'user');
      const typing = addMsg('<span></span><span></span><span></span>', 'bot msg--typing');
      log.scrollTop = log.scrollHeight;
      setTimeout(() => {
        typing.remove();
        scrollTo(reply(clean, forcedId));
      }, 450 + Math.min(clean.length * 8, 500));
    }

    function open() {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      if (!started) {
        started = true;
        addMsg(`<p>${saludo()} 👋 Soy el asistente de <b>The Architect</b>.</p><p>Pregúntame lo que quieras sobre nuestros servicios, o elige un tema:</p>`, 'bot');
        addChips(MENU, false);
      }
      input.focus();
    }
    function close() {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }

    toggle.addEventListener('click', open);
    panel.querySelector('.chat-close').addEventListener('click', close);
    panel.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    form.addEventListener('submit', (e) => { e.preventDefault(); const v = input.value; input.value = ''; ask(v); });

    // Prueba desde la consola: TA_CHAT.match('cuanto vale una pagina')
    window.TA_CHAT = { match: (t) => match(t).slice(0, 5).map((r) => [r.e.id, r.s]) };
  });
})();
