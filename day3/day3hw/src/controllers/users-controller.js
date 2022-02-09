const users = require("../data/users.json");

const getAllUsers = () => {
  return users;
};

function getUserById(userId) {
  return users.filter((x) => x.id == userId);
}

module.exports = { getAllUsers, getUserById };
