import React from "react";
import SharedStyles from "../styles/sharedStyles.js";

class Contact extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>Contact Info</h2>
					</div>
				</div>
				<div className="row" style={SharedStyles.paragraphRowStyles}>
					<div className="col-md-offset-1 col-md-10">
						<h3>Thank you for visiting us at Language Liftoff!</h3>
						<h3>Please feel free to contact us with any questions or service inquiries.</h3>
					</div>
				</div>
				<div className="row" style={SharedStyles.altParagraphRowStyles}>
					<div className="col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
						<ul style={ulStyles}>
							<li><h3><span className="glyphicon glyphicon-earphone" style={SharedStyles.glyphiconStyles}></span> : <a href="tel:4253954671" style={linkStyles}>425-395-4671</a></h3></li>
							<li><h3><span className="glyphicon glyphicon-envelope" style={SharedStyles.glyphiconStyles}></span> : <a href="mailto:services@languageliftoff.com?subject=Speech%20Inquiries" style={linkStyles}>services@languageliftoff.com</a></h3></li>
							<li><h3><a href={"http://www.facebook.com/LanguageLiftoff"} target={"_blank"} ><img src={"app/assets/logos/fb/png/FB-FindUsonFacebook-online-114.png"} width={114} /></a></h3></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}	
}

let ulStyles = {
	listStyle: "none",
	marginTop: "30px",
	backgroundColor: "#FFF8E1",
	borderRadius: "30px",
	padding: "15px 10px 20px"
};

let linkStyles = {
	color: "#9E9E9E"
};

export default Contact;