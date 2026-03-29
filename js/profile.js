const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const slidesContainer = document.querySelector(".slides");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  // Calculamos cuánto mide el contenedor visible
  const containerWidth = document.querySelector(".slides").offsetWidth;
  const maxScroll = slidesContainer.scrollWidth - containerWidth;

  scrollAmount += containerWidth;

  // Si nos pasamos del final, volvemos al inicio o nos quedamos al límite
  if (scrollAmount > maxScroll) scrollAmount = maxScroll;

  slidesContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {
  const containerWidth = document.querySelector(".slider").offsetWidth;

  scrollAmount -= containerWidth;

  if (scrollAmount < 0) scrollAmount = 0;

  slidesContainer.style.transform = `translateX(-${scrollAmount}px) `;
});
