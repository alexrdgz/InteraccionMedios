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


// Obtenemos la lista de elementos <li> que representan los días de la semana
const diasList = document.querySelectorAll('.dias_box li');

// Obtenemos el día actual
const diaActual = new Date().getDay() - 1;

// Ocultamos todos los elementos <div> de clase 'box semana'
const boxes = document.querySelectorAll('.box.semana');
boxes.forEach(box => {
    box.style.display = 'none';
});

// Mostramos el contenido correspondiente al día actual
const selectedBox = document.querySelectorAll('.box.semana')[diaActual];
selectedBox.style.display = 'block';

// Iteramos sobre cada elemento <li> y añadimos un evento de click a cada uno
diasList.forEach((dia, index) => {
    dia.addEventListener('click', () => {
        // Ocultamos todos los elementos <div> de clase 'box semana'
        const boxes = document.querySelectorAll('.box.semana');
        boxes.forEach(box => {
            box.style.display = 'none';
        });

        // Mostramos el contenido correspondiente al día seleccionado
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
