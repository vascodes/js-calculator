const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");
const allClearButton = document.querySelector('#btn-all-clear');
const deleteButton = document.querySelector('#btn-delete');
const equalsButton = document.querySelector('.btn-equals');

// Add click event to number buttons.
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
    })
});

// Add click event to operand buttons.
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
    })
});