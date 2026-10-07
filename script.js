const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});
const params = new URLSearchParams(window.location.search);

if (params.get('submitted') === 'true') {
  const form = document.querySelector('#contact-form');
  const heading = document.querySelector('#contact-heading');
  const thankYou = document.querySelector('#thank-you-message');

  if (form) form.style.display = 'none';
  if (heading) heading.textContent = 'THANK YOU!';
  if (thankYou) thankYou.style.display = 'block';
}
