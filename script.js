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


/* Update navigation highlight when clicking or scrolling */
const navLinks = document.querySelectorAll('#main-nav a');

const sections = [
  { id: 'home', link: '#home' },
  { id: 'help', link: '#help' },
  { id: 'reviews', link: '#reviews' },
  { id: 'contact', link: '#contact' }
];

function setActiveNav(hash) {
  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === hash
    );
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    setActiveNav(link.getAttribute('href'));
  });
});

const sectionObserver = new IntersectionObserver(entries => {
  const visibleSections = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

  if (visibleSections.length > 0) {
    setActiveNav('#' + visibleSections[0].target.id);
  }
}, {
  rootMargin: '-25% 0px -55% 0px',
  threshold: [0, 0.1, 0.25, 0.5, 0.75]
});

sections.forEach(section => {
  const element = document.getElementById(section.id);
  if (element) sectionObserver.observe(element);
});

window.addEventListener('hashchange', () => {
  setActiveNav(window.location.hash || '#home');
});

setActiveNav(window.location.hash || '#home');
