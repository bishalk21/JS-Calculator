# Calculator using Vanilla JavaScript

Live: https://bishalk21.github.io/JS-Calculator/

This project is a calculator built with Vanilla JavaScript. It demonstrates how core JavaScript concepts can be combined with DOM manipulation, event handling, and expression evaluation to create an interactive web application. The calculator accepts user input through buttons, builds mathematical expressions dynamically, and displays results in a clear and responsive way.

The project starts with JavaScript fundamentals such as variables, data types, functions, scope, and conditional statements. These concepts are used throughout the application to store calculator state, process input, and control how the calculator behaves in different situations. Both function declarations and arrow functions can be used to organize the logic in a clean and readable way.

DOM manipulation is an important part of the implementation. Elements are selected with `document.querySelector()` and `document.querySelectorAll()`, while `textContent` is used to update the calculator display. Since `querySelectorAll()` returns a `NodeList`, it can be converted into an array with `Array.from()` when array methods are needed.

Event handling is used to make the calculator interactive. Each button listens for click events through `addEventListener()`, and the value of the clicked button is read from `textContent`. This allows the calculator to respond to numbers, operators, and control actions such as clear or delete.

Arrays and strings are heavily used to manage input and expressions. Array methods like `forEach()`, `includes()`, and `length` help process groups of buttons and inspect values. String methods such as `slice()`, `includes()`, `lastIndexOf()`, and string indexing make it possible to append characters, remove the last input, and prevent invalid expressions.

The calculator logic focuses on building and evaluating mathematical expressions. It supports displaying user input, appending numbers and operators, replacing consecutive operators, clearing the display, deleting the last character, and preventing multiple decimal points in the same number. It also handles decimal formatting such as `0.` so the user experience remains smooth and predictable.

Number handling is done with methods like `parseFloat()` and `toFixed()`, which help convert and format values before displaying them. The calculator supports the basic arithmetic operations: addition, subtraction, multiplication, and division. These operations are combined to evaluate full expressions and show the final result on the screen.

Error handling is included to keep the application reliable. A `try...catch` block is used to manage invalid mathematical expressions and display user-friendly error messages instead of breaking the app. The project may also use built-in JavaScript features like `Math.max()` and the `Function()` constructor for dynamic expression evaluation.

## Skills Gained

- DOM manipulation
- Event-driven programming
- String manipulation
- Array operations
- Input validation
- Calculator state management
- Expression parsing
- Dynamic expression evaluation
- Number formatting
- Error handling
- Building an interactive web application with Vanilla JavaScript