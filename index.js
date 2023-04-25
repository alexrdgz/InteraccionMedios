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



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true
});

swiper.on('reachEnd', function() {
  swiper.autoplay.stop();
  swiper.autoplay.start();
});

const sliderImages = document.querySelectorAll(".swiper-slide img");
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


function mostrarEnVivo() {
  var ahora = new Date();
  var dia = ahora.getDay();
  var hora = ahora.getHours();
  
  if ((dia == 4 || dia == 5) && hora == 20) {
    document.getElementById("en-vivo").style.display = "block";
  } else {
    document.getElementById("en-vivo").style.display = "none";
  }
}

setInterval(mostrarEnVivo, 15000);




