"use strict";
let userInput;
const numbers = [];
let total = 0;

while (userInput !== null) {
  userInput = prompt("Введите число");
  let userInputNumber = Number(userInput);
  if (userInput !== null && !Number.isNaN(userInputNumber)) {
    numbers.push(userInputNumber);
    console.log(numbers);
  } else if (Number.isNaN(userInputNumber)) {
    alert("Было введено не число, попробуйте ещё раз");
  }
}
if (userInput === null) {
  for (let i = 0, max = numbers.length; i < max; i += 1) {
    total = total + numbers[i];
  }
  alert(`Общая сумма чисел равна ${total}`);
}
