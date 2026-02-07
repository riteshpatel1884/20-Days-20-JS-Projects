const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  const bill_amt = parseFloat(document.getElementById("bill_amount").value);
  const tip_percentage = parseFloat(
    document.getElementById("tip_percentage").value,
  );
  const total_person = parseInt(document.getElementById("total_person").value);
  const resultBox = document.getElementById("result");
  const error_bill = document.getElementById("error_bill");
  const error_tip = document.getElementById("error_tip");
  const error_person = document.getElementById("error_person");
  
  e.preventDefault();
  console.log(bill_amt); // NAN
  console.log(tip_percentage); // NAN
  console.log(total_person); // NAN

  // Handling edge cases
  // If users has not input any value
  // bill_amt===" " || tip_percentage === " " || total_person === " " It will not work because these are numbers, not strings.
  
 if (isNaN(bill_amt) || bill_amt <= 0) {
   resultBox.style.display = "none";

   error_bill.style.display = "block";
   error_bill.innerHTML =
     '<span style="color:red;">Please enter bill amount</span>';

   return;
 } else {
   error_bill.style.display = "none";
 }
  if (isNaN(tip_percentage) || tip_percentage <= 0) {
    resultBox.style.display = "none";

    error_tip.style.display = "block";
    error_tip.innerHTML =
      '<span style="color:red;">Please enter tip percentage</span>';

    return;
  } else {
    error_tip.style.display = "none";
  }
  if (isNaN(total_person) || total_person <= 0) {
    resultBox.style.display = "none";

    error_person.style.display = "block";
    error_person.innerHTML =
      '<span style="color:red;">Please enter total person</span>';

    return;
  } else {
    error_person.style.display = "none";
  }
  
    resultBox.style.display = "block";
  

  const total_tip = ((bill_amt * tip_percentage) / 100.0);
  const total_bill = (total_tip + bill_amt);
  const bill_per_person = (total_bill / total_person);

  const show_bill_per_person = document.getElementById("per_person");
  const show_total_tip = document.getElementById("total_tip");
  const show_total_bill = document.getElementById("total_bill");

  show_bill_per_person.innerText = `${bill_per_person.toFixed(2)}`;
  show_total_tip.innerText = `${total_tip.toFixed(2)}`;
  show_total_bill.innerText = `${total_bill.toFixed(2)}`;
});









