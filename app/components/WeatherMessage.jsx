var React = require('react');
var WeatherMessage = React.createClass({
  render: function(){
    var {temp, location} = this.props;
    return (
      <div  className="text-center">
        It's it {temp} in {location}
      </div>
    );
  }
});

module.exports = WeatherMessage;
