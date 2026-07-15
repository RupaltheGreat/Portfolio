/* =========================================================
   Den's portfolio — script.js
   Handles:
     1. Star field generation (night mode only)
     2. Theme toggle (night ↔ day) with localStorage memory
     3. Orbit dot → rocket launch animation toward the role text
     4. Auto-updating footer year
   ========================================================= */

// ---- 1. Stars ----------------------------------------------------
const starsEl = document.getElementById('stars');
for (let i = 0; i < 60; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.top    = Math.random() * 100 + '%';
  s.style.left   = Math.random() * 100 + '%';
  s.style.width  = s.style.height = (Math.random() * 2 + 1) + 'px';
  s.style.animationDelay = (Math.random() * 3) + 's';
  starsEl.appendChild(s);
}

// ---- 2. Theme toggle --------------------------------------------
const body = document.body;
const btn  = document.getElementById('themeToggle');

// remember user's choice across visits
const saved = localStorage.getItem('theme');
if (saved === 'day') { body.classList.remove('night'); body.classList.add('day'); btn.textContent = '☀️'; }

btn.addEventListener('click', () => {
  if (body.classList.contains('night')) {
    body.classList.remove('night'); body.classList.add('day');
    btn.textContent = '☀️';
    localStorage.setItem('theme', 'day');
  } else {
    body.classList.remove('day'); body.classList.add('night');
    btn.textContent = '🌙';
    localStorage.setItem('theme', 'night');
  }
});

// ---- 3. Rocket launch -------------------------------------------
const dot    = document.getElementById('orbitDot');
const photo  = document.getElementById('photo');
const role   = document.getElementById('role');
const rocket = document.getElementById('rocket');
const trail  = document.getElementById('trail');
let flying   = false;

dot.addEventListener('click', () => {
  if (flying) return;
  flying = true;

  // compute vector from photo center → role center
  const a = photo.getBoundingClientRect();
  const b = role.getBoundingClientRect();
  const dx = (b.left + b.width / 2) - (a.left + a.width / 2);
  const dy = (b.top  + b.height / 2) - (a.top  + a.height / 2);
  const ang = Math.atan2(dy, dx) + 'rad';
  const len = Math.hypot(dx, dy) + 'px';

  // set CSS custom properties the animation reads
  rocket.style.setProperty('--dx',  dx + 'px');
  rocket.style.setProperty('--dy',  dy + 'px');
  rocket.style.setProperty('--ang', ang);
  trail .style.setProperty('--len', len);
  trail .style.transform = 'rotate(' + ang + ')';

  // hide the dot, play the animation
  dot.style.display = 'none';
  rocket.classList.add('fly');
  trail .classList.add('fly');

  // after animation, reset so user can launch again
  setTimeout(() => {
    rocket.classList.remove('fly');
    trail .classList.remove('fly');
    dot.style.display = '';
    flying = false;
  }, 1700);
});

// ---- 4. Footer year ---------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();
