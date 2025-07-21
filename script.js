// Navigation tab switching
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

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
  });
});
