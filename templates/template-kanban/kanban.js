// File: templates/template-kanban/kanban.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Ambil semua elemen yang diperlukan
  const taskCards = document.querySelectorAll(".task-card");
  const columns = document.querySelectorAll(".kanban-column");
  const taskContainers = document.querySelectorAll(".tasks-container");

  // Variabel untuk menyimpan kartu yang sedang di-drag
  let draggedCard = null;

  // ===================================
  // 2. EVENT LISTENER UNTUK KARTU TUGAS
  // ===================================

  taskCards.forEach((card) => {
    // Saat mulai men-drag kartu
    card.addEventListener("dragstart", (e) => {
      draggedCard = e.target; // Simpan kartu yang di-drag

      // Tambahkan kelas CSS 'dragging' setelah jeda singkat
      // Ini untuk efek visual "mengangkat" kartu
      setTimeout(() => {
        e.target.classList.add("dragging");
      }, 0);

      // Simpan ID kartu untuk transfer data
      e.dataTransfer.setData("text/plain", e.target.id);
    });

    // Saat selesai men-drag kartu (setelah drop)
    card.addEventListener("dragend", () => {
      // Hapus kelas 'dragging' untuk mengembalikan tampilan
      draggedCard.classList.remove("dragging");
      draggedCard = null; // Bersihkan variabel
    });
  });

  // ======================================
  // 3. EVENT LISTENER UNTUK KOLOM (DROP ZONES)
  // ======================================

  taskContainers.forEach((container) => {
    // Saat kartu di-drag DI ATAS kolom
    container.addEventListener("dragover", (e) => {
      // PENTING: Batalkan perilaku default browser
      // Ini WAJIB agar event 'drop' bisa berfungsi
      e.preventDefault();

      // Tambahkan feedback visual ke kolom
      container.parentElement.classList.add("drag-over");
    });

    // Saat kartu meninggalkan area kolom
    container.addEventListener("dragleave", (e) => {
      // Hapus feedback visual
      container.parentElement.classList.remove("drag-over");
    });

    // Saat kartu di-DROP (dilepas) di kolom
    container.addEventListener("drop", (e) => {
      // Batalkan perilaku default (misalnya, membuka link)
      e.preventDefault();

      // Hapus feedback visual
      container.parentElement.classList.remove("drag-over");

      // Dapatkan ID kartu yang disimpan saat 'dragstart'
      const id = e.dataTransfer.getData("text/plain");
      const card = document.getElementById(id);

      // Pindahkan kartu (DOM element) ke kontainer baru
      if (card) {
        container.appendChild(card);
      }
    });
  });
});
