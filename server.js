var express = require('express');
var fs = require('fs');

var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);

var io = require('socket.io')(server);

var socketClient = require('socket.io-client');
var postSocket = socketClient('http://localhost:3000');

// app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test', function (req, res) {
  fs.readFile('./index.html','utf-8', function(err, data) {
    console.log(data);
    res.send(data);
  });
});

app.post('/joystick', function (req, res) {
  console.log(req.body);
  postSocket.emit('edisonData', req.body);
  res.json({status: 200});
});

var serverOld = server.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


io.on('connection', function (socket) {
  socket.emit('test', { hello: 'world' });
  socket.on('edisonData', function (data) {
    socket.broadcast.emit('test', data);
  });
});
