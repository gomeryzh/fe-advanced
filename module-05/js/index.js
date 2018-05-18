"use strict";

const SocialBook = function(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;

  this.getAllUsers = () => users;

  this.getUserByLogin = login => users.filter(user => user.login === login);

  this.getUserStatus = userId =>
    users.reduce((acc, el) => (el.isActive ? "active" : "inactive"));

  this.addUser = user => {
      user.id = getId();
      user.isActive = false;
      users.push(user);
  };

  this.removeUserById = userId => {
    const userToRemove = users.find(user => user.id === userId);
    users.splice(users.indexOf(userToRemove), 1);
  };

  this.getUsersCount = () => users.length;
};

const initialUsers = [
  {
    id: "-s19a6hqce",
    login: "mangozedog@mail.com",
    password: "qwe123zv",
    isActive: true
  },
  {
    id: "-qkpzenjxe",
    login: "polysweet@skynet.ze",
    password: "123zxc78",
    isActive: true
  },
  {
    id: "-e51cpd4di",
    login: "ajax2k@change.ua",
    password: "ert234qw",
    isActive: false
  }
];

const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ]
};

const getId = () =>
  "-" +
  Math.random()
    .toString(36)
    .substr(2, 9);

const newUser = new SocialBook(initialUsers, initialPosts);
console.log(newUser);

console.log(newUser.getAllUsers());

console.log(newUser.getUserByLogin("mangozedog@mail.com"));

console.log(newUser.getUserStatus("-qkpzenjxe"));

console.log(newUser.addUser({
    login: "ajax2k@change.ua",
    password: "ert234qw"
  }));

console.log(newUser);

console.log(newUser.removeUserById("-e51cpd4di"));

console.log(newUser);

console.log(newUser.getUsersCount());
