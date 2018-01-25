var React = require('react');
var {Link} = require('react-router');
var Countdown = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="text-center home-title">Countdown</h1>
        <ul>
          <li>
            <Link to="/?location=Dhaka"></Link>
          </li>
          <li>
            <Link to="/?location=Rio"></Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Countdown;
