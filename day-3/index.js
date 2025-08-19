// Task 1
var numbers = [1, -5, 2, 9, -2, -8, -15, 20, 29, -11];
var sumPositive = 0, sumNegative = 0;
for (let i = 0; i < numbers.length; i++) { // with continue
    if (numbers[i] > 0) {
        sumPositive += numbers[i];
        continue;
    }
    sumNegative += numbers[i];
}
console.log("Sum of positive numbers:", sumPositive);
console.log("Sum of numbers:", sumPositive + sumNegative);

// var sum = 0;
// for (let i = 0; i < numbers.length; i++) { // without continue
//     if (numbers[i] > 0)
//         sumPositive += numbers[i];
//     sum += numbers[i];
// }
// console.log("Sum of numbers:", sum);

numbers.push(33);
numbers.shift();
console.log("Numbers after adding new number and remove first number:", numbers);

console.log("#".repeat(150));

// Task 2
var student = {
    name: "Mahmoud",
    age: 21,
    grade: "A+",
    isGraduated: false,
};
console.log(`Student: ${student.name} is ${student.age} years old`);
student.grade = "A";
console.log(`Student has properties [${Object.keys(student)}] with values [${Object.values(student)}]`);
student.email = "mahmoud404@mail.com";
delete student.isGraduated;
console.log("Student after adding email and removing isGraduated", student);

console.log("#".repeat(150));

// Task 3
// 1.
var students = [
    {
        name: "Mahmoud",
        age: 21,
        grade: "A+",
        isGraduated: false,
    },
    {
        name: "Ahmed",
        age: 19,
        grade: "A",
        isGraduated: false,
    },
    {
        name: "Ibrahim",
        age: 22,
        grade: "A+",
        isGraduated: true,
    },
    {
        name: "Yasser",
        age: 18,
        grade: "A-",
        isGraduated: false,
    },
];

// 2.
var avgAge = 0, graduatedStudent = 0, unGraduatedStudent = 0;
for (let i = 0; i < students.length; i++) {
    avgAge += students[i].age;
    if (students[i].isGraduated)
        graduatedStudent++;
    else
        unGraduatedStudent++;
}
avgAge = avgAge / students.length;

// 3.
for (let i = 0; i < students.length; i++) {
    console.log(`Student with name "${students[i].name}" has properties [${Object.keys(students[i])}] with values [${Object.values(students[i])}]`);
}

// 4.
students.push({
    name: "Yehia",
    age: 60,
    grade: "A+",
    isGraduated: true,
});
students[students.length - 1].email = "yehia@mail.com";

// 5.
for (const student of students) {
    delete student.isGraduated;
}
console.log("Students after removing isGraduated property:", students);

// 6.
console.log("Students name:", students.map(function (student) {
        return student.name;
    })
);
console.log("The average age of all the students:", avgAge);
console.log(`Number of graduated students: ${graduatedStudent} and ungraduated students: ${unGraduatedStudent}`);