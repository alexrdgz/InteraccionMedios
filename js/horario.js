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


const diasList = document.querySelectorAll('.dias_box li');

const diaActual = new Date().getDay() - 1;

const boxes = document.querySelectorAll('.box.semana');
boxes.forEach(box => {
    box.style.display = 'none';
});

const selectedBox = document.querySelectorAll('.box.semana')[diaActual];
selectedBox.style.display = 'block';

diasList.forEach((dia, index) => {
    dia.addEventListener('click', () => {
        const boxes = document.querySelectorAll('.box.semana');
        boxes.forEach(box => {
            box.style.display = 'none';
        });

        const selectedBox = document.querySelectorAll('.box.semana')[index];
        selectedBox.style.display = 'block';
    });
});

const streamUrl = 'https://stream.zeno.fm/zzx9y55gbrduv';
const audio = new Audio(streamUrl);
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
  audio.load();
  audio.play();
  showPauseBtn();

  
  localStorage.setItem('audioState', 'playing');
}

function pauseAudio() {
  audio.pause();
  showPlayBtn();


  localStorage.setItem('audioState', 'paused');
}

function changeVolume() {
  audio.volume = volumeControl.value / 100;
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
volumeControl.addEventListener('input', changeVolume);


const audioState = localStorage.getItem('audioState');
if (audioState === 'playing') {
  audio.play();
  showPauseBtn();
} else {
  audio.pause();
  showPlayBtn();
}
