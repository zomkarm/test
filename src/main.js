import { add, subtract, multiply, divide } from './modules/calculator.js';

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calcBtn = document.getElementById('calc-btn');
const resultEl = document.getElementById('result');

calcBtn.addEventListener('click', () => {
  const a = num1Input.value;
  const b = num2Input.value;
  const op = operationSelect.value;

  try {
    let res;
    if (op === 'add') res = add(a, b);
    if (op === 'subtract') res = subtract(a, b);
    if (op === 'multiply') res = multiply(a, b);
    if (op === 'divide') res = divide(a, b);

    resultEl.textContent = `Result: ${res}`;
  } catch (err) {
    resultEl.textContent = `Error: ${err.message}`;
  }
});