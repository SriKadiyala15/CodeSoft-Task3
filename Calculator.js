// Select the display input and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Initialize an empty string to store the current input
let currentInput = '';

// Function to update the display with the current input
function updateDisplay(value) {
    display.value = value;
}

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        // Handle clear button
        if (button.id === 'clear') {
            currentInput = '';
            updateDisplay('');
        } 
        // Handle equals button
        else if (value === '=') {
            try {
                // Evaluate the current input as a mathematical expression
                currentInput = eval(currentInput).toString();
                updateDisplay(currentInput);
            } catch {
                updateDisplay('Error');
                currentInput = '';
            }
        } 
        // Handle all other buttons (numbers, operators, decimal)
        else {
            currentInput += value;
            updateDisplay(currentInput);
        }
    });
});
