// File: templates/template-chat/chat.js

document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chat-form");
  const messageInput = document.getElementById("message-input");
  const messagesContainer = document.getElementById("chat-messages");

  // Fungsi untuk menggulir ke pesan terbaru
  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Fungsi untuk membuat gelembung pesan baru
  function createMessageBubble(text, type) {
    // 1. Buat elemen div baru
    const bubble = document.createElement("div");

    // 2. Tambahkan kelas CSS
    bubble.classList.add("bubble");
    bubble.classList.add(type); // 'sent' or 'received'

    // 3. Isi teksnya
    bubble.innerText = text;

    // 4. Tambahkan ke kontainer
    messagesContainer.appendChild(bubble);

    // 5. Scroll ke bawah
    scrollToBottom();
  }

  // Event listener untuk form submit
  chatForm.addEventListener("submit", (e) => {
    // Mencegah halaman reload
    e.preventDefault();

    const messageText = messageInput.value.trim();

    if (messageText !== "") {
      // 1. Tampilkan pesan yang kita kirim
      createMessageBubble(messageText, "sent");

      // 2. Kosongkan input
      messageInput.value = "";

      // 3. (Simulasi) Buat balasan otomatis setelah 1 detik
      setTimeout(() => {
        createMessageBubble("SIKEEEEEE!", "received");
      }, 1000);
    }
  });

  // Gulir ke bawah saat halaman pertama kali dimuat
  scrollToBottom();
});
