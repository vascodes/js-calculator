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
	isCurrentNumADecimal = false;

	constructor(displayElement, textToDisplay) {
		this.displayElement = displayElement;
		this.textToDisplay = textToDisplay;
		this.clear();
	}
	
    getLastChar(){
        return this.textToDisplay.slice(-1);
    }

    appendOperand(operand) {
		if (operand === ".") {
			let lastChar = this.getLastChar();

			// Do nothing if expression is empty.
			if (lastChar === "") return;

			// Do nothing if last character in expression is an operator.
			if (isNaN(lastChar)) return;

			// Do nothing if expression has a fractional part.
			if (this.isCurrentNumADecimal) return;

			this.isCurrentNumADecimal = true;
		}

		this.textToDisplay += operand.toString();
		this.updateDisplay();
	}

	// TODO: Add support for negative numbers.
    appendOperator(operator) {
		this.isCurrentNumADecimal = false;

        let lastChar = this.getLastChar();   
		// Do nothing, if expression is empty.
        if(lastChar === "") return;

		// Do nothing, if last character in expression is an operator.
		if (lastChar.match(/[+-/*]/g)) return;

		this.textToDisplay += operator;
		this.updateDisplay();
	}

	clear() {
		this.textToDisplay = "";
		this.updateDisplay();
	}

	// Remove last character in expression.
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
		calculator.appendOperand(button.innerText);
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
