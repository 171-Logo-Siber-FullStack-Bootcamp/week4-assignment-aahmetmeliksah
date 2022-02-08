const http = require("http");

// Imported data.json file and assigned it into constant called employees
const employees = require("./data.json");

// createServer()method needs a listener method
const server = http.createServer((req, res) => {
  console.log(req.url);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(employees));
  res.end();
});
/* 
        res.statusCode tells you if request is success or else. 200 and 4 are success codes. 400s are failure
        res.setHeader("Content-Type", "text/html") categorises your request as you want it in html form (sets header)
        with res.write(), server will write whatever you want it to write 
        and res.end() is kinda like closing an envelop. Without it, you request will keep rolling, so you must add it
        
        JSON.stringify() method converts everything into a string, in this case object became string 
*/

const PORT = 3000;

// Listening to port
server.listen(PORT, () => {
  console.log(`Server started to work at port ${PORT}`);
});
