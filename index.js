const video = document.querySelector("iframe");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const progress = document.getElementById("progreso");
const currentTime = document.getElementById("tiempo-actual");
const duration = document.getElementById("duracion-total");
const muteBtn = document.getElementById("mute");
const volume = document.getElementById("volumen");

let isPlaying = false;
let isMuted = false;

// Función para reproducir el video
function reproducir() {
  video.contentWindow.postMessage(
    '{"event":"command","func":"' + "playVideo" + '","args":""}',
    "*"
  );
  isPlaying = true;
  playBtn.disabled = true;
  pauseBtn.disabled = false;
}

// Función para pausar el video
function pausar() {
  video.contentWindow.postMessage(
    '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
    "*"
  );
  isPlaying = false;
  playBtn.disabled = false;
  pauseBtn.disabled = true;
}

// Función para actualizar la barra de progreso
function actualizarProgreso() {
  const current = video.contentWindow.postMessage(
    '{"event":"command","func":"' + "getCurrentTime" + '","args":""}',
    "*"
  );
  const durationTime = video.contentWindow.postMessage(
    '{"event":"command","func":"' + "getDuration" + '","args":""}',
    "*"
  );

  current.then(function (result) {
    const currentTimeValue = Math.round(result);
    currentTime.textContent = formatTime(currentTimeValue);
    progress.value = (currentTimeValue / durationValue) * 100;
  });

  durationTime.then(function (result) {
    const durationValue = Math.round(result);
    duration.textContent = "-" + formatTime(durationValue - currentTimeValue);
  });
}

// Función para dar formato a los tiempos en segundos a minutos:segundos
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

// Función para cambiar el estado de mute del video
function mute() {
  if (!isMuted) {
    video.contentWindow.postMessage(
      '{"event":"command","func":"' + "mute" + '","args":""}',
      "*"
    );
    isMuted = true;
    muteBtn.textContent = "Unmute";
  } else {
    video.contentWindow.postMessage(
      '{"event":"command","func":"' + "unMute" + '","args":""}',
      "*"
    );
    isMuted = false;
    muteBtn.textContent = "Mute";
  }
}

// Función para cambiar el volumen del video
function cambiarVolumen() {
  const newVolume = volume.value;
  video.contentWindow.postMessage(
    '{"event":"command","func":"' +
      "setVolume" +
      '","args":[' +
      newVolume +
      "]}",
    "*"
  );
}

// Eventos para los botones de reproducción y pausa
playBtn.addEventListener("click", reproducir);
pauseBtn.addEventListener("click", pausar);

// Eventos para la barra de progreso
video.addEventListener("timeupdate", actualizarProgreso);
progress.addEventListener("input", () => {
  const newTime = (progress.value / 100) * video.duration;
  video.contentWindow.postMessage(
    '{"event":"command","func":"' + "seekTo" + '","args":[' + newTime + "]}",
    "*"
  );
});
