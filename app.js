const express = require('express')
const app = express()
var http = require('http');

app.get('/', (req, res) => {
  res.send('Hello World')
})

// app.listen(3000, () => {
//   console.log('Start server at port 3000.')
// })

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Apache!\n');
}).listen(3000, '127.0.0.1');