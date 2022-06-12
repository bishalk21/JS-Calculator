// 1. 
const buts = document.querySelectorAll(".btn-area > div");

// 4. 
const displayElm = document.querySelector(".display");

// 6. 
let strToDisplay = "";

// 10. 
let operators = ["+", "-", "*", "/"];

// 12.
let lastOperator = "";

// 2. 
const butsArg = Array.from(buts);
butsArg.map((btn) => {
    // 3. 
    btn.addEventListener("click", () => {
        const text = btn.innerText;
        // 5. 
        displayElm.innerText = text;

        // 11. 
        if (operators.includes(text)) {
            lastOperator = text;
            const lastChar = strToDisplay[strToDisplay.length - 1];
            if (operators.includes(lastChar)) {
                strToDisplay = strToDisplay.slice(0, -1);
                strToDisplay += text;
                return display(strToDisplay);
            }
        }

        // 12. 
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

        // 13. 
        if (text === "AC") {
            strToDisplay = ""
            display();
            return;
        }

        // 14. 
        if (text === "C") {
            strToDisplay = strToDisplay.slice(0, -1);
            display(strToDisplay);
            return;
        }

        // 15. 
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

        // 7. 
        strToDisplay += text;

        // 9. 
        display(strToDisplay);
    })
})

// 8. 
const display = (str) => {
    displayElm.innerText = str || "0.00";
}