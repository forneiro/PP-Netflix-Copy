import { USERS } from "./items.mjs";

const addProfileBtn = document.getElementById("add-profile__btn");
const addProfile = document.getElementById("add-profile");
const users = document.getElementById("users");

addProfileBtn.addEventListener("click", () => {
  window.location.href = "./addPerfil.html";
});

localStorage.setItem(
  "users",
  localStorage.getItem("users") ??
    JSON.stringify([{ name: "Usuario 1", icon: "../imgs/icon-1.webp" }]),
);

const USERS__SAVES = JSON.parse(localStorage.getItem("users"));

if (USERS__SAVES.length > 0) {
  USERS__SAVES.forEach((el) => {
    const newHtml = `
    <article class="user">
      <div class="user__photo">
        <a href="profile.html">
          <img src="${el.icon}" alt="User profile" />
        </a>
      </div>
      <h3 class="user__title">${el.name}</h3>
    </article>
    `;

    users.insertAdjacentHTML("afterbegin", newHtml);
  });
}

if (USERS__SAVES.length >= 5) {
  addProfile.classList.add("hide");
  addProfile.classList.remove("users__add-user");
}
console.log(USERS__SAVES.length);
