const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn-area > div");

const btnsArray = Array.from(buttons);
let displayValue = "";

let operators = ["+", "-", "*", "/"];
let lastOperator = "";

const displayResult = (displayValue) => {
  display.textContent = displayValue || "0.00";
};

btnsArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnValue = button.textContent;

    if (btnValue === "AC") {
      displayValue = "";
      displayResult(displayValue);
      return;
    }

    if (btnValue === "C") {
      displayValue = displayValue.slice(0, -1);
      displayResult(displayValue);
      return;
    }

    if (operators.includes(btnValue)) {
      const lastChar = displayValue[displayValue.length - 1];
      if (operators.includes(lastChar)) {
        displayValue = displayValue.slice(0, -1);
      }
      displayValue += btnValue;
      lastOperator = btnValue;
      displayResult(displayValue);
      return;
    }

    if (btnValue === ".") {
      if (lastOperator) {
        const lastOperatorIndex = displayValue.lastIndexOf(lastOperator);
        const lastNumber = displayValue.slice(lastOperatorIndex + 1);
        if (lastNumber.includes(".")) {
          return;
        }
      } else if (displayValue.includes(".")) {
        return;
      }
      if (
        displayValue === "" ||
        operators.includes(displayValue[displayValue.length - 1])
      ) {
        displayValue += "0";
      }
    }

    if (btnValue === "=") {
      try {
        displayValue = evaluate(displayValue);
      } catch (error) {
        displayValue = "Invalid expression";
      }
      displayResult(displayValue);
      return;
    }

    displayValue += btnValue;
    displayResult(displayValue);
  });
});

const evaluate = (expression) => {
  let result;
  try {
    result = new Function(`return ${expression}`)();
  } catch (error) {
    throw new Error("Invalid expression");
  }
  return parseFloat(result.toFixed(10));
};
