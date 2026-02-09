const form = document.getElementById("form");
const studentParent = document.getElementById("studentParent");
const studentDetail = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const rollNo = Number(document.getElementById("rollNo").value.trim());
  const name = document.getElementById("name").value.trim();
  const age = Number(document.getElementById("age").value.trim());
  const course = document.getElementById("course").value.trim();

  if (!rollNo || rollNo < 0) {
    alert("Please enter your roll no");
    return;
  }
  if (!name) {
    alert("Please enter your name");
    return;
  }
  if (!age || age < 0) {
    alert("Please enter your age");
    return; // If we forget to write return then without validating this oneit will printed if we click on submit button. Ex 192, Ritesh,0,""
  }
  if (!course) {
    alert("Please enter a valid course name");
    return;
  }

  // It will check for duplicate roll no.
  // some() is an array method in JavaScript.
  // It is used to check if at least one element in an array satisfies a condition.
  // Because we need to check a property inside each object, so some() is used.
  // includes() works directly when your array contains simple values like:
  // ["apple", "banana", "mango"]
  // [101, 102, 103]
  
  if (studentDetail.some((student) => student.rollNo === rollNo)) {
    alert("Roll number already exists");
    return;
  }

  console.log(rollNo, name, age, course);

  const student = {
    rollNo: rollNo,
    name: name,
    age: age,
    course: course,
  };

  studentDetail.push(student);
  console.log(studentDetail);

  const row = document.createElement("tr");

  row.innerHTML = `
  <td>${rollNo}</td>
  <td>${name}</td>
  <td>${age}</td>
  <td>${course}</td>
  <td><button class="delete-btn">Delete</button></td>
`;

  row.querySelector("button").addEventListener("click", () => {
    row.remove(); // It This removes the row from the UI, but the student still exists in studentDetail so remove it from array using filter method
    studentDetail = studentDetail.filter(
      (student) => student.rollNo !== rollNo,
    );
  });

  studentParent.appendChild(row);
  form.reset();  

});
