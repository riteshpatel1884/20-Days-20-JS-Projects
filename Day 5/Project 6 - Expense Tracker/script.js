const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalExpense = document.getElementById("totalExpense");

let total_expense = 0;
let all_expenses_list = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const titleLowerCase = title.toLowerCase();
  const amount = Number(document.getElementById("amount").value.trim());
  const date = document.getElementById("date").value;
  const category = document.getElementById("choose_category").value;

  const all_lists = {
    expenseTitle: title,
    expenseAmount: amount,
    expenseDate: date,
    expenseCategory: category,
  };

  if (all_expenses_list.some((all_lists) => all_lists.expenseTitle === title)) {
    alert("Expense already exists");
    return;
  }
  console.log(title, amount, date, category);
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("parentDiv");

  const all_expenses = document.createElement("p");
  all_expenses.innerText = `${title} - ₹${amount} - ${date} - ${category}`;

  all_expenses.classList.add("single_expense");

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete_button");

  deleteButton.addEventListener("click", function (e) {
    parentDiv.remove();
    total_expense -= amount;
    totalExpense.innerText = total_expense;
    all_expenses_list = all_expenses_list.filter(
      (all_lists) => all_lists.expenseTitle !== title,
    );
  });

  total_expense += amount;
  totalExpense.innerText = `${total_expense}`;
  expenseList.append(parentDiv);
  parentDiv.append(all_expenses);
  parentDiv.append(deleteButton);
  all_expenses_list.push(all_lists);
});
