const login = document.getElementById("login");

const trendCarrousel = document.querySelector(".trend__carrousel");
const trendContainer = document.querySelector(".trend__container");
const trendPrev = document.getElementById(".trend-prev");
const trendNext = document.getElementById(".trend-next");

// Redirect to login page
login.addEventListener("click", function () {
  window.location.href = "login.html";
});
