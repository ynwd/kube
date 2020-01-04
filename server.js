let http = require('http')
let os = require('os');
let hostname = os.hostname();

let handleRequest = function (request, response) {
  console.log(`Received request for URL: ${request.url}`)
  response.writeHead(200);
  response.end(`Hello World! @ ${hostname}`)
};
let www = http.createServer(handleRequest)
www.listen(8080)