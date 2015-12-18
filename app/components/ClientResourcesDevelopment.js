import React from 'react';
import SharedStyles from "../styles/sharedStyles.js";

class ClientResourcesDevelopment extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>Typical Development</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-offset-1 col-md-10">
					</div>
				</div>
			</div>
		);
	}
}


export default ClientResourcesDevelopment;