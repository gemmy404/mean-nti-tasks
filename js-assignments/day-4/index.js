// Task 1
// 1.
function multiply(num1, num2) {
    return num1 * num2;
}

// 2.
function calculate(num1, num2, mul) {
    return mul(num1, num2);
}

// 3.
function displayResult(result) {
    console.log("Result:", result);
}

// 4.
var result = calculate(2, 5, multiply);
displayResult(result);

// Task 2
// 1.
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(greetUser, 3000, "Mahmoud");

// 2.
var counter = 10;

function countdown() {
    console.log("Counter:", counter);
    counter--;
    if (counter === 0) {
        clearInterval(intervalId)
        console.log("Time's up!");
    }
}

var intervalId = setInterval(countdown, 1000);

// 3.
// function countdown() {
//     console.log("Counter:", counter);
//     counter--;
//     if (counter === 5) {
//         clearInterval(intervalId)
//         console.log("Time's up!");
//     }
// }
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Time's up!");
}, 5000);

// 4.
var idTimeout = setTimeout(() => {
    console.log("This will be cleared!");
}, 5000);

clearTimeout(idTimeout);
