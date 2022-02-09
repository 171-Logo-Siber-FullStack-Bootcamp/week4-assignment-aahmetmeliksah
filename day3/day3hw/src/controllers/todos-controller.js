const todos = require("../data/todos.json");

function getAllTodos() {
  return todos;
}

function getTodoById(todoId) {
  return todos.filter((x) => x.id == todoId);
}

function getTodosByUserId(userId) {
  return todos.filter((x) => x.userId == userId);
}

module.exports = { getAllTodos, getTodoById, getTodosByUserId };
