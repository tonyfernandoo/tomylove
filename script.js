// Variabel konfigurasi
var musik = "https://dekatutorial.github.io/Sezairi%20-%20It's%20You.mp3";
var background = "IMG_20250209_202623_944.webp"; // Pastikan file ini ada di folder Anda
var ucapanSurat =
  "Sayang, mungkin aku uda lama ga ngomong ini, tapi thank you buat semua kebaikan, niat baik, apapun yg uda kamu kasi ke aku. Aku sangat sangat grateful bisa lewatin semuanya bareng kamu. Sorry kalo kadang ada diem/bacod aku yg nyebelin, pukul aja. I'll take care of you. Kalo lagi ada apa, atau apa, jangan pendem perasaan kamu yaaa... bilang ajaa.... I'll treat you with the way you want. I love you 3000! Dengerin lagunya yaa";
var pesanWhatsapp = "Hai, aku sudah membaca pesanmu!";

// Fungsi utama
document.addEventListener("DOMContentLoaded", function () {
  // Atur background
  const bg = document.querySelector(".bg");
  bg.style.background = `url("${background}")`;
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg.style.backgroundRepeat = "no-repeat";

  // Atur audio dan elemen lainnya
  const audio = new Audio(musik);
  const content = document.querySelector(".content");
  const content2 = document.querySelector(".content2");
  const surat = document.querySelector(".surat");
  const pesan = document.querySelector(".pesan");
  const wa = document.querySelector(".wa");

  // Pastikan nilai ucapan surat diatur
  pesan.value = ucapanSurat;

  // Sembunyikan konten kedua saat pertama kali dimuat
  content.style.display = "flex";
  content2.style.display = "none";

  // Event listener untuk membuka surat
  surat.addEventListener("click", () => {
    audio.play();
    content.style.display = "none";
    content2.style.display = "flex";
  });

  // Event listener untuk tombol WhatsApp
  wa.addEventListener("click", () => {
    window.location = "https://api.whatsapp.com/send?text=" + encodeURIComponent(pesanWhatsapp);
  });
});
