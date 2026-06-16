/* ═══════════════════════════════════════════════════════════
   SARA'S 23rd BIRTHDAY WEBSITE — script.js
   All interactive features, animations, and UI logic
═══════════════════════════════════════════════════════════ */

'use strict';

/* ─── LOADING SCREEN ─── */
window.addEventListener('load', () => {
  // Give the fill animation time to complete, then hide
  setTimeout(() => {
    const screen = document.getElementById('loading-screen');
    if (screen) screen.classList.add('hidden');
  }, 2000);
});

/* ─── SCROLL PROGRESS BAR ─── */
function updateScrollProgress() {
  const scrollTop  = window.scrollY;
  const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  const bar = document.getElementById('scroll-progress');
  if (bar) bar.style.width = `${Math.min(progress, 100)}%`;
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });

/* ─── DARK / LIGHT MODE TOGGLE ─── */
const themeToggle = document.getElementById('theme-toggle');
const root        = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('sara-theme', theme);
  if (themeToggle) themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Restore saved preference
const savedTheme = localStorage.getItem('sara-theme');
applyTheme(savedTheme || 'light');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* ─── BACKGROUND MUSIC TOGGLE ─── */
const bgMusic     = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
let musicPlaying  = false;

if (musicToggle && bgMusic) {
  musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
      bgMusic.pause();
      musicToggle.textContent = '🎵';
    } else {
      bgMusic.play().catch(() => {
        // Autoplay blocked – user clicked, so this should succeed;
        // silence the error if the file is missing.
      });
      musicToggle.textContent = '⏸️';
    }
    musicPlaying = !musicPlaying;
  });
}

/* ─── ROTATING HERO SUBTITLE ─── */
const subtitles = [
  'My Bubbu 💕',
  'My Monkey 🐒',
  'My Favourite Football Star ⚽',
  'The Queen of Goofy Faces 👑',
  'The Strongest Girl I Know 💪',
];
const rotatingEl = document.getElementById('rotating-subtitle');
let subtitleIndex = 0;

function rotateSubtitle() {
  if (!rotatingEl) return;
  rotatingEl.classList.remove('fade-in');
  rotatingEl.classList.add('fade-out');

  setTimeout(() => {
    subtitleIndex = (subtitleIndex + 1) % subtitles.length;
    rotatingEl.textContent = subtitles[subtitleIndex];
    rotatingEl.classList.remove('fade-out');
    rotatingEl.classList.add('fade-in');
  }, 420);
}

if (rotatingEl) {
  rotatingEl.textContent = subtitles[0];
  rotatingEl.classList.add('fade-in');
  setInterval(rotateSubtitle, 2800);
}

/* ─── FLOATING HEARTS (Hero & Celebration) ─── */
const HEART_EMOJIS = ['💕', '💖', '💗', '💓', '🌸', '✨', '💝'];

function spawnHearts(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.classList.add('heart');
    el.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];

    const left     = Math.random() * 100;
    const duration = 6 + Math.random() * 8;
    const delay    = Math.random() * 8;
    const size     = 0.9 + Math.random() * 0.8;

    el.style.cssText = `
      left: ${left}%;
      bottom: -5%;
      font-size: ${size}rem;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(el);
  }
}

spawnHearts('floating-hearts-hero', 18);
spawnHearts('floating-hearts-final', 24);

/* ─── FLOATING PETALS (Flower Section) ─── */
const PETALS = ['🌸', '🌺', '🌷', '🌹', '🪷'];

function spawnPetals(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.classList.add('petal');
    el.textContent = PETALS[Math.floor(Math.random() * PETALS.length)];

    const left     = Math.random() * 100;
    const duration = 5 + Math.random() * 7;
    const delay    = Math.random() * 6;
    const size     = 0.8 + Math.random() * 0.9;

    el.style.cssText = `
      left: ${left}%;
      top: -40px;
      font-size: ${size}rem;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(el);
  }
}

spawnPetals('floating-petals', 14);

