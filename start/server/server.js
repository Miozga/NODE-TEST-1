/*const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>Hello Node!!1234567</h1>");
});

server.listen(5500, "127.0.0.1", () => console.log("server wystartował"));

*/
const add = (x, y) => x + y;

const division = (number1, number2) => number1 / number2;

const math = (a, b, callback) => {
  console.log(callback(a, b));
};

math(3, 4, add);
