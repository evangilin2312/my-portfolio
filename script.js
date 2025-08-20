// ===== Function to show only one section =====
function showSection(targetId, animationClass) {
  const sections = document.querySelectorAll("section");

  // Hide all sections
  sections.forEach(sec => {
    sec.style.display = "none";
    sec.classList.remove("slide-horizontal", "slide-vertical", "fade-in");
  });

  // Show target section
  const target = document.querySelector(targetId);
  target.style.display = "block";

  // Add animation class if any
  if (animationClass) {
    target.classList.add(animationClass);
  }
}

// ===== Navigation click handling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId === "#about") {
      showSection("#about", "slide-horizontal");
    } else if (targetId === "#contact") {
      showSection("#contact", "slide-vertical");
    } else {
      showSection(targetId, "fade-in");
    }

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
function showSection(targetId, animationClass) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.style.display = "none";
    sec.classList.remove("slide-horizontal", "slide-vertical", "fade-in");
  });
  const target = document.querySelector(targetId);
  target.style.display = "block";
  if (animationClass) target.classList.add(animationClass);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId === "#about") {
      showSection("#about", "slide-horizontal");
    } else if (targetId === "#contact") {
      showSection("#contact", "slide-vertical");
    } else if (targetId === "#skill") {
      showSection("#skill", "fade-in");
    } else {
      showSection(targetId, "fade-in");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  showSection("#home", "fade-in");
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting me!");
  this.reset();
});


// ===== Show home section by default =====
window.addEventListener("DOMContentLoaded", () => {
  showSection("#home", "fade-in");
});

// ===== Contact form =====
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting me!");
  this.reset();
});
function animateSkills() {
  document.querySelectorAll("#skill .fill").forEach(fill => {
    const percent = parseInt(fill.dataset.percent);
    fill.style.width = percent + "%";

    // Animate the percentage text
    let current = 0;
    const percentText = fill.parentElement.previousElementSibling.querySelector(".percent");
    const interval = setInterval(() => {
      if (current >= percent) {
        clearInterval(interval);
      } else {
        current++;
        percentText.textContent = current + "%";
      }
    }, 15); // speed of number increase
  });

}
// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// Modify your nav click handler
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetPage = this.getAttribute("href").replace("#", "");
    
    document.querySelectorAll(".page-section").forEach(sec => {
      sec.classList.add("hidden");
    });
    
    const targetSection = document.getElementById(targetPage);
    targetSection.classList.remove("hidden");

    if (targetPage === "skill") {
      animateSkills();
    }
  });
});
