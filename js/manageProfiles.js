const usersContainer = document.getElementById("users-container");

let USERS = JSON.parse(localStorage.getItem("users")) || [];

console.log(USERS);

localStorage.removeItem;

const renderUser = () => {
  usersContainer.innerHTML = "";

  USERS.forEach((user, index) => {
    const userEl = `
      <section class="manage-users__user">
          <div class="manage-users__icon">
              <img src="${user.icon}" alt="" />
          </div>
          <h3 class="manage-users__name">${user.name}</h3>
          <button class="manage-users__eliminate" data-index="${index}">X</button>
      </section>
      `;

    usersContainer.insertAdjacentHTML("beforeend", userEl);
  });

  const btns = document.querySelectorAll(".manage-users__eliminate");

  btns.forEach((btn) => {
    btn.addEventListener("click", deleteUser);
  });
};

const deleteUser = (e) => {
  const index = e.target.getAttribute("data-index");

  USERS.splice(index, 1);

  localStorage.setItem("users", JSON.stringify(USERS));

  renderUser();
};

renderUser();
