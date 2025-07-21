// Typewriter effect
const text = "Utkarsh Pathak";
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector(".typing").textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
window.onload = type;

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
