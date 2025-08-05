// 1. Gather employee data
var name = prompt("Enter your name:");
var age = prompt("Enter your age:");
var yearsOfExperience = +prompt("Enter your years of experience:");
var rate = +prompt("How do you rate yourself from 1 to 10?");
var salary = +prompt("What is your salary?");

var employee = {
  name: name,
  age: age,
  yearsOfExperience: yearsOfExperience,
  rate: rate,
  salary: salary,
};

// 2. Determine job category
var  jobCategory;
if (yearsOfExperience >= 0 && yearsOfExperience < 2)
  jobCategory = "Junior";
else if (yearsOfExperience >= 2 && yearsOfExperience < 5)
  jobCategory = "Mid-Leve";
else if (yearsOfExperience >= 5 && yearsOfExperience <= 10)
  jobCategory = "Senior";
else if (yearsOfExperience > 10)
  jobCategory = "Expert";
else
  console.log("Invalid input. years of experience should not less than 0");

employee.jobCategory = jobCategory;

// 3. Check performance level
var performanceLevel;
switch (+rate) {
  case 10:
  case 9:
    performanceLevel = "Excellent";
    break
  case 8:
  case 7:
    performanceLevel = "Good";
    break
  case 6:
  case 5:
    performanceLevel = "Average";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
    performanceLevel = "Needs Improvement";
    break;
  default:
    console.log("Invalid input. The rate should not less than 0 or geater than 10");
}

employee.performanceLevel = performanceLevel;

// 4. Salary calculation
var finalSalary;
if (yearsOfExperience >= 0 && yearsOfExperience <= 2)
  finalSalary = salary + (salary * 0.1);
else if (yearsOfExperience >= 3 && yearsOfExperience <= 5)
  finalSalary = salary + (salary * 0.15);
else if (yearsOfExperience > 5)
  finalSalary = salary + (salary * 0.2);

employee.finalSalary = finalSalary

// 5. Work shift time calculation
var currentHour = new Date().getHours();
var shift;
if (currentHour >= 9 && currentHour <= 18)
  shift = "Day shift";
else if (currentHour > 18 && currentHour <= 21)
  shift = "Night shift";

employee.shift = shift;

console.log("Employee data:", employee);
window.alert("Employee data: " + JSON.stringify(employee));

var employeeData = document.getElementById("employee-data");
var employeeRow = document.createElement("tr");
var employeeKeys = Object.keys(employee);
for (let i = 0; i < employeeKeys.length; i++) {
  var td = document.createElement("td");
  td.textContent = employee[employeeKeys[i]];
  employeeRow.appendChild(td);
}
employeeData.appendChild(employeeRow);
