const btn = document.querySelector('.menu');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });
document.getElementById('yr').textContent = new Date().getFullYear();

// Social icons and daughter-team cards, built from js/config.js
const CFG = window.SITE || {};
const NS = 'http://www.w3.org/2000/svg';
function icon(id) {
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('aria-hidden', 'true');
  if (id === 'github') svg.classList.add('solid');
  const use = document.createElementNS(NS, 'use');
  use.setAttribute('href', '#i-' + id);
  svg.appendChild(use);
  return svg;
}
function setLink(a, url) {
  if (!url) return;
  a.href = url;
  if (!url.startsWith('#')) { a.target = '_blank'; a.rel = 'noopener'; }
}
const socials = document.getElementById('socials');
(CFG.socials || []).forEach(({ id, label, url }) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.setAttribute('aria-label', label);
  a.title = url ? label : label + ' (link coming soon)';
  setLink(a, url);
  a.appendChild(icon(id));
  li.appendChild(a);
  socials.appendChild(li);
});
const teams = CFG.ftcTeams || [];
const grid = document.getElementById('ftc-grid');
if (!teams.length) document.getElementById('ftc').hidden = true;
teams.forEach(t => {
  const a = document.createElement('a');
  a.className = 'ftc-card';
  setLink(a, t.url);
  if (t.logo) { const img = document.createElement('img'); img.src = t.logo; img.alt = ''; a.appendChild(img);
    if (t.invert) {
      img.classList.add("invert");
    }
  }
  const num = document.createElement('span'); num.className = 'ftc-num';
  const k = document.createElement('small'); k.textContent = 'FTC';
  num.append(k, t.number || '');
  const name = document.createElement('span'); name.className = 'ftc-name'; name.textContent = t.name || '';
  a.append(num, name);
  if (t.url) { const go = document.createElement('span'); go.className = 'ftc-go'; go.textContent = 'Visit team'; a.appendChild(go); }
  grid.appendChild(a);
});
