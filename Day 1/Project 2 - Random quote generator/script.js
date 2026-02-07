const generate = document.getElementById("generate");
const show = document.getElementById("display");

generate.addEventListener("click", function (e) {
  fetch("https://dummyjson.com/quotes")
    .then((res) => res.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.quotes.length);
      show.innerText = data.quotes[randomIndex].quote;
    });
});
