const app = require("./app");
const http = require("http");

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port);

server.on("listening", () => {
  console.log(`server listening on 5000`)
});

module.exports = {

}