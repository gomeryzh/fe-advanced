"use strict";

const showUsersBtn = document.querySelector(".show-users-js");

const allUsersDiv = document.querySelector(".all-users");

const inputId = document.querySelector(".input");
const inputAgeAdd = document.querySelector(".input-age-add");
const inputNameAdd = document.querySelector(".input-name-add");
const inputIdRemove = document.querySelector(".input-id-remove");
const inputIdUpdate = document.querySelector(".input-id-update");

const form = document.querySelector(".form");
const formAdd = document.querySelector(".form-add");
const formRemove = document.querySelector(".form-remove");
const formUpdate = document.querySelector(".form-update");

const userDiv = document.querySelector(".user");
const userAddDiv = document.querySelector(".user-add");
const userRemoveDiv = document.querySelector(".user-remove");
const userUpdateDiv = document.querySelector(".user-update");

function showAllUsers() {
  const allUsersMarkup = getAllUsers().then(usersArr =>
    createAllUsersMarkup(usersArr)
  );
  allUsersMarkup.then(usersMarkup => (allUsersDiv.innerHTML += usersMarkup));
}

function createAllUsersMarkup(usersArr) {
  const listItems = usersArr.reduce(
    (acc, user) =>
      acc +
      `<li>user ID: ${user.id}; user Name: ${user.name}; user Age: ${
        user.age
      }</li>`,
    ""
  );
  return `<ul class="users">${listItems}</ul>`;
}

const getAllUsers = () =>
  fetch("https://test-users-api.herokuapp.com/users/")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error" + response.statusText);
    })
    .then(allUsers => allUsers.data)
    .catch(error => console.log(error));

showUsersBtn.addEventListener("click", showAllUsers);

const createUserMarup = userObj => {
  return `<div>user ID: ${userObj.id}; user Name: ${userObj.name}; user Age: ${
    userObj.age
  }</div>`;
};

const getUserById = id =>
  fetch(`https://test-users-api.herokuapp.com/users/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error" + response.statusText);
    })
    .then(user => user.data)
    .catch(error => console.log(error));

const showUser = event => {
  event.preventDefault();
  const inputValue = inputId.value;
  event.target.reset();
  getUserById(inputValue).then(
    user => (userDiv.innerHTML += createUserMarup(user))
  );
};

form.addEventListener("submit", showUser);

// const updateUserList = () => alert("user list was updated");

const addUser = (userName, userAge) =>
  fetch("https://test-users-api.herokuapp.com/users/", {
    method: "POST",
    body: JSON.stringify({
      name: userName,
      age: userAge
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error" + response.statusText);
    })
    .then(user => user)
    .catch(error => console.log(error));

const showAddedUser = event => {
  event.preventDefault();
  const inputNameValue = inputNameAdd.value;
  const inputAgeValue = inputAgeAdd.value;
  event.target.reset();
  addUser(inputNameValue, inputAgeValue).then(alert("User was added!"));
};

formAdd.addEventListener("submit", showAddedUser);


const removeUser = id =>
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error" + response.statusText);
    })
    .then(user => console.log(user))
    .catch(error => console.log(error));

const showRemovedUser = event => {
    event.preventDefault();
    const inputIdForRemove = inputIdRemove.value;
    event.target.reset();
    removeUser(inputIdForRemove).then(alert("User was removed!"));
}

formRemove.addEventListener("submit", showRemovedUser);


const updatedUser = {
    name: "Kristi",
    age: 27
}

const updateUserData = () => alert('user data was updated');

const updateUser = (id, updatedUserData) => fetch(`https://test-users-api.herokuapp.com/users/${id}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error' + response.statusText);
    }).then(user => {
        user.name = updatedUserData.name;
        user.age = updatedUserData.age;
    }).catch(error => console.log(error));

const showUpdatedUser = event => {
    event.preventDefault();
    const inputIdForUpdate = inputIdUpdate.value;
    event.target.reset();
    updateUser(inputIdForUpdate, updatedUser).then(alert("User was updated!"));
}

formUpdate.addEventListener("submit", showUpdatedUser);


