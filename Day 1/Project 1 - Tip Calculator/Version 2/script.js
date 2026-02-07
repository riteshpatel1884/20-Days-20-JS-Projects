// const form = document.getElementById('form')
// const bill_amt = parseInt(document.getElementById("bill_amount").value);
// const tip_percentage = parseInt(
//   document.getElementById("tip_percentage").value,
// );
// const total_person = parseInt(document.getElementById("total_person").value);

// form.addEventListener("submit", function (e){
//   e.preventDefault();
//   console.log(bill_amt); // NAN
//   console.log(tip_percentage); // NAN
//   console.log(total_person); // NAN
// })

// If we pass take the input value outside the submit fctn then it will show input as NAN so take the input values inside the fucntion

// Version 1

// const form = document.getElementById("form");

// form.addEventListener("submit", function (e) {
//   const bill_amt = parseInt(document.getElementById("bill_amount").value);
//   const tip_percentage = parseInt(
//     document.getElementById("tip_percentage").value,
//   );
//   const total_person = parseInt(document.getElementById("total_person").value);

//   e.preventDefault();
//   console.log(bill_amt); // NAN
//   console.log(tip_percentage); // NAN
//   console.log(total_person); // NAN

//   const total_tip = bill_amt * tip_percentage/100;
//   const total_bill = total_tip + bill_amt;
//   const tip_per_person = total_bill / total_person;

//   const show_bill_per_person = document.getElementById("per_person");
//   const show_total_tip = document.getElementById("total_tip");
//   const show_total_bill = document.getElementById("total_bill");

//   show_bill_per_person.innerHTML = `<span>${tip_per_person}</span>`;
//   show_total_tip.innerHTML = `<span>${total_tip}</span>`;
//   show_total_bill.innerHTML = `<span>${total_bill}</span>`;

//   // Handling edge cases
//   // If users has not input any value
//   if(bill_amt === " " || tip_percentage === " " || total_person===" ")
//   {}
// });

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  const bill_amt = parseInt(document.getElementById("bill_amount").value);
  const tip_percentage = parseInt(
    document.getElementById("tip_percentage").value,
  );
  const total_person = parseInt(document.getElementById("total_person").value);

  e.preventDefault();
  console.log(bill_amt); // NAN
  console.log(tip_percentage); // NAN
  console.log(total_person); // NAN

  const total_tip = (bill_amt * tip_percentage) / 100;
  const total_bill = total_tip + bill_amt;
  const tip_per_person = total_bill / total_person;

  const show_bill_per_person = document.getElementById("per_person");
  const show_total_tip = document.getElementById("total_tip");
  const show_total_bill = document.getElementById("total_bill");

  show_bill_per_person.innerHTML = `<span>${tip_per_person}</span>`;
  show_total_tip.innerHTML = `<span>${total_tip}</span>`;
  show_total_bill.innerHTML = `<span>${total_bill}</span>`;

  // Handling edge cases
  // If users has not input any value
  if (bill_amt === " " || tip_percentage === " " || total_person === " ") {
  }
});
