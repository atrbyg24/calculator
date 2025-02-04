let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function validOperation() {
    return (firstNumber !== "") && (secondNumber !== "") && (operator !== "");
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
    let display = document.querySelector(".display");
    display.textContent = (result === "") ? (firstNumber + operator + secondNumber).slice(0,9): (result + operator + secondNumber).slice(0,9);
}

function operate() {
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    if (operator == "+") {
        return Math.round(add(a,b) * 100000)/ 100000;
    } else if (operator == "-") {
        return Math.round(subtract(a,b) * 100000)/ 100000;
    } else if (operator == "*") {
        return Math.round(multiply(a,b) * 100000)/ 100000;
    } else {
        return Math.round(divide(a,b) * 100000)/ 100000;
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
    } else if (target.id === "AC") {
        clear();
    } else if (target.id === "plusminus") {
        if (secondNumber !== "") {
            secondNumber = parseFloat(secondNumber) * -1;
        }
        if (operator === "" && firstNumber !== "") {
            firstNumber = parseFloat(firstNumber) * -1;
        }
    } else if (target.id === "add") {
        if (firstNumber !== "" && operator === "") {
            operator = "+";
        } else {
            if (validOperation()) {
                result = operate();
                firstNumber = result;
                operator = "+";
                secondNumber = "";
            }
        }
    } else if (target.id === "subtract") {
        if (firstNumber !== "" && operator === "") {
            operator = "-";
        } else {
            if (validOperation()) {
                result = operate();
                firstNumber = result;
                operator = "+";
                secondNumber = "";
            }
        }
    } else if (target.id === "multiply") {
        if (firstNumber !== "" && operator ===  "") {
            operator = "*";
        } else {
            if (validOperation()) {
                result = operate();
                firstNumber = result;
                operator = "+";
                secondNumber = "";
            }
        }
    } else if (target.id === "divide") {
        if (firstNumber !== "" && operator === "") {
            operator = "/";
        } else {
            if (validOperation()) {
                result = operate();
                firstNumber = result;
                operator = "+";
                secondNumber = "";
            }
        }
    } else if (target.id === "delete") {
        if (secondNumber !== "") {
            secondNumber = secondNumber.slice(0,-1);
        }
        if (secondNumber === "" && operator !== "") {
            operator = "";
        }
        if (secondNumber === "" && operator === "" && firstNumber !== "") {
            firstNumber = firstNumber.slice(0,-1);
        }
    } else if (target.id === "decimal") {
        if (firstNumber === "") {
            firstNumber = "0.";
        }
        if (firstNumber !== "" && operator === "" && secondNumber === "") {
            if (!(firstNumber.includes("."))) {
                firstNumber += ".";
            }
        }
        if (!(firstNumber === "") && !(operator === "")) {
            if (secondNumber === "") {
                secondNumber = "0.";
            }
            if (secondNumber !== "" && !(secondNumber.includes("."))) {
                secondNumber += ".";
            }
        }
    } else if (target.id === "equals") {
        if (validOperation()) {
            result = operate();
            firstNumber = result;
            operator = "";
            secondNumber = "";
        }
    }
    if (!isFinite(result)) {
        alert("Divide by zero error");
        clear();
    }
    populateDisplay();
})