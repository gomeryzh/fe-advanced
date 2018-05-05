'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const addLogin = (login, logins) => {
  let loginValidity = checkLoginValidity(login);
  let loginExist = checkIfLoginExists(login, logins);
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
  let result
  if (login.length < 4 || login.length > 16) {
    result = false;
    return result;
  } else {
    result = true;
    return result;
  }
};
const checkIfLoginExists = (login, logins) => {
  let result
  if (logins.includes(login)) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
addLogin('somelogin', logins);
