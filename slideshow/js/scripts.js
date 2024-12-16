const slides = Array.from(document.getElementsByClassName("slide"));
const totalSlideNumber = slides.length;
let currentSlideId = 0;

const displayCurrentSlide = () => {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[currentSlideId].style.display = "block";
};

const prevSlide = () => {
  currentSlideId = (currentSlideId - 1 + totalSlideNumber) % totalSlideNumber;
  displayCurrentSlide();
};

const nextSlide = () => {
  currentSlideId = (currentSlideId + 1) % totalSlideNumber;
  displayCurrentSlide();
};

setInterval(nextSlide, 5000);
