const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("mobile-nav-links");

const hamburgerIcon = menuToggle.querySelector(".hamburger-icon");
const closeIcon = menuToggle.querySelector(".close-icon");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  const menuOpen = navLinks.classList.contains("show");
  hamburgerIcon.style.display = menuOpen ? "none" : "block";
  closeIcon.style.display = menuOpen ? "block" : "none";

  document.body.classList.toggle("menu-open", menuOpen);
});

// Close nav menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    // Hide the nav menu
    document.getElementById("mobile-nav-links").classList.remove("show");

    // Show the hamburger icon again
    document.querySelector(".hamburger-icon").style.display = "block";
    document.querySelector(".close-icon").style.display = "none";

    // Unhide the main content
    document.body.classList.remove("menu-open");
  });
});

const div = document.querySelector(".intro_heading");
const intro_heading = "Hello, I'm Kenewang Oganne";

let typingTimeout;
let currentSizeCategory = window.innerWidth <= 430 ? "mobile" : "desktop";

function textTypingEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
    clearTimeout(typingTimeout);
  }

  element.textContent += text[i];

  if (i === text.length - 1) return;

  typingTimeout = setTimeout(() => textTypingEffect(element, text, i + 1), 150);
}

// Run on first load
textTypingEffect(div, intro_heading);

// Only trigger when screen crosses 430px threshold
window.addEventListener("resize", () => {
  const newSizeCategory = window.innerWidth <= 430 ? "mobile" : "desktop";

  if (newSizeCategory !== currentSizeCategory) {
    currentSizeCategory = newSizeCategory;
    textTypingEffect(div, intro_heading);
  }
});
