<<<<<<< HEAD
// 🌙 Dark Mode Toggle
const toggle = document.getElementById("toggle-dark");
const body = document.body;
const icon = toggle.querySelector("i");

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

// Toggle dark mode
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");

  // Change icon
  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);
// 🌙 Dark Mode Toggle
const toggle = document.getElementById("toggle-dark");
const body = document.body;
const icon = toggle.querySelector("i");

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

// Toggle dark mode
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");

  // Change icon
  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ✅ AOS Scroll Animation Init
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true
});

const roles = ["Software Developer", "Problem Solver", "Cloud Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.querySelector(".typed-text");

function type() {
  const current = roles[wordIndex];
  const display = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  typedText.textContent = display;

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 120);
}

document.addEventListener("DOMContentLoaded", type);

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ✅ AOS Scroll Animation Init
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true
});
=======
// 🌙 Dark Mode Toggle
const toggle = document.getElementById("toggle-dark");
const body = document.body;
const icon = toggle.querySelector("i");

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

// Toggle dark mode
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");

  // Change icon
  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ✅ AOS Scroll Animation Init
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true
});
>>>>>>> 614000540540273711efbdd74618c0206f284542
