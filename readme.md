# Usage 

* Clone this repository to you projects file

* on server or personal computer install [nodejs](https://nodejs.org/en/)

* on server in repo directy use `npm i` to install the needed packages 

* copy files to edison.  I am using the 'deploy' script with my edisons ip address hard coded. The edisonClient fold contains a simple client to send data back to the server.

* Change the `endpoint` variable `./edisonClient/index.js` to match the ip address of your server.

* To run the client on the edison, use `node index.js` in the edisonClient folder.

* On the server in the github repo run the server with `node server.js`

* For the live stream test example on the page 'localhost:3000/test' you must allso:
    * cd to browserClient
    * `npm i`
    * `npm start` and keep that program running in the terminal.


Your server should now recieve json data from the edison and print it to the terminal on the server

# Basic resources for SASEhack
install ftdi drivers for mac:
https://learn.sparkfun.com/tutorials/how-to-install-ftdi-drivers/mac

flashing firmware:
https://software.intel.com/en-us/flashing-the-firmware-on-intel-edison-board


oled board from spark fun
https://learn.sparkfun.com/tutorials/sparkfun-blocks-for-intel-edison---oled-block-?_ga=1.56361506.862938157.1444523880
