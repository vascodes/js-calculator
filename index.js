// HTML Elements.
const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");
const allClearButton = document.querySelector("#btn-all-clear");
const deleteButton = document.querySelector("#btn-delete");
const equalsButton = document.querySelector("#btn-equals");
const displayElement = document.querySelector(".calculator-display");
const textToDisplay = "";

class Calculator {
	displayElement;
    textToDisplay = "";
    
    constructor(displayElement, textToDisplay) {
		this.displayElement = displayElement;
		this.textToDisplay = textToDisplay;
		this.clear();
	}

	appendNumber(number) {
		this.textToDisplay += number.toString();
		this.updateDisplay();
	}

	appendOperator(operator) {
		this.textToDisplay += operator;
		this.updateDisplay();
	}

	clear() {
		this.textToDisplay = "";
		this.updateDisplay();
	}

	// Remove last char displayText.
    delete() {
		this.textToDisplay = this.textToDisplay.slice(0, -1);
		this.updateDisplay();
	}

	calculate() {
		// If expression to calculate is empty, do nothing.
        if (this.textToDisplay === "") return;

		this.textToDisplay = eval(this.textToDisplay).toString();
		this.updateDisplay();
	}

	updateDisplay() {
		this.displayElement.innerText = this.textToDisplay;
	}
}

const calculator = new Calculator(displayElement, textToDisplay);

// Add click event to number buttons.
numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
	});
});

// Add click event to operand buttons.
operatorButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.appendOperator(button.innerText);
	});
});

// Reset calculator display on clicking clear button (AC).
allClearButton.addEventListener("click", () => {
	calculator.clear();
});

// Remove last input from display on clicking delete button.
deleteButton.addEventListener("click", () => {
	calculator.delete();
});

// Compute expression on clicking equals button.
equalsButton.addEventListener("click", () => {
	calculator.calculate();
});
