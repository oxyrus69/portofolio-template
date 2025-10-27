// File: templates/template-ecommerce/product.js

document.addEventListener("DOMContentLoaded", () => {
  // ===================================
  // 1. LOGIKA GALERI GAMBAR
  // ===================================
  const mainImage = document.getElementById("main-product-image");
  const thumbnails = document.querySelectorAll(".product-gallery .thumbnail");

  if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        // Ambil 'data-src' dari thumbnail yang diklik
        const newImageSrc = thumb.getAttribute("data-src");

        // Ganti gambar utama
        mainImage.setAttribute("src", newImageSrc);

        // Update status 'active'
        thumbnails.forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  }

  // ===================================
  // 2. LOGIKA KUANTITAS
  // ===================================
  const qtyInput = document.getElementById("qty-input");
  const qtyPlus = document.getElementById("qty-plus");
  const qtyMinus = document.getElementById("qty-minus");

  if (qtyInput && qtyPlus && qtyMinus) {
    // Tombol Plus
    qtyPlus.addEventListener("click", () => {
      let currentValue = parseInt(qtyInput.value);
      qtyInput.value = currentValue + 1;
    });

    // Tombol Minus
    qtyMinus.addEventListener("click", () => {
      let currentValue = parseInt(qtyInput.value);
      if (currentValue > 1) {
        // Tidak boleh kurang dari 1
        qtyInput.value = currentValue - 1;
      }
    });
  }

  // ===================================
  // 3. LOGIKA KONTEN TAB
  // ===================================
  const tabButtons = document.querySelectorAll(".tab-navigation .tab-btn");
  const tabContents = document.querySelectorAll(".product-tabs .tab-content");

  if (tabButtons.length > 0 && tabContents.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab"); // misal: "deskripsi"

        // 1. Update tombol yang aktif
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // 2. Tampilkan konten yang sesuai
        tabContents.forEach((content) => {
          if (content.id === tabId) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        });
      });
    });
  }
});
