const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", (event) => {
  event.preventDefault();
  navMenu.classList.toggle("nav-menu_visible");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
    const href = link.getAttribute("href");
    window.location.href = href;
  })
});



const streamUrl = 'https://stream.zeno.fm/zzx9y55gbrduv';
const audio = document.getElementById('audio-stream');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const volumeControl = document.getElementById('volume-control');

function showPlayBtn() {
  playBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
}

function showPauseBtn() {
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
}

function playAudio() {
  audio.src = streamUrl;
  audio.load();
  audio.play();
  showPauseBtn();
}


function pauseAudio() {
  audio.pause();
  showPlayBtn();
}

function changeVolume() {
  audio.volume = volumeControl.value / 100;
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
volumeControl.addEventListener('input', changeVolume);

showPauseBtn();