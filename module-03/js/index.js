'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const addLogin = (login, logins) => {
  let loginValidity;
  const checkLoginValidity = (login) => {
    if (login.length < 4 || login.length > 16) {
      loginValidity = false;
      return loginValidity;
    } else {
      loginValidity = true;
      return loginValidity;
    }
  };
  if (loginValidity) {
    let loginExist;
    const checkIfLoginExists = (login, logins) => {
      for (login of logins) {
        if (logins.includes(login)) {
          loginExist = true;
          return loginExist;
        } else {
          loginExist = false;
          return loginExist;
        }
      }
    };
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
addLogin('Mango', logins);
// checkLoginValidity('Mango');
// console.log(loginValidity);
// checkIfLoginExists('Mango', logins);
// console.log(loginExist);
