import React from 'react';
import SharedStyles from "../styles/sharedStyles.js";

class ClientResources extends React.Component {
	render(){
		return (
			<div className="container" style={SharedStyles.mainStyles}>
				<div className="row">
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<br/>
						<h2 style={SharedStyles.titleStyles}>Client Resources</h2>
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


export default ClientResources;