const express = require("express");
const postsController = require("./src/controllers/posts-controller");
const usersController = require("./src/controllers/users-controller");
const todosController = require("./src/controllers/todos-controller");

const app = express();

// Posts
app.get("/posts", (req, res) => {
  let posts = postsController.getAllPosts();

  res.send(posts);
});

app.get("/posts/:postId", (req, res) => {
  let post = postsController.getPostById(req.params.postId);
  res.send(post);
});

// Users;
app.get("/users", (req, res) => {
  let users = usersController.getAllUsers();

  res.send(users);
});

app.get("/users/:userId", (req, res) => {
  let user = usersController.getUserById(req.params.userId);

  res.send(user);
});

app.get("/todos", (req, res) => {
  let todos;
  if (req.query.userId) {
    todos = todosController.getTodosByUserId(req.query.userId);
  } else {
    todos = todosController.getAllTodos();
  }

  res.send(todos);
});

app.get("/todos/:todoId", (req, res) => {
  let todo = todosController.getTodoById(req.params.todoId);

  res.send(todo);
});

app.listen(3000);
