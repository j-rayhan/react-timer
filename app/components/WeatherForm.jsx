var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var locationName = this.refs.location.value;
    if (locationName.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(locationName);
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Search Weather by city"/>
          <button className="button expanded">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
