import { TRENDING__ITEMS, BENEFITS__ITEMS } from "./items.mjs";

// Variables redirect to login
const login = document.getElementById("login");
const emailIndex = document.getElementById("email-index");
const comenzarIndex = document.getElementById("comenzar-index");
const modal = document.querySelector(".modal-overlay");
const closeModal = document.getElementById("btn-close-modal");

// Variables Carrousel
const trendContainer = document.querySelector(".trend__container");
const prevBtn = document.getElementById("trend-prev");
const nextBtn = document.getElementById("trend-next");

// Variables Benefits
const benefitsContainer = document.querySelector(".benefits__container");

// Variable bottom btn
const bottomBtn = document.getElementById("bottom-btn");
const questionsList = document.querySelector(".questions__list");
const header = document.querySelector(".header");

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
login.addEventListener("click", () => {
  window.location.href = "login.html";
});

comenzarIndex.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("hide");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hide");
});

// Bottom btn

const btnObserverFnc = function ([entry]) {
  console.log(entry);
  if (entry.isIntersecting) {
    console.log("hola");
    bottomBtn.style.opacity = "1";
    bottomBtn.style.transform = "translate(-50%, 0)";
  } else {
    bottomBtn.style.opacity = "0";
    bottomBtn.style.transform = "translate(-50%, 100%)";
  }
};

const btnObserver = new IntersectionObserver(btnObserverFnc, {
  threshold: 0.1,
  root: null,
});

btnObserver.observe(questionsList);

const btnObserverHeader = ([entry]) => {
  console.log(entry);

  if (!entry.isIntersecting) {
    bottomBtn.style.opacity = "1";
    bottomBtn.style.transform = "translate(-50%, 0)";
  }
};

const headerObserver = new IntersectionObserver(btnObserverHeader, {
  threshold: 0.9,
  root: null,
});

btnObserver.observe(btnObserverHeader);

// bottomBtn
// questionsList
// header

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