/* ─── WAVE BARS (Dance Section) ─── */
const waveBarsContainer = document.getElementById('wave-bars');
if (waveBarsContainer) {
  for (let i = 0; i < 40; i++) {
    const bar = document.createElement('div');
    bar.classList.add('wave-bar');
    const height = 20 + Math.random() * 60;
    bar.style.cssText = `
      height: ${height}px;
      animation-delay: ${(Math.random() * 0.8).toFixed(2)}s;
      animation-duration: ${(0.5 + Math.random() * 0.6).toFixed(2)}s;
    `;
    waveBarsContainer.appendChild(bar);
  }
}

/* ─── SCROLL REVEAL ANIMATION ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el    = entry.target;
    const delay = parseInt(el.dataset.delay || '0', 10);
    setTimeout(() => el.classList.add('visible'), delay);
    revealObserver.unobserve(el);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── STAT BARS ANIMATION ─── */
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const card     = entry.target;
    const bar      = card.querySelector('.stat-bar');
    const valueEl  = card.querySelector('.stat-value');
    const target   = parseInt(bar?.dataset.target || '100', 10);
    const finalTxt = valueEl?.dataset.final || `${target}%`;

    if (bar) {
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        setTimeout(() => { bar.style.width = `${target}%`; }, 80);
      });
    }

    if (valueEl) {
      // Animate numeric values; for non-numeric fall through to final text
      const numeric = parseInt(finalTxt, 10);
      if (!isNaN(numeric)) {
        let current = 0;
        const step  = numeric / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, numeric);
          valueEl.textContent = `${Math.floor(current)}%`;
          if (current >= numeric) {
            valueEl.textContent = finalTxt;
            clearInterval(timer);
          }
        }, 20);
      } else {
        // Non-numeric (∞, Unmeasurable, etc.) — animate with dots, then reveal
        let dots = 0;
        const timer = setInterval(() => {
          valueEl.textContent = '...'.slice(0, ++dots % 4);
          if (dots >= 18) {
            valueEl.textContent = finalTxt;
            clearInterval(timer);
          }
        }, 80);
      }
    }

    statObserver.unobserve(card);
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stat-card').forEach(card => statObserver.observe(card));

/* ─── LIGHTBOX (Goofy Gallery) ─── */
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCap = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, caption) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  if (lightboxCap) lightboxCap.textContent = caption || '';
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  if (lightboxImg) setTimeout(() => { lightboxImg.src = ''; }, 300);
}

// Attach click handlers to gallery photos
document.querySelectorAll('.masonry-item .photo-wrap img').forEach(img => {
  img.addEventListener('click', () => {
    const caption = img.closest('.photo-wrap')?.querySelector('.photo-caption')?.textContent || '';
    openLightbox(img.src, caption);
  });
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox)      lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

// Close on Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* ─── BROADCAST CLOCK ─── */
function updateBroadcastClock() {
  const el = document.getElementById('broadcast-time');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });
}
setInterval(updateBroadcastClock, 1000);
updateBroadcastClock();

/* ─── TICKER DUPLICATION (seamless scroll) ─── */
const tickerInner = document.querySelector('.ticker-inner');
if (tickerInner) {
  // Duplicate content so the scroll feels endless
  tickerInner.innerHTML += tickerInner.innerHTML;
}

/* ─── CONFETTI (Final Celebration Section) ─── */
const canvas = document.getElementById('confetti-canvas');
const ctx    = canvas?.getContext('2d');

let confettiParticles = [];
let confettiFrame     = null;
let confettiRunning   = false;

const CONFETTI_COLORS = [
  '#FF85A1', '#C084FC', '#FF6B6B', '#FFD700',
  '#7DD3FC', '#86EFAC', '#FCA5A5', '#E879F9',
];

function createConfettiParticles(count) {
  confettiParticles = [];
  for (let i = 0; i < count; i++) {
    confettiParticles.push({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height - canvas.height,
      r:       3 + Math.random() * 5,
      color:   CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      speed:   1.5 + Math.random() * 3,
      tilt:    Math.random() * 10 - 5,
      tiltChange: Math.random() * 0.2 - 0.1,
      opacity: 0.7 + Math.random() * 0.3,
    });
  }
}

