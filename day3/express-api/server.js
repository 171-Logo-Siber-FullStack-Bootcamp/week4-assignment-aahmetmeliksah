const express = require("express");
const app = express();
const posts = require("./data/posts.json");
const users = require("./data/users.json");

/*
    app.get() method takes two parameters. First one is the route. What URL the user enters. Second one is a callback func that takes two parameters; req and res in respective order.

    res.send() method sends what you want to send to the page 

    req.query() returns an object. More, that catches specific things. For example, 
    localhost:3000/posts?id=7, yeah you need God darn query for the part that is after question mark :) 
    req.query.id is exactly match for the id part 
*/
app.get("/posts", (req, res) => {
  if (req.query.id) {
    let filteredPosts = posts.filter((x) => x.id == req.query.id);
    res.send(filteredPosts);
  } else {
    res.send(posts);
  }
});
/*
    In short, the if parts of the code above, check if req.qeury (localhost:3000/posts?id=7 - the part after question mark) and if that is true. It creates a variable and filters through posts json file and gets the one that is the exact match for the id. Else, it returns everything.
*/

app.get("/users", (req, res) => {
  if (req.query.id) {
    let filteredUsers = users.filter((x) => x.id == req.query.id);
    res.send(filteredUsers);
  } else {
    res.send(users);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
