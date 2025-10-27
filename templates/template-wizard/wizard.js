// File: templates/template-wizard/wizard.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Ambil semua elemen DOM
  const formSteps = document.querySelectorAll(".form-step");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");
  const progressSteps = document.querySelectorAll(".progress-step");
  const progressLine = document.getElementById("progress-line");

  let currentStep = 1; // Mulai dari langkah 1

  // Fungsi untuk menampilkan langkah berdasarkan nomor
  function showStep(stepNumber) {
    // Sembunyikan semua langkah
    formSteps.forEach((step) => {
      step.classList.remove("active");
    });

    // Tampilkan langkah yang diminta
    document
      .querySelector(`.form-step[data-step="${stepNumber}"]`)
      .classList.add("active");

    // Update status progress bar
    updateProgressBar(stepNumber);

    // Update tampilan tombol
    updateButtons(stepNumber);
  }

  // Fungsi untuk update progress bar
  function updateProgressBar(stepNumber) {
    // Update lingkaran (steps)
    progressSteps.forEach((step, index) => {
      if (index < stepNumber) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });

    // Update garis progres
    const totalSteps = progressSteps.length;
    const progressWidth = ((stepNumber - 1) / (totalSteps - 1)) * 100;
    progressLine.style.width = progressWidth + "%";
  }

  // Fungsi untuk update tombol (prev, next, submit)
  function updateButtons(stepNumber) {
    const totalSteps = formSteps.length;

    if (stepNumber === 1) {
      // Langkah pertama
      prevBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
      submitBtn.style.display = "none";
    } else if (stepNumber === totalSteps) {
      // Langkah terakhir
      prevBtn.style.display = "inline-block";
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline-block";
    } else {
      // Langkah di tengah
      prevBtn.style.display = "inline-block";
      nextBtn.style.display = "inline-block";
      submitBtn.style.display = "none";
    }
  }

  // Event listener untuk tombol "Selanjutnya"
  nextBtn.addEventListener("click", () => {
    if (currentStep < formSteps.length) {
      currentStep++;
      showStep(currentStep);
    }
  });

  // Event listener untuk tombol "Sebelumnya"
  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  // Inisialisasi tampilan awal (penting jika JS dimuat lambat)
  showStep(currentStep);
});
