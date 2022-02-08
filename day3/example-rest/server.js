const http = require("https");
const posts = require("./data/posts.json"); //imported posts
const users = require("./data/users.json"); //imported users

const server = http.createServer((req, res) => {
  const URL = req.url;
  console.log(`Entered URL by user: ${URL}`);

  if (URL === "/users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (URL === "/posts") {
    res.statusCode = 200;
    res.setHeader("Content-Typpe", "application/json");
    res.write(JSON.stringify(posts));
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("Such page does not exist");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
