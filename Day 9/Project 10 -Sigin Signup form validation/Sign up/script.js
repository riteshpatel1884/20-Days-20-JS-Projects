const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const signupBtn = document.getElementById("signup-btn");

// error spans
const nameError = document.getElementById("name-error");
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

signupBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  let isValid = true;

  // clear previous errors
  nameError.innerText = "";
  usernameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  confirmPasswordError.innerText = "";

  // validation
  if (name === "") {
    nameError.innerText = "Name is required";
    isValid = false;
  }

  if (username === "") {
    usernameError.innerText = "Username is required";
    isValid = false;
  }

  if (email === "") {
    emailError.innerText = "Email is required";
    isValid = false;
  }

  if (password === "") {
    passwordError.innerText = "Password is required";
    isValid = false;
  }

  if (confirmPassword === "") {
    confirmPasswordError.innerText = "Confirm your password";
    isValid = false;
  }

  if (password !== confirmPassword) {
    confirmPasswordError.innerText = "Passwords do not match";
    isValid = false;
  }

  if (!isValid) return;

  // create user object
  const userData = {
    name,
    username,
    email,
    password,
  };

  // store in localStorage
  localStorage.setItem("user", JSON.stringify(userData));

  alert("Signup successful");

  // optional: redirect to signin page
  window.location.href = "../Sign in/signin.html";
});
