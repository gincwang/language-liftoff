import React from "react";
import SharedStyles from "../styles/sharedStyles.js";

export default class About extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>Who We Are</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6">
						<h4 style={inline.paragraphStyle}>{text.mainParagraph1}</h4>
						<h4 style={inline.paragraphStyle}>{text.mainParagraph2}</h4>
					</div>
				</div>
			</div>
		);
	}	
}

let inline = {
	paragraphStyle: {
		lineHeight: SharedStyles.lineHeight
	}

};

let text = {
	title: "Speech and Language Services For All",
	mainParagraph1: "Language Liftoff is a growing speech-language pathology private practice providing home-based, clinic, and telepractice speech and language services to clients in the Eastside Seattle suburbs of King County. We offer a wide range of services that enable our clients to reach their full potential and become successful communicators in the home, school, work, and community settings.",
	mainParagraph2: "We pride ourselves in providing high quality services and differential diagnoses, utilizing evidence-based methods, assessment tools, training, and resources/materials. Caring and effective services are our utmost priority!"
};
