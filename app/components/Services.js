import React from "react";
import SharedStyles from "../styles/sharedStyles.js";

export default class Services extends React.Component {
	constructor(props){
		super(props);
		this.state = {toggleText: "therapy"};
	}
	handleClick(event){
		event.preventDefault();
		console.log("clicked");
		console.log(event.target.alt);
		this.setState({toggleText: event.target.alt});
	}
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>Service Details</h2>
					</div>
				</div>
				<div className="row" style={SharedStyles.paragraphRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h3 style={SharedStyles.paragraphStyles}>{texts.mainParagraph}</h3>
					</div>
				</div>
				<div className="row" style={SharedStyles.altParagraphRowStyles}>
					<ul className="list-unstyled">
						<li className="col-sm-offset-3 col-sm-2" style={serviceLinkStyles}><a href="#" onClick={this.handleClick.bind(this)}><img src={"app/assets/logos/logo-sm.jpg"} alt="therapy" height={70} className="img-circle"/></a><p>Therapy</p></li>
						<li className="col-sm-2" style={serviceLinkStyles}><a href="#" onClick={this.handleClick.bind(this)}><img src={"app/assets/logos/logo-sm.jpg"} alt="evaluation" height={70} className="img-circle"/></a><p>Evaluation</p></li>
						<li className="col-sm-2" style={serviceLinkStyles}><a href="#" onClick={this.handleClick.bind(this)}><img src={"app/assets/logos/logo-sm.jpg"} alt="consultation" height={70} className="img-circle"/></a><p>Consultation</p></li>
					</ul>
					<div className="col-sm-offset-2 col-sm-8">
						<h4 style={textToggleStyles}>{texts[this.state.toggleText]}</h4>
					</div>
				</div>
			</div>
		);
	}
}


let rowStyle = {
	maxWidth: "992px"
};

let colFlexStyle = {
	display: "flex",
	flexFlow: "row nowrap"
};

let serviceLinkStyles = {
	fontSize: "1.5em",
	padding: "20px",
	color: "white"
};

let textToggleStyles = {
	lineHeight: "1.5",
	backgroundColor: "#FFF8E1",
	borderRadius: "30px",
	padding: "30px 30px"
}

let texts = {
	mainParagraph: "Services offered include evaluation, intervention, and consultation for disorders of speech (i.e., articulation, fluency, resonance, voice) and language (i.e., phonology, morphology, syntax, semantics, and pragmatics) in pediatric, adolescent, adult, and geriatric populations. Communication-related cognitive rehabilitation services in improving attention, memory, and executive functioning (e.g., problem-solving, reasoning, planning) are also offered to clients with neurogenic impairments secondary to acquired brain injury and/or stroke.",
	therapy: "Therapy sessions are provided by speech-language pathologists (SLPs). Clients are typically seen individually, (1:1), and small group sessions can be arranged depending on the client's needs. Sessions are 60 minutes in duration, with 50 minutes of direct therapy followed by 10 minutes of documentation and discussion.",
	evaluation: "Comprehensive speech/language evaluation. A comprehensive evaluation is conducted to determine what (if any) communication disorders exist. The SLP will collect client history and information through an interview with the client/caregivers. A battery of formal, standardized tests and informal/dynamic assessment measures will be utilized. This is typically a 1.5- to 2-hour process (3-hour maximum). After compiling the data, scoring the tests, interpreting the results, and writing an assessment report, the SLP will schedule a follow-up appointment to explain the findings to the client/caregiver and determine the next best plan of treatment, if needed.",
	consultation: "Consultation. A consultation refers to a review of the client's previous reports, informal observation of the client, discussion with the client/caregiver about concerns, and input from the SLP as to the next best course of action. This is a 60-minute service, and no reports are provided with a consultative appointment. If a recommended comprehensive evaluation is scheduled with our practice within 60 days following the consultation, we will deduct the consultation fee from the total fee for the assessment."
};
