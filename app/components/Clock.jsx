var React = require('react');
var {Link} = require('react-router');

var Clock = React.createClass({
  getDefaultProps: function(){
    totalSeconds: 0;
  },
  propsTypes:{
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds){
    var seconds= totalSeconds%60;
    var minutes= Math.floor(totalSeconds / 60);
    if (seconds < 10) {
      seconds ='0'+seconds;
    }
    if (minutes < 10) {
      minutes ='0'+minutes;
    }
    return minutes +':'+seconds;
  },
  render: function(){
    var {totalSeconds} = this.props;
    return (
      <div>
        <div className="clock">
          <span className="clock-text">
            {this.formatSeconds(totalSeconds)}
          </span>
        </div>
      </div>
    );
  }
});

module.exports = Clock;
