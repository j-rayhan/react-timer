var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="text-center home-title">About</h1>
        <p>This is a weather application build on React. I have built this
          for the complete React Web app Developer Course</p>
          <ul>
            <li>
              <a href="https://facbook.github.io/react"> React </a> - This was the JavaScript framework used.
            </li>
            <li>
              <a href="http://openweathermap.org">Open weather Map</a> - I used Open weather map to search for weather data by city name.
            </li>
          </ul>
      </div>
    );
  }
});

module.exports = About;
