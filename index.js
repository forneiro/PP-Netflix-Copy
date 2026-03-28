const login = document.getElementById("login");

login.addEventListener("click", function () {
  window.location.href = "login.html";
});

const profileBtn = document.getElementById("profile-btn");
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

let currIndex = 0;

profileBtn.addEventListener("click", function (e) {
  e.preventDefault();

  currIndex++;

  if (currIndex >= totalSlides) {
    currIndex = 0;
  }

  const desplazamiento = currentIndex * -100;

  slides.style.transform = `translateX(${desplazamiento}%)`;
});
