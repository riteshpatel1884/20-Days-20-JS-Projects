// const form = document.getElementById("form");
// const details = document.getElementById("details");

// form.addEventListener("submit", function (e) {
//   const username = document.getElementById("username").value;
//   e.preventDefault();

//   console.log(username);
//   let response = fetch(`https://api.github.com/users/${username}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//     const parentDiv = document.createElement('div')
//     parentDiv.classList.add('parentDiv')

//     const allDetails = document.createElement('p')
//     allDetails.classList.add('allDetails');
//     allDetails.innerText = `${response.username}, ${response.avatar_url}, ${response.followers}, ${response.following},${response.id},${response.location},${response.name}`

//     details.append(parentDiv)
//     parentDiv.append(allDetails)

//     console.log(response.username)
//     console.log(response.avatar_url);
// });

// This approach will give undefined details as fetch() is asynchronous. At this point response is a Promise, not the actual user data.
// So this part is wrong: response.username and response.avatar_url. Those fields don’t exist on a Promise.
// You’re creating DOM elements before data arrives. Your code tries to use response.username immediately, but the API result only arrives later inside .then().

// Correct approach
const form = document.getElementById("form");
const detailsContainer = document.getElementById("userData");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;

  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => {
      detailsContainer.innerHTML = ""; 

      // 1. Handle Avatar First and Center it
      if (data.avatar_url) {
        const img = document.createElement("img");
        img.src = data.avatar_url;
        img.width = 150;
        detailsContainer.appendChild(img);
      }

      // 2. Define only the keys we want to show for a cleaner UI
      const keysToShow = [
        "name",
        "id",
        "url",
        "login",
        "bio",
        "location",
        "followers",
        "following",
        "public_repos",
        "created_at",
        "updated_at",
        "company"    
      ];

      keysToShow.forEach(key => {
        if (data[key]) {   // if it exists then onloy show that field else don't show
          const row = document.createElement("p");
          row.innerHTML = `<strong>${key.replace('_', ' ')}</strong> <span>${data[key]}</span>`;
          detailsContainer.appendChild(row);
        }
      });
    })
    .catch((err) => console.log(err));
  form.reset();
});
