const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123123", 10),
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("123123", 10),
    isAdmin: false,
  },
  {
    name: "Jared Feng",
    email: "jared@email.com",
    password: bcrypt.hashSync("123123", 10),
    isAdmin: false,
  },
];

module.exports = users;
