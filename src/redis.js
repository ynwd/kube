let http = require('http')
let os = require('os');
let redis = require('redis');
let client = redis.createClient(6379,'svc-redis')
let hostname = os.hostname();

client.on('connect', function() {
  console.log('Redis client connected')
})

client.on('error', function (err) {
  console.log('Something went wrong ' + err)
})

let handleRequest = function (request, response) {
  console.log(`Received request for URL: ${request.url}`)
  response.writeHead(200);
  response.end(`Redis client connected @ ${hostname}`)
};

let www = http.createServer(handleRequest)
www.listen(8080)


