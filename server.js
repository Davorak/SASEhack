var express = require('express');
var fs = require('fs');

var bodyParser = require('body-parser');
var app = express();

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
  res.json({status: 200});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
