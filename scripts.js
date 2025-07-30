const audio = document.querySelector('audio');
const body = document.querySelector('body');

// Untuk menambahkan class saat musik main
audio.addEventListener('play', () => {
  body.classList.add('play-music');
});
audio.addEventListener('pause', () => {
  body.classList.remove('play-music');
});

// Confetti
setInterval(() => {
  confetti({
    particleCount: 50,
    spread: 100,
    origin: { y: 0 },
    colors: ['#FFD700', '#FF69B4', '#00BFFF', '#ADFF2F'],
  });
}, 2000);

// ✅ Trik autoplay: play saat ada interaksi
function tryPlayMusicOnce() {
  audio.play().then(() => {
    // sukses
  }).catch(() => {
    // autoplay gagal, tunggu interaksi
    document.addEventListener('click', () => {
      audio.play();
    }, { once: true });
    document.addEventListener('touchstart', () => {
      audio.play();
    }, { once: true });
  });
}

tryPlayMusicOnce();
