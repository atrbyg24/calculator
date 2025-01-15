let firstNumber = "";
let secondNumber = "";
let operator = null;
let firstNumberSign = true;
let secondNumberSign = true;

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
    let a = firstNumberSign ? a : a * -1;
    largeDisplay.textContent = a + operator;
}

function operate() {
    if (validOperation()) {
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
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = null;
    firstNumberSign = true;
    secondNumberSign = true;
}

let btns = document.querySelector(".buttons-container");

btns.addEventListener("click", (event) => {
    let target = event.target;
    let numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    if (target.id in numbers) {
        if (operator === null) {
            firstNumber += numbers.indexOf(target.id);
            populateDisplay();
        } else {
            secondNumber += numbers.indexOf(target.id);
            populateDisplay();
        }
    } else if (target.id === "AC") {
        clear();
    } else if (target.id === "plusminus") {
        if (operator === null) {
            if (firstNumber !== null) {
                firstNumber = String(parseFloat(firstNumber) * -1);
            }
        }
    }
})