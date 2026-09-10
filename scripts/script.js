const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const contactForm = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Thanks! Your message has been received for this demo.';
    contactForm.reset();
  });
}
