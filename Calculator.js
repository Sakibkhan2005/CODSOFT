// Get elements
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");
const equalsBtn = document.getElementById("equals");

// Add event listeners to number buttons
const numberButtons = document.querySelectorAll(".btn:not(#clear, #backspace, #equals)");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.innerText === "0") {
            display.innerText = button.innerText;
        } else {
            display.innerText += button.innerText;
        }
    });
});

// Add event listener to clear button
clearBtn.addEventListener("click", () => {
    display.innerText = "0";
});

// Add event listener to backspace button
backspaceBtn.addEventListener("click", () => {
    display.innerText = display.innerText.slice(0, -1);
});

// Add event listener to equals button
equalsBtn.addEventListener("click", () => {
    try {
        display.innerText = eval(display.innerText).toString();
    } catch (error) {
        display.innerText = "Error";
    }
});
