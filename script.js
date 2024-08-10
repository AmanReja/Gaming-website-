const display = document.querySelector(".input-container");
const search = document.querySelector(".icon");

search.addEventListener("click", () => {
  display.classList.toggle("hide");
});

const list = document.querySelector(".list");
const item = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dots li");
const prev = document.getElementById("preview");
const next = document.getElementById("next");
const slider = document.querySelector(".slider");
console.log(slider);

slider.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  slider.scrollLeft += evt.deltaY;
});
next.addEventListener("click", () => {
  slider.scrollLeft += 1000;
});
prev.addEventListener("click", () => {
  slider.scrollLeft -= 1000;
});

// */for menu toggle//
const menu = document.querySelector(".nav-container");
console.log(menu);
const hambarger = document.querySelector(".bar-container");
console.log(hambarger);
hambarger.addEventListener("click", () => {
  menu.classList.toggle("open-list");
  hambarger.classList.toggle("open-list");
});
// */for menu toggle//
