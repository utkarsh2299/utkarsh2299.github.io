// Typewriter effect for name
const text = "Utkarsh Pathak";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.querySelector(".typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
