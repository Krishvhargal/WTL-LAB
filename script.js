const display = document.getElementById('display');

// 1. Initial Greeting with Prompt
window.onload = () => {
    const userName = prompt("Welcome! What is your name?");
    if (userName) {
        alert(`Hi ${userName}, let's do some math!`);
    }
};

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

// 2. Validation and Calculation
function calculateResult() {
    const expression = display.value;
    
    // Check if display is empty
    if (!expression) {
        alert("Error: Please enter a calculation first!");
        return;
    }

    try {
        // Validation: Division by zero check
        if (expression.includes('/0')) {
            alert("Math Error: Division by zero is not allowed.");
            clearDisplay();
            return;
        }

        const result = eval(expression); // Standard calculation
        display.value = result;
    } catch (error) {
        // Validation: Catch invalid syntax (e.g., "5++5")
        alert("Invalid Input: Please check your syntax.");
        clearDisplay();
    }
}

// 3. Square Function
function calculateSquare() {
    const val = parseFloat(display.value);
    if (isNaN(val)) {
        alert("Please enter a valid number first.");
    } else {
        display.value = val * val;
    }
}