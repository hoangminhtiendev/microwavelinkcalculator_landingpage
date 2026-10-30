const gallery = document.querySelector('.gallery');
const shots = [...document.querySelectorAll('.shot')];
const dots = document.querySelector('.gallery-dots');
const prev = document.querySelector('.gallery-arrow.prev');
const next = document.querySelector('.gallery-arrow.next');
let current = 0;
shots.forEach((shot, i) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.setAttribute('aria-label', `Go to screenshot ${i + 1}`);
  dot.addEventListener('click', () => gallery.scrollTo({left: shot.offsetLeft - gallery.offsetLeft, behavior: 'smooth'}));
  dots.appendChild(dot);
});
function updateGallery() {
  const center = gallery.scrollLeft + gallery.clientWidth / 2;
  current = shots.reduce((best, el, i) => {
    const d = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
    return d < best.d ? {i, d} : best;
  }, {i: 0, d: Infinity}).i;
  [...dots.children].forEach((dot, i) => dot.classList.toggle('active', i === current));
}
prev.addEventListener('click', () => gallery.scrollBy({left: -340, behavior: 'smooth'}));
next.addEventListener('click', () => gallery.scrollBy({left: 340, behavior: 'smooth'}));
gallery.addEventListener('scroll', updateGallery, {passive: true});
window.addEventListener('resize', updateGallery);
updateGallery();
document.querySelector('#year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
