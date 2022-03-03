const axios = require("axios");

const getAllPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

module.exports = { getAllPosts };
