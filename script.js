function showLetter() {
  const start = document.getElementById("start-screen");
  const letter = document.getElementById("letter-screen");

  // Başlangıcı gizle
  start.style.display = "none";

  // Mektubu görünür yap
  letter.style.opacity = 0;
  letter.style.display = "block";

  // Fade-in
  setTimeout(() => {
    letter.style.transition = "opacity 1s ease";
    letter.style.opacity = 1;
  }, 50); // Çok kısa gecikme (DOM hazır olsun diye)

  // 2 dakika (120000 ms) sonra fade-out
  setTimeout(() => {
    letter.style.transition = "opacity 1s ease";
    letter.style.opacity = 0;

    // Fade-out bittikten sonra (1 saniye sonra) mektubu tamamen gizle
    setTimeout(() => {
      letter.style.display = "none";
      window.location.href = "album.html";

    }, 1000);
  }, 2000); // 2 dakika sonra kaybol
}
