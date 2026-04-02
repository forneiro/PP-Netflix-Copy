// import { USERS } from "./items.mjs";

const cancelEditBtn = document.getElementById("cancel-edit-btn");
const confirmEditBtn = document.getElementById("confirm-edit-btn");

// User info

cancelEditBtn.addEventListener("click", () => {
  window.location.href = "./users.html";
});

localStorage.setItem(
  "users",
  localStorage.getItem("users") ??
    JSON.stringify([{ name: "Usuario 1", icon: "../imgs/icon-1.webp" }]),
);

confirmEditBtn.addEventListener("click", () => {
  const userName = document.getElementById("name").value;
  const userImg = document.getElementById("user__img").getAttribute("src");
  const userCheck = document.getElementById("user__check");

  const USERS = JSON.parse(localStorage.getItem("users"));

  if (!userName || !userImg) return;

  USERS.push({
    name: userName,
    icon: userImg,
  });

  localStorage.setItem("users", JSON.stringify(USERS));

  console.log(USERS);

  console.log(userName, userImg, userCheck);
  window.location.href = "./users.html";
});
