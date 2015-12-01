var React = require('react');
var ReactDOM = require('react-DOM');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Main = require('../components/Main.js');
var Home = require('../components/Home.js');
var About = require('../components/About.js');
var Services = require('../components/Services.js');
var ClientResources = require('../components/ClientResources.js');
var Contact = require('../components/Contact.js');

module.exports = (
	<Route path="/" component={Main}>
		<IndexRoute component={Home}/>
		<Route path="services" component={Services}/>
		<Route path="client-resources" component={ClientResources}/>
		<Route path="about" component={About}/>
		<Route path="contact" component={Contact}/>

	</Route>
);