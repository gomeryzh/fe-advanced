"use strict";

const SocialBook = function(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;

  this.getAllUsers = () => this.users;

  this.getUserByLogin = login => this.users.find(user => user.login === login);

  this.getUserStatus = userId => {
    const correctUser = this.users.find(user => user.id === userId);
    if (correctUser.isActive) {
      return "active";
    }
    return "inactive";
  };

  this.addUser = user => {
    user.id = getId();
    user.isActive = false;
    this.users.push(user);
  };

  this.removeUserById = userId =>
    (this.users = this.users.filter(user => user.id !== userId));

  this.getUsersCount = () => this.users.length;

  this.getUserPosts = userId => this.posts[userId];

  this.addPost = (userId, post) => this.posts[userId].push(post);

  this.removePost = (userId, postId) =>
    (this.posts[userId] = this.posts[userId].filter(
      post => post.id !== postId
    ));

  this.getAllLikes = userId =>
    this.posts[userId].reduce((acc, post) => acc + post.likes, 0);

  this.addPostLike = (userId, postId) => {
    this.posts[userId] = this.posts[userId].map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.likes + 1
        };
      }
      return post;
    });
  };

  this.getPostsCount = userId => this.posts[userId].length;
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
    {
      id: "-5sgljaskg",
      text: "post #1",
      likes: 3
    },
    {
      id: "-199hb6igr",
      text: "post #2",
      likes: 5
    },
    {
      id: "-hy0eyw5qo",
      text: "post #3",
      likes: 13
    }
  ],
  "-qkpzenjxe": [
    {
      id: "-5tu69g5rf",
      text: "post #1",
      likes: 8
    },
    {
      id: "-bje766393",
      text: "post #2",
      likes: 15
    }
  ],
  "-e51cpd4di": [
    {
      id: "-9y6nkmlj4",
      text: "post #1",
      likes: 18
    },
    {
      id: "-i03pbhy3s",
      text: "post #2",
      likes: 45
    }
  ]
};

const getId = () =>
  "-" +
  Math.random()
    .toString(36)
    .substr(2, 9);

const newUser = new SocialBook(initialUsers, initialPosts);
console.log(newUser);

// console.log(newUser.getAllUsers());

// console.log(newUser.getUserByLogin("mangozedog@mail.com"));

// console.log(newUser.getUserStatus("-qkpzenjxe"));

// console.log(newUser.addUser({
//   login: "ajax2k@change.ua",
//   password: "ert234qw"
// }));

// console.log(newUser);

// console.log(newUser.removeUserById("-e51cpd4di"));

// console.log(newUser);

// console.log(newUser.getUsersCount());

// console.log(newUser.getUserPosts("-s19a6hqce"));

// console.log(newUser.addPost("-s19a6hqce", {
//   id: "sdfafa",
//   text: "post #2",
//   likes: 7
// }));

// console.log(newUser.getPostsCount("-s19a6hqce"));

// console.log(newUser);

// console.log(newUser.removePost("-s19a6hqce", "sdfafa"));

// console.log(newUser);

// console.log(newUser.getAllLikes("-s19a6hqce"));

// console.log(newUser.addPostLike("-s19a6hqce", "-199hb6igr"));
// console.log(newUser.addPostLike("-s19a6hqce", "-199hb6igr"));

// console.log(newUser.getAllLikes("-s19a6hqce"));
