var React = require('react');
var {Link} = require('react-router');
var Example = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="text-center home-title">Examples</h1>
        <h4>Here are a few example location to try out: </h4>
        <ul>
          <li>
            <Link to="/?location=Dhaka">Dhaka, BD</Link>
          </li>
          <li>
            <Link to="/?location=Rio">Rio, Brazil</Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Example;
