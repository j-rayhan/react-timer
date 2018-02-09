var React = require('react');
var {Link} = require('react-router');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
        case 'started':
          this.setTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
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
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus){
    this.setState({countdownStatus:newStatus});
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} statusChange={this.handleStatusChange} />;
      }else {
        return <CountdownForm setCountdown={this.setCountdown}/>;
      }
    };
    return (
      <div>
        <h2 className="text-center home-title">Countdown</h2>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
