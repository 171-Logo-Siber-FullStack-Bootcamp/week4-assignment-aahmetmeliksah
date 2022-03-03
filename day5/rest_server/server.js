const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const post_controller = require("./src/controllers/post_controller");

app.get("/posts", (req, res) => {
  post_controller
    .getAllPostsControlller()
    .then((post) => res.send(post.data))
    .catch((err) => err);
});

app.listen(3000, () => {
  console.log("Server started at 3000");
});
