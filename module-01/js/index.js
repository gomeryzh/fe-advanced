"use strict"
//  Создаём базовые переменные
let sharmGroup = 15;
let hurgadaGroup = 25;
let tabaGroup = 6;

//  Создаем переменные для проверки валидности инпута
let userInput = prompt("Введите число необходимых Вам мест", "");
let userInputPlacesCount = Number(userInput);
const userInputRange = userInputPlacesCount >= 1;
const userValidInput =
  userInput !== null && !Number.isNaN(userInput) && userInputRange;
// Запускаем провверку на валидность
if (userValidInput) {
  console.log("User need: " + userInputPlacesCount + " places");
  // Get Name of Group
  let groupName;

  if (userInputPlacesCount <= tabaGroup) {
    groupName = "tabaGroup";
    console.log(groupName);
    // Спрашиваем у пользователя согласен ли он
    let userChoise = confirm(
      `В группе ${groupName} есть необходимое кол-во мест, Вы согласны отправиться туда?`
    );
    if (userChoise) {
      tabaGroup = tabaGroup - userInputPlacesCount;
      alert(`Приятного путешествия в группе ${groupName}`);
      console.log(`В группе ${groupName} осталось ${tabaGroup} мест`);
    } else {
      alert("Нам очень жаль, приходите ещё!");
    }
  } else if (userInputPlacesCount <= sharmGroup) {
    groupName = "sharmGroup";
    console.log(groupName);
    let userChoise = confirm(
      `В группе ${groupName} есть необходимое кол-во мест, Вы согласны отправиться туда?`
    );
    if (userChoise) {
      sharmGroup = sharmGroup - userInputPlacesCount;
      alert(`Приятного путешествия в группе ${groupName}`);
      console.log(`В группе ${groupName} осталось ${sharmGroup} мест`);
    } else {
      alert("Нам очень жаль, приходите ещё!");
    }
  } else if (userInputPlacesCount <= hurgadaGroup) {
    groupName = "hurgadaGroup";
    console.log(groupName);
    let userChoise = confirm(
      `В группе ${groupName} есть необходимое кол-во мест, Вы согласны отправиться туда?`
    );
    if (userChoise) {
      hurgadaGroup = hurgadaGroup - userInputPlacesCount;
      alert(`Приятного путешествия в группе ${groupName}`);
      console.log(`В группе ${groupName} осталось ${hurgadaGroup} мест`);
    } else {
      alert("Нам очень жаль, приходите ещё!");
    }
  } else {
    alert('Извините, не достаточно мест.')
  }
} else {
  alert("Ошибка ввода");
}

