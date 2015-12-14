import React from "react";
import SharedStyles from "../styles/sharedStyles.js";

class Contact extends React.Component {
	render(){
		return (
			<div className="container" style={SharedStyles.mainStyles}>
				<div className="row">
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<br/>
						<h2 style={SharedStyles.titleStyles}>Contact</h2>
					</div>
				</div>
				<br/>
				<div className="row">
					<div className="col-md-offset-1 col-md-10">
						<h3>Thank you for visiting us at Language Liftoff!</h3>
						<h3>Please feel free to contact us with any questions or service inquiries.</h3>
						<br/>
						<h3><span className="glyphicon glyphicon-earphone" style={SharedStyles.glyphiconStyles}></span> : 425-395-4671</h3>
						<h3><span className="glyphicon glyphicon-envelope" style={SharedStyles.glyphiconStyles}></span> : <a href="mailto:services@languageliftoff.com?subject=Speech%20Inquiries">services@languageliftoff.com</a></h3>
						<br/>
						<h3><a href={"http://www.facebook.com/LanguageLiftoff"} target={"_blank"} ><img src={"app/assets/logos/fb/png/FB-FindUsonFacebook-online-114.png"} width={114} /></a></h3>	
					</div>
				</div>
			</div>
		);
	}	
}



export default Contact;