var React = require('react');
var ReactDOM = require('react-DOM');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var routes = require('./config/routes');

ReactDOM.render((
	<Router>
		{routes}
	</Router>
), document.getElementById("app"));