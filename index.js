const login = document.getElementById("login");

const trendCarrousel = document.querySelector(".trend__carrousel");
const trendContainer = document.querySelector(".trend__container");
const prevBtn = document.getElementById("trend-prev");
const nextBtn = document.getElementById("trend-next");

// Redirect to login page
login.addEventListener("click", function () {
  window.location.href = "login.html";
});

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  const containerWidth =
    document.querySelector(".trend__container").offsetWidth;
  const maxScroll = trendContainer.scrollWidth - containerWidth;

  scrollAmount += containerWidth;

  if (scrollAmount > maxScroll) scrollAmount = maxScroll;

  if (scrollAmount > 1) {
    prevBtn.classList.remove("hide");
  } else {
    prevBtn.classList.add("hide");
  }

  trendContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {
  const containerWidth =
    document.querySelector(".trend__container").offsetWidth;

  scrollAmount -= containerWidth;

  if (scrollAmount < 0) scrollAmount = 0;

  if (scrollAmount > 1) {
    prevBtn.classList.remove("hide");
  } else {
    prevBtn.classList.add("hide");
  }

  trendContainer.style.transform = `translateX(-${scrollAmount}px)`;
});
