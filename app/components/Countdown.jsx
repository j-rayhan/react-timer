var React = require('react');
var {Link} = require('react-router');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count:0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps,prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'strated':
          this.setTimer();
          break;
        default:
          alert('Error');
      }
    }
  },
  setTimer: function(){
    this.timer = setInterval(() => {
      var newTimer = this.state.count -1 ;
      this.setState({
        count: newTimer >=0 ? newTimer : 0
      });
    },1000)
  },
  setCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'strated'
    });
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
