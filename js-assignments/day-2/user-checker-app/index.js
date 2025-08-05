var name = prompt("Enter your name:");
var birthYear = +prompt("Enter your birth year:");
var isStudent = confirm("Are you a student?");

var age = new Date().getFullYear() - birthYear;

var ageCategory;
if (age > 0 && age < 13)
  ageCategory = "Kid";
else if (age >= 13 && age <= 17)
  ageCategory = "Teen";
else if (age >= 18 && age <= 59)
  ageCategory = "Adult";
else
  ageCategory = "Senior";

var res = `Hello ${name}, you are ${age} years old\nCategory: ${ageCategory}`;
if (isStudent)
  res += "\nDon't forget to study hard!";

console.log(res);

window.alert(res)

var div = document.getElementById("app").innerText = res;