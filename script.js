// Navigation tab switching
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-section');

    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    sections.forEach(section => {
      section.classList.remove('visible');
      if (section.id === target) section.classList.add('visible');
    });

    navLinks.classList.remove('show'); // Close on mobile
  });
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
