let operand1 = null;
let operand2 = null;
let currentOperator = null;

function appendNumber(number) {
  if (currentOperator === null) {
    if (operand1 === null) {
      operand1 = number;
      display.value = operand1;
    } else {
      operand1 += number;
      display.value = operand1;
    }
  } else {
    if (operand2 === null) {
      operand2 = number;
      display.value = operand2;
    } else {
      operand2 += number;
      display.value = operand2;
    }
  }
}

function performOperation(op) {
  if (operand1 !== null && operand2 === null) {
    currentOperator = op;
  }
}

function calculateResult() {
  if (operand1 !== null && operand2 !== null) {
    let result = 0;
    switch (currentOperator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
    }
    display.value = result;
    operand1 = result;
    operand2 = null;
    currentOperator = null;
  }
}

function clearDisplay() {
  operand1 = null;
  operand2 = null;
  currentOperator = null;
  display.value = '';
}