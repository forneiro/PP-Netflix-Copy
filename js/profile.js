// Variables slider popular
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const slidesContainer = document.getElementById("slides-popular");

// Variables slider new
const slidesContainerNew = document.getElementById("slides-new");
const nextBtnNew = document.getElementById("next-btn-new");
const prevBtnNew = document.getElementById("prev-btn-new");

// Variables slider most watched
const slidesContainerMostWatched = document.getElementById(
  "slides-most-watched",
);
const nextBtnMostWatched = document.getElementById("next-btn-most-watched");
const prevBtnMostWatched = document.getElementById("prev-btn-most-watched");

////////////////////////////////
// First slider
let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  const containerWidth = document.getElementById("slides-popular").offsetWidth;
  const maxScroll = slidesContainer.scrollWidth - containerWidth;

  scrollAmount += containerWidth;

  if (scrollAmount > maxScroll) scrollAmount = maxScroll;

  slidesContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {
  const containerWidth = document.getElementById("slides-popular").offsetWidth;

  scrollAmount -= containerWidth;

  if (scrollAmount < 0) scrollAmount = 0;

  slidesContainer.style.transform = `translateX(-${scrollAmount}px) `;
});

for (let i = 1; i < 10; i++) {
  let newHtml = `
  <li class="slide">
    <img
      class="slide__img"
      src="../imgs/banner-${i}.webp"
      alt=""
    />
  </li>
  `;

  slidesContainer.insertAdjacentHTML("afterbegin", newHtml);
}

////////////////////////////////
// Second slider
for (let i = 4; i < 13; i++) {
  let newHtml = `
  <li class="slide">
    <img
      class="slide__img"
      src="../imgs/banner-${i}.webp"
      alt=""
    />
  </li>
  `;

  slidesContainerNew.insertAdjacentHTML("afterbegin", newHtml);
}

let scrollAmountNew = 0;
nextBtnNew.addEventListener("click", () => {
  const containerWidth = document.getElementById("slides-new").offsetWidth;
  const maxScroll = slidesContainerNew.scrollWidth - containerWidth;

  scrollAmountNew += containerWidth;

  if (scrollAmountNew > maxScroll) scrollAmountNew = maxScroll;

  slidesContainerNew.style.transform = `translateX(-${scrollAmountNew}px)`;
});

prevBtnNew.addEventListener("click", () => {
  const containerWidth = document.getElementById("slides-new").offsetWidth;

  scrollAmountNew -= containerWidth;

  if (scrollAmountNew < 0) scrollAmountNew = 0;

  slidesContainerNew.style.transform = `translateX(-${scrollAmountNew}px)`;
});

////////////////////////////////
// Third slider
for (let i = 1; i < 11; i++) {
  let newHtml = `
  <li class="slide">
    <img
      class="slide__img-first-banner"
      src="../imgs/first-banner-${i}.webp"
      alt=""
    />
  </li>
  `;
  slidesContainerMostWatched.insertAdjacentHTML("afterbegin", newHtml);
}

let scrollAmountMostWatched = 0;

nextBtnMostWatched.addEventListener("click", () => {
  const containerWidth = document.getElementById(
    "slides-most-watched",
  ).offsetWidth;
  const maxScroll = slidesContainerMostWatched.scrollWidth - containerWidth;

  scrollAmountMostWatched += containerWidth;

  if (scrollAmountMostWatched > maxScroll) scrollAmountMostWatched = maxScroll;

  slidesContainerMostWatched.style.transform = `translateX(-${scrollAmountMostWatched}px)`;
});

prevBtnMostWatched.addEventListener("click", () => {
  const containerWidth = document.getElementById(
    "slides-most-watched",
  ).offsetWidth;

  scrollAmountMostWatched -= containerWidth;

  if (scrollAmountMostWatched < 0) scrollAmountMostWatched = 0;

  slidesContainerMostWatched.style.transform = `translateX(-${scrollAmountMostWatched}px)`;
});
////////////////////////////////
// Fourth slider