function animateConfetti() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiParticles.forEach(p => {
    p.tilt      += p.tiltChange;
    p.y         += p.speed;
    p.x         += Math.sin(p.tilt) * 1.5;

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }

    ctx.save();
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle   = p.color;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.r, p.r / 2, p.tilt, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  confettiFrame = requestAnimationFrame(animateConfetti);
}

function startConfetti() {
  if (!canvas) return;
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  createConfettiParticles(140);
  if (!confettiRunning) {
    confettiRunning = true;
    animateConfetti();
  }
}

function stopConfetti() {
  if (confettiFrame) cancelAnimationFrame(confettiFrame);
  confettiFrame   = null;
  confettiRunning = false;
  if (ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Start confetti when the celebration section is in view
const celebrationSection = document.getElementById('celebration');
if (celebrationSection) {
  const confettiObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startConfetti();
      } else {
        stopConfetti();
      }
    });
  }, { threshold: 0.2 });
  confettiObserver.observe(celebrationSection);
}

// Handle canvas resize
window.addEventListener('resize', () => {
  if (canvas && confettiRunning) {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
});

/* ─── CINEMATIC REVEAL (Beautiful Section) ─── */
const cinematicWrap = document.querySelector('.cinematic-wrap');
if (cinematicWrap) {
  const cinematicObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cinematicWrap.classList.add('visible');
        // Stagger the word pills
        document.querySelectorAll('.cw').forEach((word, i) => {
          word.style.transitionDelay = `${0.3 + i * 0.12}s`;
          word.style.opacity = '1';
          word.style.transform = 'translateY(0)';
        });
        cinematicObserver.unobserve(cinematicWrap);
      }
    });
  }, { threshold: 0.2 });
  cinematicObserver.observe(cinematicWrap);

  // Set initial state for words
  document.querySelectorAll('.cw').forEach(word => {
    word.style.opacity   = '0';
    word.style.transform = 'translateY(12px)';
    word.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
}

/* ─── REPLAY BUTTON ─── */
const replayBtn = document.getElementById('replay-btn');
if (replayBtn) {
  replayBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── BEGIN JOURNEY BUTTON (smooth scroll) ─── */
const beginBtn = document.getElementById('begin-btn');
if (beginBtn) {
  beginBtn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById('amazing');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ─── VIDEO LAZY LOAD & SECTION ENTRANCE ─── */
// Pause videos when they leave the viewport to save battery
document.querySelectorAll('.section-video').forEach(video => {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && !video.paused) {
        video.pause();
      }
    });
  }, { threshold: 0.1 });
  videoObserver.observe(video);
});

/* ─── FIREWORK EMOJIS (Celebration pulse) ─── */
function launchFireworks() {
  const section = document.getElementById('celebration');
  if (!section) return;

  const emojis = ['🎆', '🎇', '✨', '🎉', '💫'];
  let count = 0;

  const interval = setInterval(() => {
    const el   = document.createElement('span');
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      position: absolute;
      left:       ${10 + Math.random() * 80}%;
      top:        ${10 + Math.random() * 60}%;
      font-size:  ${1.5 + Math.random() * 1.5}rem;
      pointer-events: none;
      z-index:    3;
      animation:  firework-pop 1.2s ease forwards;
    `;
    section.appendChild(el);
    setTimeout(() => el.remove(), 1300);

    if (++count >= 30) clearInterval(interval);
  }, 180);
}

// Inject the keyframe once
const fwStyle = document.createElement('style');
fwStyle.textContent = `
  @keyframes firework-pop {
    0%   { opacity: 0; transform: scale(0.3) translateY(0); }
    40%  { opacity: 1; transform: scale(1.4) translateY(-20px); }
    100% { opacity: 0; transform: scale(0.8) translateY(-50px); }
  }
`;
document.head.appendChild(fwStyle);

// Trigger fireworks when celebration section appears
if (celebrationSection) {
  const fwObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        launchFireworks();
        fwObserver.unobserve(celebrationSection);
      }
    });
  }, { threshold: 0.3 });
  fwObserver.observe(celebrationSection);
}

/* ─── TRAIT CARDS: staggered reveal on scroll ─── */
document.querySelectorAll('.trait-card').forEach((card, i) => {
  card.dataset.delay = String(i * 100);
  revealObserver.observe(card);
});
