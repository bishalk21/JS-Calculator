// 1. grab all the buttons as an array
const buts = document.querySelectorAll(".btn-area > div");

// 4. sisplay element to display the result
const displayElm = document.querySelector(".display");

// 6. empty string to store the result
let strToDisplay = "";

// 10. operators array to store the operators
let operators = ["+", "-", "*", "/"];

// 12. 
let lastOperator = "";

// 2.  loop through the buttons
const butsArg = Array.from(buts);
// map the buttons to the functions
butsArg.map((btn) => {
    // 3.  add event listener to each button
    btn.addEventListener("click", () => {
        const text = btn.innerText;
        // 5. innerText to get the text from the button and display it
        displayElm.innerText = text;

        // 11. check if the button is an lastOperator
        if (operators.includes(text)) {
            lastOperator = text;
            const lastChar = strToDisplay[strToDisplay.length - 1];
            if (operators.includes(lastChar)) {
                strToDisplay = strToDisplay.slice(0, -1);
                strToDisplay += text;
                return display(strToDisplay);
            }
        }

        // 12. dot operator to check if the last character is a dot
        if (text === ".") {
            // if (strToDisplay.includes(".")) {
            //     return;
            // }
            if (lastOperator) {
                const operatorIndex = strToDisplay.indexOf(lastOperator);
                const lastNumber = strToDisplay.slice(operatorIndex + 1);
                if (lastNumber.includes(".")) {
                    return;
                }
                if (!lastOperator && strToDisplay.includes(".")) return;
            }
        }

        // 13. AC button to clear the screen and reset the string
        if (text === "AC") {
            strToDisplay = ""
            display();
            return;
        }

        // 14. C button to clear the last character from the string
        if (text === "C") {
            strToDisplay = strToDisplay.slice(0, -1);
            display(strToDisplay);
            return;
        }

        // 15. = button to calculate the result
        if (text === "=") {
            const lastChar = strToDisplay[strToDisplay.length - 1];
            if (operators.includes(lastChar)) {
                strToDisplay = strToDisplay.slice(0, -1);
            }
            const result = eval(strToDisplay);
            strToDisplay = result.toString();
            display(strToDisplay);
            return;
        }

        // 16. lets make operators not clickable when there is no number
        if (strToDisplay === "") {
            if (operators.includes(text)) {
                return;
            }
        }

        // 7. concatenate the string to display with the text from the button
        strToDisplay += text;

        // 9.  display the result on the screen 
        display(strToDisplay);
    })
})

// 8. display function to display the result on the screen 
const display = (str) => {
    displayElm.innerText = str || "0.00";
}