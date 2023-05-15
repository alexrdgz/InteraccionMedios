const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", (event) => {
  event.preventDefault();
  navMenu.classList.toggle("nav-menu_visible");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
    const href = link.getAttribute("href");
    window.location.href = href;
  });
});

function mostrarEnVivo() {
  var ahora = new Date();
  var dia = ahora.getDay();
  var hora = ahora.getHours();
  var minutos = ahora.getMinutes();

  if ((dia == 4 || dia == 5) && hora == 20) {
    document.getElementById("en-vivo").style.display = "block";
  } else {
    document.getElementById("en-vivo").style.display = "none";
  }
  if (dia == 5 && hora == 21 && minutos < 30) {
    document.getElementById("en-vivo").style.display = "block";
  } else {
    document.getElementById("en-vivo").style.display = "none";
  }
}

setInterval(mostrarEnVivo, 2000);

// Obtener la lista de canciones
const songList = document.querySelectorAll(".song li");

// Crear un objeto Audio
const audio = new Audio();

// Establecer la fuente de audio en el objeto Audio
function setAudioSrc(src) {
  audio.src = src;
}

// Función para reproducir la canción
function playSong() {
  audio.play();
}

// Función para pausar la canción
function pauseSong() {
  audio.pause();
}

// Función para actualizar la información de la canción
function updateSongInfo(song) {
  const songImg = document.querySelector(".song-img");
  const songTitle = document.querySelector("h3");
  const songArtist = document.querySelector("h5");

  songImg.src = song.querySelector(".song-img").src;
  songTitle.textContent = song.querySelector("h3").textContent;
  songArtist.textContent = song.querySelector("h5").textContent;
}

// Función para cambiar de canción
function changeSong(song) {
  setAudioSrc(song.querySelector("audio").src);
  updateSongInfo(song);
  playSong();
}

// Añadir evento de clic a cada canción de la lista
songList.forEach((song) => {
  song.addEventListener("click", () => {
    changeSong(song);
  });
});

// Obtener el botón de play/pausa
const playBtn = document.querySelector(".play-btn");

// Añadir evento de clic al botón de play/pausa
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

// Actualizar el estado del botón de play/pausa
audio.addEventListener("play", () => {
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
});

audio.addEventListener("pause", () => {
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
});
// Obtener los botones de adelantar y atrasar
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".backward-btn");

// Función para adelantar o atrasar el audio en segundos determinados
function seekAudio(seconds) {
  const current = audio.currentTime;
  let target = current + seconds;

  if (target < 0) {
    target = 0;
  } else if (target > audio.duration) {
    target = audio.duration;
  }

  audio.currentTime = target;
}

// Añadir evento de clic al botón de adelantar
forwardBtn.addEventListener("click", () => {
  seekAudio(30); // Adelantar 10 segundos
});

// Añadir evento de clic al botón de atrasar
backwardBtn.addEventListener("click", () => {
  seekAudio(-15); // Atrasar 10 segundos
});
const volumeControl = document.getElementById("volume-control");
function changeVolume() {
  audio.volume = volumeControl.value / 100;
}
volumeControl.addEventListener("input", changeVolume);

const progressBar = document.querySelector(".progress-bar");
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});
progressBar.addEventListener("click", (event) => {
  const rect = progressBar.getBoundingClientRect();
  const progressWidth = event.clientX - rect.left;
  const progressBarWidth = rect.right - rect.left;
  const progress = progressWidth / progressBarWidth;
  audio.currentTime = progress * audio.duration;
});

