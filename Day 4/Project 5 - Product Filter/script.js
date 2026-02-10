const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "Shirt", category: "Clothing", price: 1200 },
  { id: 4, name: "Shoes", category: "Clothing", price: 3000 },
  { id: 5, name: "Notebook", category: "Stationery", price: 50 },
  { id: 6, name: "Pen", category: "Stationery", price: 20 },
];


const productContainer = document.getElementById("products");

function renderProducts(productList) {
  productContainer.innerHTML = "";

  productList.forEach((product) => {
    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
    `;

    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.borderRadius = "8px";

    productContainer.appendChild(card);
  });
}

renderProducts(products);    // Show all products initially

const select = document.getElementById("all_products");

select.addEventListener("change", function () {
  const value = this.value;

  const filteredProducts =
    value === "all" ? products : products.filter((product) => product.category === value);
// Note: 
// filter() loops through this array automatically.
// For each item in products, JavaScript takes one object passes it into the function 
// So internally it behaves like this:
// iteration 1
// product = { id: 1, name: "Laptop", category: "Electronics", price: 50000 }
// // iteration 2
// product = { id: 2, name: "Headphones", category: "Electronics", price: 2000 }
// // iteration 3
// product = { id: 3, name: "Shirt", category: "Clothing", price: 1200 }


// you named that object product
// If the user selects "all"
// → filteredProducts = products
// → Every product is shown.
// Otherwise
// → filter() keeps only those products where
// product.category === value
// So if value is "Electronics", the result will be: Laptop and Headphones
// Only matching items are shown.

  renderProducts(filteredProducts);
});


