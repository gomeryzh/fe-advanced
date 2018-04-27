'use strict'
let userInput;
let attempts = 3;
let correctPass = false;
const passwordData = ['qwerty', 'qweqwe', 'user1', 'user2', 'user3'];
while (userInput !== null && attempts > 0 && !correctPass) {
    userInput = prompt('Введите свой пароль');
    attempts -=1;
    console.log(attempts);
    if (userInput !== null) {
        for(let i = 0, max = passwordData.length; i < max; i += 1) {
            if(userInput === passwordData[i]) {
                correctPass = true;
                alert('Вы ввели подходящий пароль');
              break;
            } 
        }

    } else {
        alert('Вы нажали cancel');
    }
}
if(attempts === 0) {
    alert('Ваши попытки закончились');
}