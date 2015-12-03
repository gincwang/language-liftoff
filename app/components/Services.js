import React from "react";
import SharedStyles from "../styles/sharedStyles.js";

class Services extends React.Component {
	render(){
		console.log({SharedStyles});
		return (
			<div className="container" style={SharedStyles.mainStyles}>
				<div className="row">
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<br/>
						<h2 style={SharedStyles.titleStyles}>Services</h2>
					</div>
				</div>
				<br/>
				<div className="row">
				</div>
			</div>
		);
	}
}


export default Services;