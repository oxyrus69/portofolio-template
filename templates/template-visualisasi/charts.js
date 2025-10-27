// File: templates/template-visualisasi/charts.js

// Tunggu DOM dimuat
document.addEventListener("DOMContentLoaded", () => {
  // ===================================
  // 1. GRAFIK BATANG (BAR CHART)
  // ===================================

  // Ambil elemen <canvas> dengan ID "myBarChart"
  const barCtx = document.getElementById("myBarChart");

  if (barCtx) {
    new Chart(barCtx, {
      type: "bar", // Tipe grafiknya
      data: {
        // Label untuk sumbu X (bulan)
        labels: ["Mei", "Juni", "Juli", "Agustus", "September", "Oktober"],
        datasets: [
          {
            label: "Jumlah Kunjungan",
            // Data untuk sumbu Y
            data: [65, 59, 80, 81, 56, 120],
            backgroundColor: "rgba(52, 152, 219, 0.7)", // Biru
            borderColor: "rgba(52, 152, 219, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true, // Membuatnya responsif
        scales: {
          y: {
            beginAtZero: true, // Mulai sumbu Y dari 0
          },
        },
      },
    });
  }

  // ===================================
  // 2. GRAFIK LINGKARAN (PIE CHART)
  // ===================================

  // Ambil elemen <canvas> dengan ID "myPieChart"
  const pieCtx = document.getElementById("myPieChart");

  if (pieCtx) {
    new Chart(pieCtx, {
      type: "pie", // Tipe grafiknya
      data: {
        // Label untuk setiap bagian lingkaran
        labels: ["Dokter Umum", "Dokter Gigi", "Dokter Anak", "Dokter THT"],
        datasets: [
          {
            label: "Jumlah Dokter",
            // Data (total harus 100% jika dalam persentase)
            data: [12, 5, 4, 3],
            // Warna untuk setiap bagian
            backgroundColor: [
              "rgba(52, 152, 219, 0.7)", // Biru
              "rgba(26, 188, 156, 0.7)", // Hijau
              "rgba(241, 196, 15, 0.7)", // Kuning
              "rgba(231, 76, 60, 0.7)", // Merah
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
});
