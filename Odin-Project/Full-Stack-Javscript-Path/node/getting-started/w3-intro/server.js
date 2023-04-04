var http = require('http');
const date = require('./export')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(date.thisGuy())
  res.end('Hello World!');
}).listen(8080);

