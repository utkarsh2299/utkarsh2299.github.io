// Tab navigation
const links = document.querySelectorAll('.sidebar nav a');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-section');

    // Set active class
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Show the selected section
    sections.forEach(section => {
      if (section.id === targetId) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });
});
