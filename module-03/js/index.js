'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const addLogin = (login, logins) => {
  let loginValidity = checkLoginValidity(login);
  let loginExist = checkIfLoginExists(login);
  if (loginValidity) {
    if (loginExist) {
      alert('Такой логин уже используется!');
    } else {
      logins.push(login);
      alert('Логин успешно добавлен!');
    }
  } else {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};
const checkLoginValidity = (login) => {
  if (login.length < 4 || login.length > 16) {
    loginValidity = false;
    return loginValidity;
  } else {
    loginValidity = true;
    return loginValidity;
  }
};
const checkIfLoginExists = (login, logins) => {
  if (logins.includes(login)) {
    loginExist = true;
    return loginExist;
  } else {
    loginExist = false;
    return loginExist;
  }
};
addLogin('Mango', logins);
// checkLoginValidity('Mango');
// console.log(loginValidity);
// checkIfLoginExists('Mango', logins);
// console.log(loginExist);
