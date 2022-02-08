const http = require("http");
const posts = require("./data/posts.json");
const users = require("./data/users.json");

const server = http.createServer((req, res) => {
  const URL = req.url;
  console.log(`Entered URL by user: ${URL}`);

  if (URL === "/users") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (URL === "/posts") {
    res.setHeader("Content-Typpe", "application/json");
    res.write(JSON.stringify(posts));
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.write("{ message: 'such page does not exist' }");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
