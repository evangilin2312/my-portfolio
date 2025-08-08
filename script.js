// Scroll reveal animations
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show");
    }
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Form submission (client-side only)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon.");
  this.reset();
});
// Scroll reveal animations
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show");
    }
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for contacting me!");
  this.reset();
});
