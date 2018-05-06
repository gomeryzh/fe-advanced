'use strict';
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const addLogin = (login, logins) => {
  let loginValidity = checkLoginValidity(login);
  let loginExist = checkIfLoginExists(login, logins);
  if (loginValidity === false) {
    alert("Ошибка! Логин должен быть от 4 до 16 символов");
    return;
  }
  if (loginExist) {
    alert("Такой логин уже используется!");
    return;
  }
  logins.push(login);
  alert("Логин успешно добавлен!");
  return;
};
const checkLoginValidity = login => {
  if (login.length < 4 || login.length > 16) {
    return false;
  }
  return true;
};
const checkIfLoginExists = (login, logins) => {
  if (logins.includes(login)) {
    return true;
  }
  return false;
};
addLogin("Man", logins);
