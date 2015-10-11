var mraa = require('mraa');

var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));

var endpoint = 'http://192.168.3.8:3000';

// joystick

// up
var pin47 = new mraa.Gpio(47);
pin47.dir(mraa.DIR_IN);

/*
// down
var pin44 = new mraa.Gpio(44);
pin44.dir(mraa.DIR_IN);

// left
var pin165 = new mraa.Gpio(165);
pin165.dir(mraa.DIR_IN);
*/

// right
var pin45 = new mraa.Gpio(45);
pin45.dir(mraa.DIR_IN);

// Select
var pin48 = new mraa.Gpio(48);
pin48.dir(mraa.DIR_IN);

// A
var pin49 = new mraa.Gpio(49);
pin49.dir(mraa.DIR_IN);

// B
var pin46 = new mraa.Gpio(46);
pin46.dir(mraa.DIR_IN);

var readOledInputs = function() {
  return {
    up: pin47.read(),
    down: 1, //pin44.read(),
    left: 1, //pin165.read(),
    right: pin45.read(),
    select: pin49.read(),
    A: pin49.read(),
    B: pin46.read()
  };
};

setInterval(function() {
  var data = readOledInputs();
  console.log(data);
  request.postAsync(endpoint + '/joystick', {form: data}).then(function(res){
    console.log(res[1]);
  });
}, 1000);

