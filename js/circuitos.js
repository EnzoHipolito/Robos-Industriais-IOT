/* ── Reveal Animation via Intersection Observer ── */
const io = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.card, .section-label, .section-title, .section-desc').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

/* ── Stagger cards within each grid ── */
document.querySelectorAll('.content-grid').forEach(grid => {
  grid.querySelectorAll('.card').forEach((card, i) => {
    card.classList.add(`reveal-delay-${i + 1}`);
  });
});

/* ── Copy Code ── */
function copyCode(codeId, btnId) {
  const code = document.getElementById(codeId);
  const btn  = document.getElementById(btnId);
  if (!code || !btn) return;

  // Strip HTML tags to get plain text
  const text = code.innerText || code.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    const original = btn.innerHTML;
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      Copiado!
    `;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = original;
    }, 2200);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = 'Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar'; }, 2200);
  });
}

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const ioNav = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.style.color = 'var(--cyan)';
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(s => ioNav.observe(s));

/* ── Smooth number count-up for hero stats ── */
function countUp(el, target, duration = 1200) {
  const isNum = !isNaN(Number(target));
  if (!isNum) return; // skip text values like "C++" and "UNO"
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    el.textContent = Math.floor(Math.min(start, target));
    if (start >= target) clearInterval(timer);
  }, 16);
}

const heroIo = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.stat-num').forEach(el => {
      countUp(el, el.textContent.trim(), 1000);
    });
    heroIo.disconnect();
  }
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) heroIo.observe(statsEl);
