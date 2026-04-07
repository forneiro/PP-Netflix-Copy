// Variables slider popular
const slidesContainer = document.getElementById("slides-popular");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

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

// Variable switch profile
const switchProfile = document.getElementById("switch-profile");

// Functions
const showBtnPrev = (scrollAmount, prevBtn) => {
  scrollAmount > 1 ? (prevBtn.style.opacity = 1) : (prevBtn.style.opacity = 0);
};

const showBtnNext = (scrollAmount, maxScroll, nextBtn) => {
  scrollAmount >= maxScroll
    ? (nextBtn.style.opacity = 0)
    : (nextBtn.style.opacity = 1);
};

const generateHtml = (num1, num2, slidesContainer) => {
  for (let i = num1; i < num2; i++) {
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
};
generateHtml(1, 10, slidesContainer);
generateHtml(4, 13, slidesContainerNew);

// Switch profile
switchProfile.addEventListener("click", () => {
  window.location.href = "users.html";
});

////////////////////////////////
// First slider
let scrollAmount = 0;
prevBtn.style.opacity = 0;

nextBtn.addEventListener("click", () => {
  const containerWidth = slidesContainer.offsetWidth;
  const maxScroll = slidesContainer.scrollWidth - containerWidth;

  scrollAmount += containerWidth;

  showBtnPrev(scrollAmount, prevBtn);
  showBtnNext(scrollAmount, maxScroll, nextBtn);

  if (scrollAmount > maxScroll) scrollAmount = maxScroll;

  slidesContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {
  const containerWidth = slidesContainer.offsetWidth;
  const maxScroll = slidesContainer.scrollWidth - containerWidth;

  scrollAmount -= containerWidth;

  showBtnPrev(scrollAmount, prevBtn);
  showBtnNext(scrollAmount, maxScroll, nextBtn);

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  slidesContainer.style.transform = `translateX(-${scrollAmount}px) `;
});

////////////////////////////////
// Second slider
let scrollAmountNew = 0;
prevBtnNew.style.opacity = 0;

nextBtnNew.addEventListener("click", () => {
  const containerWidth = slidesContainerNew.offsetWidth;
  const maxScroll = slidesContainerNew.scrollWidth - containerWidth;

  scrollAmountNew += containerWidth;

  showBtnPrev(scrollAmountNew, prevBtnNew);
  showBtnNext(scrollAmountNew, maxScroll, nextBtnNew);

  if (scrollAmountNew > maxScroll) scrollAmountNew = maxScroll;

  slidesContainerNew.style.transform = `translateX(-${scrollAmountNew}px)`;
});

prevBtnNew.addEventListener("click", () => {
  const containerWidth = slidesContainerNew.offsetWidth;
  const maxScroll = slidesContainerNew.scrollWidth - containerWidth;

  scrollAmountNew -= containerWidth;

  showBtnPrev(scrollAmountNew, prevBtnNew);
  showBtnNext(scrollAmountNew, maxScroll, nextBtnNew);

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
prevBtnMostWatched.style.opacity = 0;

nextBtnMostWatched.addEventListener("click", () => {
  const containerWidth = document.getElementById(
    "slides-most-watched",
  ).offsetWidth;
  const maxScroll = slidesContainerMostWatched.scrollWidth - containerWidth;

  scrollAmountMostWatched += containerWidth;

  showBtnPrev(scrollAmountMostWatched, prevBtnMostWatched);
  showBtnNext(scrollAmountMostWatched, maxScroll, nextBtnMostWatched);

  if (scrollAmountMostWatched > maxScroll) scrollAmountMostWatched = maxScroll;

  slidesContainerMostWatched.style.transform = `translateX(-${scrollAmountMostWatched}px)`;
});

prevBtnMostWatched.addEventListener("click", () => {
  const containerWidth = document.getElementById(
    "slides-most-watched",
  ).offsetWidth;
  const maxScroll = slidesContainerMostWatched.scrollWidth - containerWidth;

  scrollAmountMostWatched -= containerWidth;

  showBtnPrev(scrollAmountMostWatched, prevBtnMostWatched);
  showBtnNext(scrollAmountMostWatched, maxScroll, nextBtnMostWatched);

  if (scrollAmountMostWatched < 0) scrollAmountMostWatched = 0;

  slidesContainerMostWatched.style.transform = `translateX(-${scrollAmountMostWatched}px)`;
});

////////////////////////////////
// Fourth slider
