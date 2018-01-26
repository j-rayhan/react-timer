var React = require('react');

var CountdownForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var seconds = this.refs.seconds.value;
    if (seconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.setCountdown(parseInt(seconds,10));
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
