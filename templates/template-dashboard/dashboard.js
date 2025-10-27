// File: templates/template-dashboard/dashboard.js

// Tunggu sampai semua elemen HTML dimuat
document.addEventListener("DOMContentLoaded", function () {
  // 1. Ambil elemen-elemen yang kita butuhkan
  const toggleButton = document.getElementById("mobile-menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const dashboardContainer = document.querySelector(".dashboard-container");

  // 2. Tambahkan 'event listener' ke tombol menu
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      // Ini akan menambah/menghapus kelas 'sidebar-open'
      // pada container utama saat tombol diklik
      dashboardContainer.classList.toggle("sidebar-open");
    });
  }

  // 3. (Opsional) Menutup sidebar saat area konten diklik
  // Kita bisa tambahkan overlay nanti, tapi untuk sekarang
  // kita buat cara agar bisa ditutup
  const content = document.querySelector(".content");
  if (content) {
    content.addEventListener("click", function () {
      // Jika sidebar terbuka, tutup
      if (dashboardContainer.classList.contains("sidebar-open")) {
        dashboardContainer.classList.remove("sidebar-open");
      }
    });
  }
});
