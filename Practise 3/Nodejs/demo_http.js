var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(300, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);