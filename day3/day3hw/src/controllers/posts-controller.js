const posts = require("../data/posts.json");

function getAllPosts() {
  return posts;
}

function getPostById(postId) {
  return posts.filter((x) => x.id == postId);
}

module.exports = { getAllPosts, getPostById };
