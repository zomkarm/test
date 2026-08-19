export function add(a, b) {
  return Number(a) + Number(b);
}

export function subtract(a, b) {
  return Number(a) - Number(b);
}

export function multiply(a, b) {
  return Number(a) * Number(b);
}

export function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return Number(a) / Number(b);
}