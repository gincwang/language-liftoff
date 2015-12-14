import React from "react";
import SharedStyles from "../styles/sharedStyles.js";

class About extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<br/>
						<h2 style={SharedStyles.titleStyles}>Who We Are</h2>
						<br/>
					</div>
				</div>
				<br/>
				<div className="row">
					<div className="col-md-offset-1 col-md-10">

					</div>
				</div>
			</div>
		);
	}	
}

export default About;