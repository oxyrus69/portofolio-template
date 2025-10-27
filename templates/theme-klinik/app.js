// File: templates/theme-klinik/app.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("app-menu-toggle");
  const container = document.querySelector(".app-container");

  if (toggleButton && container) {
    toggleButton.addEventListener("click", function () {
      container.classList.toggle("sidebar-open");
    });
  }

  // (Opsional) Tutup sidebar saat konten diklik
  const content = document.querySelector(".app-content");
  if (content) {
    content.addEventListener("click", function () {
      if (container.classList.contains("sidebar-open")) {
        container.classList.remove("sidebar-open");
      }
    });
  }
});
