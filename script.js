let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function validOperation() {
    return (firstNumber !== "") && (secondNumber !== "") && (operator !== null);
}

function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a/b;
};

function populateDisplay() {
    let smallDisplay = document.querySelector(".small-display");
    let largeDisplay = document.querySelector(".large-display");
    smallDisplay.textContent = (result === "") ? "" : firstNumber + operator;
    largeDisplay.textContent = (result === "") ? firstNumber + operator: result;
}

function operate() {
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    a = firstNumberSign ? a : a * -1;
    b = secondNumberSign ? b : b * -1;
    if (operator == "+") {
        return add(a,b);
    } else if (operator == "-") {
        return subtract(a,b);
    } else if (operator == "*") {
        return multiply(a,b);
    } else {
        return divide(a,b);
    }
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
}

let btns = document.querySelector(".buttons-container");

btns.addEventListener("click", (event) => {
    let target = event.target;
    let numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    if (numbers.includes(target.id)) {
        if (operator === "") {
            firstNumber += numbers.indexOf(target.id);
        } else {
            secondNumber += numbers.indexOf(target.id);
        }
        populateDisplay();
    } else if (target.id === "AC") {
        clear();
        populateDisplay();
    } else if (target.id === "plusminus") {

    } else if (target.id === "add") {

    } else if (target.id === "subtract") {

    } else if (target.id === "multiply") {

    } else if (target.id === "divide") {

    } else if (target.id === "delete") {

        populateDisplay();
    } else if (target.id === "decimal") {
        if (firstNumber === "") {
            firstNumber = "0.";
        }
        if (!(firstNumber === "") && operator === "" && secondNumber === "") {
            if (!(firstNumber.includes("."))) {
                firstNumber += ".";
            }
        }
        if (!(firstNumber === "") && !(operator === "")) {
            if (secondNumber === "") {
                secondNumber = "0.";
            }
            if (!(secondNumber === "") && !(secondNumber.includes("."))) {
                secondNumber += ".";
            }
        }
        populateDisplay();
    } else if (target.id === "equals") {

    }
})