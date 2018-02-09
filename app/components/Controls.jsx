var React = require('react');

var Controls = React.createClass({
  propsTypes: {
      countdownStatus: React.PropTypes.string.isRequird,
      statusChange: React.PropTypes.func.isRequird
  },
  statusChange: function(newStatus){
    return () => {
      this.props.statusChange(newStatus);
    };
  },
  render: function(){
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.statusChange('paused')}>Pause</button>;
      }else {
        return <button className="button primary" onClick={this.statusChange('started')}>Start</button>;
      }
    };
    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.statusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
