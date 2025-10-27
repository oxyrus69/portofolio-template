document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // 1. Cek tema yang tersimpan di localStorage saat halaman dimuat
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    // Terapkan mode gelap jika itu yang tersimpan
    body.classList.add("dark-mode");
  }

  // 2. Tambahkan event listener ke tombol toggle
  themeToggle.addEventListener("click", () => {
    // Toggle kelas 'dark-mode' di body
    body.classList.toggle("dark-mode");

    // 3. Simpan pilihan pengguna di localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // ===========================================
  // == LOGIKA UNTUK GALERI GAMBAR (BARU)    ==
  // ===========================================

  const mainImage = document.getElementById("main-gallery-image");
  const thumbnails = document.querySelectorAll(".thumbnail-row .thumbnail");

  // Hanya jalankan kode ini jika kita menemukan galeri di halaman ini
  if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach((thumb) => {
      // Tambahkan listener untuk setiap thumbnail
      thumb.addEventListener("click", () => {
        // 1. Ambil path gambar baru dari atribut 'data-src'
        const newImageSrc = thumb.getAttribute("data-src");

        // 2. Ganti 'src' gambar utama
        mainImage.setAttribute("src", newImageSrc);

        // 3. Update status 'active' pada thumbnail
        // Hapus 'active' dari semua thumbnail
        thumbnails.forEach((t) => t.classList.remove("active"));

        // Tambahkan 'active' ke thumbnail yang baru diklik
        thumb.classList.add("active");
      });
    });
  }

  // ===========================================
  // == LOGIKA UNTUK FILTER KATEGORI (BARU)  ==
  // ===========================================

  const filterButtons = document.querySelectorAll(
    ".filter-controls .filter-btn"
  );
  const templateCards = document.querySelectorAll(
    ".gallery-grid .template-card"
  );

  // Hanya jalankan jika ada tombol filter
  if (filterButtons.length > 0 && templateCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        // 1. Update tombol yang aktif
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // 2. Loop semua kartu dan tampilkan/sembunyikan
        templateCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");

          if (filter === "semua" || filter === cardCategory) {
            card.classList.remove("hide"); // Tampilkan
          } else {
            card.classList.add("hide"); // Sembunyikan
          }
        });
      });
    });
  }

  // ===========================================
  // == LOGIKA UNTUK TOMBOL "BACK TO TOP" (BARU) ==
  // ===========================================

  const backToTopButton = document.getElementById("back-to-top-btn");

  if (backToTopButton) {
    // 1. Tampilkan tombol saat scroll ke bawah
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        // Muncul setelah 300px
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    // 2. Scroll ke atas saat diklik
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Efek scroll halus
      });
    });
  }
});
