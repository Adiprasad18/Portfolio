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
