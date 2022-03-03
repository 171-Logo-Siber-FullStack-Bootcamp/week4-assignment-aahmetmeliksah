const postData = require("../data/posts_data_access");

const getAllPostsControlller = async () => {
  let allPosts = await postData.getAllPosts();

  return allPosts;
};

module.exports = { getAllPostsControlller };
