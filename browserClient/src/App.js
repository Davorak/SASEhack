import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

require('socket.io/lib/client.js')

var socket = io('http://localhost:3000');

var pressColor = function(isPressed) {
  if(isPressed == "0"){
    return "green";
  } else {
    return "white";
  }
};

var App = React.createClass({
  getInitialState: function(){
    return {
      oled: { up: 1,
        down: 1,
        left: 1,
        right: 1,
        select: 0,
        A: 0,
        B: 1
      }
    };
  },
  componentDidMount: function() {
    var _this = this;
    socket.on('test', function (data) {
//      console.log(data.B == "0");
      _this.setState({ oled: data });
    });
  },
  render: function() {
      console.log(this.state.oled.right == "0");
    return (
      <div>
        <div style={{backgroundColor: pressColor(this.state.oled.up)}}>
          up
        </div>
        <div style={{backgroundColor: pressColor(this.state.oled.down)}}>
          down
        </div>
        <div style={{backgroundColor: pressColor(this.state.oled.left)}}>
          left
        </div>
        <div style={{backgroundColor: pressColor(this.state.oled.right)}}>
          right
        </div>
        <div style={{backgroundColor: pressColor(this.state.oled.select)}}>
          select
        </div>
        <div style={{backgroundColor: pressColor(this.state.oled.A)}}>
          A
        </div>
        <div style={{backgroundColor: pressColor(this.state.oled.B)}}>
          B
        </div>
      </div>
    );
  }
});

module.exports = {App: App};
