const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", (event) => {
  event.preventDefault();
  navMenu.classList.toggle("nav-menu_visible");
});


// function cambiarImagen() {
//   var hoy = new Date().getDay();
//   var imagen = document.getElementById("martes");

//   if (hoy === 0) {
//     imagen = document.getElementById("domingo");
//   } else if (hoy === 1) {
//     imagen = document.getElementById("lunes");
//   } else if (hoy === 2) {
//     imagen = document.getElementById("martes");
//   } else if (hoy === 3) {
//     imagen = document.getElementById("miercoles");
//   } else if (hoy === 4) {
//     imagen = document.getElementById("jueves");
//   } else if (hoy === 5) {
//     imagen = document.getElementById("viernes");
//   } else if (hoy === 6) {
//     imagen = document.getElementById("sabado");
//   }

//   imagen.style.display = "block";
// }




function cambiarImagen() {
  var hoy = new Date().getDay();
  var imagen = document.getElementById('martes');

  if (hoy === 0) {
    imagen.src = "./images/domingo.webp";
    imagen.alt = "Programacion del domingo";
  } else if (hoy === 1) {
    imagen.src = "./images/Lunes.jpg";
    imagen.alt = "Programacion del lunes";
  } else if (hoy === 2) {
    imagen.src = "./images/martes.jpg";
    imagen.alt = "Programacion del martes";
  } else if (hoy === 3) {
    imagen.src = "./images/miercoles.jpg";
    imagen.alt = "Programacion del miércoles";
  } else if (hoy === 4) {
    imagen.src = "./images/jueves.jpg";
    imagen.alt = "Programacion del jueves";
  } else if (hoy === 5) {
    imagen.src = "./images/viernes.jpg";
    imagen.alt = "Programacion del viernes";
  } else if (hoy === 6) {
    imagen.src = "./images/sabado.jpg";
    imagen.alt = "Programacion del sábado";
  }
  imagen.style.display = "block";
}

const sliderWrapper = document.querySelector(".slider-wrapper");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");
let currentPosition = 0;

function moveSlider(position) {
  currentPosition = position;
  sliderWrapper.style.left = `-${currentPosition}00%`;
}

sliderPrev.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--;
    moveSlider(currentPosition);
  }
});

sliderNext.addEventListener("click", () => {
  if (currentPosition < 2) {
    currentPosition++;
    moveSlider(currentPosition);
  }
});

setInterval(() => {
  if (currentPosition < 2) {
    currentPosition++;
    moveSlider(currentPosition);
  } else {
    currentPosition = 0;
    moveSlider(currentPosition);
  }
}, 5000);

const sliderImages = document.querySelectorAll(".slider-wrapper img");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close");

let selectedIndex = 0;

sliderImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    selectedIndex = index;
    modalContent.src = image.src;
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
