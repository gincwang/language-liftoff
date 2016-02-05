import React from "react";
import ReactDOM from "react-DOM";
import {Router, Route, browserHistory} from "react-router";
import routes from './config/routes';

ReactDOM.render((
	<Router history={browserHistory}>
		{routes}
	</Router>
), document.getElementById("app"));
