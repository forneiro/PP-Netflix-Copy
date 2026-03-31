const submitLogin = document.getElementById("submit-login");
const loginErrorMessage = document.getElementById("login-error-message");
const emailInput = document.getElementById("email");

const isValidEmail = function (email) {
  return email.includes("@") && email.length > 3 && email.includes(".");
};

const addErrorMessage = function () {
  loginErrorMessage.classList.remove("hide");
  loginErrorMessage.classList.add("loginErrorMessage");
  emailInput.style.border = "1px solid var(--error)";
};

submitLogin.addEventListener("click", (e) => {
  e.preventDefault();

  const emailInputValue = document.getElementById("email").value.trim();

  if (!isValidEmail(emailInputValue)) {
    addErrorMessage();
    return;
  }

  window.location.href = "./users.html";
});

emailInput.addEventListener("focus", () => {
  loginErrorMessage.classList.add("hide");
  emailInput.style.border = "1px solid var(--footer-copyright)";
});

emailInput.addEventListener("blur", () => {
  const emailInputValue = document.getElementById("email").value.trim();
  if (!isValidEmail(emailInputValue)) {
    addErrorMessage();
  }
});
