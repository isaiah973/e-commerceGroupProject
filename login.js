const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-btn");
const createButton = document.getElementById("create-btn");
const errorMessageEmail = document.getElementById("emailErrMsg");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

loginButton.addEventListener("click", () => {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const validateEmail = emailPattern.test(emailValue);
    if(validateEmail === false) {
      errorMessageEmail.innerHTML = "Enter a valid email";
    };

});