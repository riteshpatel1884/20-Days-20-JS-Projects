// Explanation also added

let data = []; // Empty array at first. Later this will hold all posts from the API.
let currentPage = 1;
const itemsPerPage = 5;

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
    displayData(); // It will render first page after fetching
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Display paginated data
function displayData() {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Clears old posts before adding new ones. If you skip this, page 2 will stack below page 1 instead of replacing it.

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Page 1:
  // (1 - 1) * 5 = 0
  // startIndex = 0
  // endIndex = 5

  // Page 2:
  // (2 - 1) * 5 = 5
  // startIndex = 5
  // endIndex = 10
  const pageItems = data.slice(startIndex, endIndex);

  pageItems.forEach((post) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <p><b>ID:</b> ${post.id}</p>
    <p><b>User:</b> ${post.userId}</p>
    <p><b>Title:</b> ${post.title}</p>
    <p><b>Body:</b> ${post.body}</p>
    <hr>
  `;

    container.appendChild(div);
  });

  const totalPages = Math.ceil(data.length / itemsPerPage);
  document.getElementById("page-info").textContent =
    ` Page ${currentPage} of ${totalPages} `;
}

// Logic for Next page
function nextPage() {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayData();
  }
}

// logic for Previous page
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayData();
  }
}

fetchData();
