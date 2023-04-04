const carouselSlide = document.querySelector(".carousel--theme-full");
const carouselImages = document.querySelectorAll(".carousel__box--theme-full");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let counter = 1;
const size = carouselImages[0].clientWidth;
console.log(size);

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  counter++;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  carouselSlide.style.transform = "translateX(" + size * counter + "px)";
  counter--;
});

carouselSlide.addEventListener("transitionend", () => {
  console.log(carouselImages.length);
  console.log(counter);
  console.log(carouselImages[counter].id);
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    // carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    // counter = carouselImages.length - 2;
  }
  console.log(carouselImages.length);
  console.log(counter);

  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    // carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    // counter = carouselImages.length - counter;
  }
});
