const carouselSlide = document.querySelector(".carousel--theme-full");
const carouselImages = document.querySelectorAll(".carousel__box--theme-full");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) {
    carouselSlide.style.transition = "none";
    counter = 0;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  } else {
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 1;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  } else {
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
