// Navigation tab switching
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

links.forEach(link => {
  link.addEventListener('click', e => {

    const target = link.getAttribute('data-section');

    // 👉 Only intercept if it's a section link
    if (target) {
      e.preventDefault();

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(section => {
        section.classList.remove('visible');
        if (section.id === target) section.classList.add('visible');
      });

      navLinks.classList.remove('show');
    }

    // 👉 If NO data-section → allow normal navigation (ml_app.html works)
  });
});
