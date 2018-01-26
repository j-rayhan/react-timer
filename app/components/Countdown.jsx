var React = require('react');
var {Link} = require('react-router');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function(){
    return {count:0};
  },
  setCountdown: function(seconds){
    this.setState({count: seconds});
  },
  render: function(){
    var {count} = this.state;
    return (
      <div>
        <h1 className="text-center home-title">Countdown</h1>
        <Clock totalSeconds={count} />
        <CountdownForm setCountdown={this.setCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
