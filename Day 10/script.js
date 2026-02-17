const generateBtn = document.getElementById("generateBtn");

const profileImage = document.getElementById("profileImage");
const profileName = document.getElementById("profileName");
const profileRole = document.getElementById("profileRole");
const profileBio = document.getElementById("profileBio");

generateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("nameInput").value;
  const roleInput = document.getElementById("roleInput").value;
  const bioInput = document.getElementById("bioInput").value;
  const imageInput = document.getElementById("imageInput").files[0];

  const name = document.getElementById("name");
  const role = document.getElementById("role");
  const bio = document.getElementById("bio");
  const imageWrapper = document.getElementById("imageWrapper");
  const emptyState = document.getElementById("emptyState");
  const profileCard = document.getElementById("profileCard");

  console.log(nameInput, roleInput, bioInput, imageInput);

  if (!nameInput) {
    alert("Please Enter your name");
    return;
  }
  if (!roleInput) {
    alert("Please Enter your role");
    return;
  }
  if (!bioInput) {
    alert("Please Enter your bio");
    return;
  }

  emptyState.style.display = "none";
  profileCard.style.display = "flex";

  if (imageInput) {
    const imageURL = URL.createObjectURL(imageInput);
    profileImage.src = imageURL;
    imageWrapper.style.display = "block";
  } else {
    imageWrapper.style.display = "none";
  }

  name.style.display = "block";
  profileName.innerText = nameInput;

  role.style.display = "block";
  profileRole.innerText = roleInput;

  bio.style.display = "block";
  profileBio.innerText = bioInput;
});
