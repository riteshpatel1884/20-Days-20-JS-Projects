// const form = document.getElementById("form");
// const add = document.getElementById("add");
// const show = document.getElementById("show");
// const subtotal_span = document.getElementById("subtotal_span");
// const total_span = document.getElementById("total_span");
// const tax = document.getElementById("tax");

// let subtotal = 0;
// let total = 0;

// let allItems = [];
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const name = document.getElementById("name").value.trim();
//   const qty = Number(document.getElementById("qty").value.trim());
//   let amt = Number(document.getElementById("amt").value.trim());

//   let all_items = {
//     itemName: name,
//     itemQty: qty,
//     itemAmt: amt,
//   };
//   console.log(name, qty, amt);

//   const parentDiv = document.createElement("div");
//   parentDiv.classList.add("parentDiv");

//   const items = document.createElement("p");
//   items.classList.add("items");
//   items.innerText = `${name}, ${qty}, ${amt}`;

//   const deleteButton = document.createElement("button");
//   deleteButton.classList.add("delete");
//   deleteButton.innerText = "Delete";

//   let tax = 0.18 * amt;
//   amt = qty * amt;
//   deleteButton.addEventListener("click", function (e) {
//     parentDiv.remove();
//     subtotal -= amt;
//     subtotal_span.innerText = subtotal;

//     total -= tax + subtotal;
//     total_span.innerText = total;

//     allItems = allItems.filter((all_items) => all_items.itemName !== name);
//   });

//   subtotal += amt;
//   subtotal_span.innerText = subtotal;

//   total = total + subtotal + tax;
//   total_span.innerText = total;

//   show.append(parentDiv);
//   parentDiv.append(items);
//   parentDiv.append(deleteButton);

//   allItems.push(all_items);
// });
// Wrong logic it will show total as 336 instead of 236 if 2nd item is added
// I am adding: previous total, entire subtotal again and tax
// So every time you add an item, subtotal gets counted multiple times. That’s why the number jumps to something like 336 instead of 236.
// correction:

const form = document.getElementById("form");
const add = document.getElementById("add");
const show = document.getElementById("show");
const subtotal_span = document.getElementById("subtotal_span");
const total_span = document.getElementById("total_span");
const tax = document.getElementById("tax");
const tax_span = document.getElementById("tax_span");

let subtotal = 0;
let total = 0;

let allItems = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const qty = Number(document.getElementById("qty").value.trim());
  let amt = Number(document.getElementById("amt").value.trim());

  let all_items = {
    itemName: name,
    itemQty: qty,
    itemAmt: amt,
  };
  console.log(name, qty, amt);

  if (!name) {
    alert("Please enter a valid item name");
    return;
  }
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("parentDiv");

  const items = document.createElement("p");
  items.classList.add("items");
  items.innerText = `${name}, ${qty}, ${amt}`;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerText = "Delete";

  amt = qty * amt;

  deleteButton.addEventListener("click", function (e) {
    parentDiv.remove();
    subtotal -= amt;
    subtotal_span.innerText = subtotal;

    let taxAmount = subtotal * 0.18;
    tax_span.innerText = taxAmount.toFixed(2);
    total = subtotal + taxAmount;
    total_span.innerText = total.toFixed(2);

    allItems = allItems.filter((all_items) => all_items.itemName !== name);
  });

  subtotal += amt;
  subtotal_span.innerText = subtotal;

  let taxAmount = subtotal * 0.18;
  tax_span.innerText = taxAmount.toFixed(2);
  total = subtotal + taxAmount;
  total_span.innerText = total.toFixed(2);

  show.append(parentDiv);
  parentDiv.append(items);
  parentDiv.append(deleteButton);

  allItems.push(all_items);
});
