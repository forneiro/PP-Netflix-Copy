const chooseImgContainer = document.getElementById("imgs-container");

// Generate imgs
for (let i = 1; i < 10; i++) {
  const newHtml = `
        <img src='../imgs/icon-${i}.webp' alt='Icon' class='imgs-container__img' />
    `;
  chooseImgContainer.insertAdjacentHTML("afterbegin", newHtml);
}

chooseImgContainer.addEventListener("click", (e) => {
  const itemTarget = e.target;
  if (!itemTarget.classList.contains("imgs-container__img")) return;
  console.log(itemTarget);
});
