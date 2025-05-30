<script>
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
  
  const roles = ["Software Developer", "Problem Solver", "Cloud Enthusiast"];
  const typedRolesContainer = document.querySelector(".typed-roles");

  let wordIndex = 0;

  function typeRole(role, container, callback) {
    let charIndex = 0;
    let interval = setInterval(() => {
      container.textContent = role.substring(0, charIndex++);
      if (charIndex > role.length) {
        clearInterval(interval);
        setTimeout(callback, 1000);
      }
    }, 100);
  }

  function showRoles() {
    if (wordIndex >= roles.length) return;
    const roleDiv = document.createElement("div");
    typedRolesContainer.appendChild(roleDiv);

    typeRole(roles[wordIndex], roleDiv, () => {
      wordIndex++;
      showRoles();
    });
  }

  document.addEventListener("DOMContentLoaded", showRoles);

</script>
