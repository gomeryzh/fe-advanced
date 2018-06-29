'use strict'

const showUsersBtn = document.querySelector('.show-users-js');

const allUsersDiv = document.querySelector('.all-users');

const inputId = document.querySelector('.input');
const form = document.querySelector('.form');
const userDiv = document.querySelector('.user');


const updateUserList = () => alert('user list was updated');


function showAllUsers() {
    const allUsersMarkup = getAllUsers().then(usersArr => createAllUsersMarkup(usersArr));
    allUsersMarkup.then(usersMarkup => allUsersDiv.innerHTML += usersMarkup);
}

function createAllUsersMarkup(usersArr) {
    const listItems = usersArr.reduce(
        (acc, user) =>
        acc +
        `<li>user ID: ${user.id}; user Name: ${user.name}; user Age: ${user.age}</li>`,
        ""
    );
    return `<ul class="users">${listItems}</ul>`;
}

const getAllUsers = () =>
    fetch('https://test-users-api.herokuapp.com/users/').then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error' + response.statusText);
    }).then(allUsers => allUsers.data).catch(error => console.log(error));


showUsersBtn.addEventListener('click', showAllUsers);

const createUserMarup = (userObj) => {
    return `<div>user ID: ${userObj.id}; user Name: ${userObj.name}; user Age: ${userObj.age}</div>`;   
}

const getUserById = id => fetch(`https://test-users-api.herokuapp.com/users/${id}`).then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Error' + response.statusText);
}).then(user => user.data).catch(error => console.log(error));

const showUser = event => {
    event.preventDefault();
    const inputValue = inputId.value;
    event.target.reset();
    getUserById(inputValue).then(user => userDiv.innerHTML += createUserMarup(user))
}

form.addEventListener('submit', showUser);

// const addUser = (userName, userAge) =>
//     fetch('https://test-users-api.herokuapp.com/users/', {
//         method: 'POST',
//         body: JSON.stringify({
//             name: userName,
//             age: userAge
//         }),
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         }
//     }).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Error' + response.statusText);
//     }).then(user => console.log(user)).catch(error => console.log(error));

// addUser("Vova", 124).then(updateUserList());

// const removeUser = (id) =>
//     fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
//         method: 'DELETE',
//     }).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Error' + response.statusText);
//     }).then(user => console.log(user)).catch(error => console.log(error));



// removeUser("5b09b93f06a7270014427990").then(updateUserList());

// const updatedUser = {
//     name: "Kristi",
//     age: 27
// }

// const updateUserData = () => alert('user data was updated');

// const updateUser = (id, updatedUserData) => fetch(`https://test-users-api.herokuapp.com/users/${id}`)
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Error' + response.statusText);
//     }).then(user => {
//         user.name = updatedUserData.name;
//         user.age = updatedUserData.age;
//     }).catch(error => console.log(error));

// updateUser("5b0be6b54f70ae00141efe9c", updatedUser).then(updateUserData());