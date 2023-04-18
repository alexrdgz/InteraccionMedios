const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", (event) => {
  event.preventDefault();
  navMenu.classList.toggle("nav-menu_visible");
});

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
