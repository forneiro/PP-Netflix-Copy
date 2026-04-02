import { TRENDING__ITEMS, BENEFITS__ITEMS } from "./items.mjs";

// Variables redirect to login
const login = document.getElementById("login");

// Variables Carrousel
const trendContainer = document.querySelector(".trend__container");
const prevBtn = document.getElementById("trend-prev");
const nextBtn = document.getElementById("trend-next");

// Variables Benefits
const benefitsContainer = document.querySelector(".benefits__container");

// Generate Trending Items
TRENDING__ITEMS.forEach((item) => {
  let newHtml = `
            <article class="trend__article">
              <img
                class="trend__img"
                src="${item.img}"
                alt="${item.title}"
              />
              <span class="trend__num">${item.id}</span>
            </article>`;
  trendContainer.insertAdjacentHTML("beforeend", newHtml);
});

// Generate Benefits Items
BENEFITS__ITEMS.forEach((item) => {
  let newHtml = `
          <article class="benefits__benefit">
            <h3 class="benefits__title">${item.title}</h3>
            <p class="benefits__info">
              ${item.description}
            </p>
            ${item.svg}
          </article>`;
  benefitsContainer.insertAdjacentHTML("beforeend", newHtml);
});

// Redirect to login page
login.addEventListener("click", function () {
  window.location.href = "login.html";
});

// Carrousel
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
