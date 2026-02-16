const emailInput = document.getElementById("signinUserNameEmail");
const passwordInput = document.getElementById("signin-password");
const signinBtn = document.getElementById("signin-btn");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

signinBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  emailError.innerText = "";
  passwordError.innerText = "";

  // validation
  if (email === "") {
    emailError.innerText = "Please enter username or email";
    return;
  }

  if (password === "") {
    passwordError.innerText = "Please enter password";
    return;
  }

  // get stored user
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // validate credentials
  if (
    (email === storedUser.email || email === storedUser.username) &&
    password === storedUser.password
  ) {
    alert("Login successful");
  } else {
    alert("No account found. Please sign up first.");
    return;
  }
});
