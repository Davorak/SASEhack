var mraa = require('mraa');

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

// right
var pin45 = new mraa.Gpio(45);
pin45.dir(mraa.DIR_IN);
*/


var pin46 = new mraa.Gpio(46);
pin46.dir(mraa.DIR_IN);

console.log(pin46.read())
console.log(pin47.read())
