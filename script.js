// Navigation switching
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');
const cursor = document.querySelector('.cursor');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-section');

    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    sections.forEach(section => {
      if (section.id === target) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });
});

// Custom cursor
document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Cursor hover effect
document.querySelectorAll('a, .card, .btn').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});
