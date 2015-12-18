import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import Main from '../components/Main.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Services from '../components/Services.js';
import ClientResourcesDisorders from '../components/ClientResourcesDisorders.js';
import ClientResourcesDevelopment from '../components/ClientResourcesDevelopment.js';
import Contact from '../components/Contact.js';

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={Home}/>
		<Route path="services" component={Services}/>
		<Route path="client-resources">
			<Route path="common-disorders" component={ClientResourcesDisorders} />
			<Route path="typical-development" component={ClientResourcesDevelopment} />			
		</Route>
		<Route path="about" component={About}/>
		<Route path="contact" component={Contact}/>
	</Route>
);