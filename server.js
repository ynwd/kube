let http = require('http')

let handleRequest = function (request, response) {
  console.log(`Received request for URL: ${request.url}`)
  response.writeHead(200);
  response.end('Hello World!')
};
let www = http.createServer(handleRequest)
www.listen(8080)