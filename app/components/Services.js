import React from "react";
import Radium from "radium";
import SharedStyles from "../styles/sharedStyles.js";

class Services extends React.Component {
	constructor(props){
		super(props);
		this.state = {toggleText: "therapy"};
	}
	handleClick(event){
		event.preventDefault();
		console.log(event.target);
		this.setState({toggleText: event.target.id});
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
						<h4 style={inline.paragraphStyles}>{texts.mainParagraph}</h4>
					</div>
				</div>
				<div className="row" style={SharedStyles.altParagraphRowStyles}>
					<ul className="list-unstyled">
						<li className="col-sm-offset-3 col-sm-2" style={inline.serviceLinkStyles}><a href="#" onClick={this.handleClick.bind(this)}><i className="material-icons" id="therapy" key="therapy" style={inline.iconStyles}>local_florist</i></a><p style={{borderBottom:this.state.toggleText==="therapy" ? "2px solid white" : "none"}}>Therapy</p></li>
						<li className="col-sm-2" style={inline.serviceLinkStyles}><a href="#" onClick={this.handleClick.bind(this)}><i className="material-icons" id="evaluation" key="evaluation" style={inline.iconStyles}>assignment</i></a><p style={{borderBottom:this.state.toggleText==="evaluation" ? "2px solid white" : "none"}}>Evaluation</p></li>
						<li className="col-sm-2" style={inline.serviceLinkStyles}><a href="#" onClick={this.handleClick.bind(this)}><i className="material-icons" id="consultation" key="consultation" style={inline.iconStyles}>record_voice_over</i></a><p style={{borderBottom:this.state.toggleText==="consultation" ? "2px solid white" : "none"}}>Consultation</p></li>
					</ul>
					<div className="col-sm-offset-2 col-sm-8">
						<h4 style={inline.textToggleStyles}>{texts[this.state.toggleText]}</h4>
					</div>
				</div>
			</div>
		);
	}
}


let inline = {
	paragraphStyles: {
		lineHeight: SharedStyles.lineHeight
	},
	textToggleStyles: {
		lineHeight: SharedStyles.lineHeight,
		backgroundColor: SharedStyles.altColor,
		borderRadius: "30px",
		padding: "30px 30px"
	},
	iconStyles: {
		fontSize: "3.5em",
		color: SharedStyles.altColor,
		':hover': {
			color: "#ECEFF1"
		}
	},
	serviceLinkStyles: {
		fontSize: "1.5em",
		padding: "20px",
		color: SharedStyles.altColor
	}
}


let texts = {
	mainParagraph: "Services offered include evaluation, intervention, and consultation for disorders of speech (i.e., articulation, fluency, resonance, voice) and language (i.e., phonology, morphology, syntax, semantics, and pragmatics) in pediatric, adolescent, adult, and geriatric populations. Communication-related cognitive rehabilitation services in improving attention, memory, and executive functioning (e.g., problem-solving, reasoning, planning) are also offered to clients with neurogenic impairments secondary to acquired brain injury and/or stroke.",
	therapy: "Therapy sessions are provided by speech-language pathologists (SLPs). Clients are typically seen individually, (1:1), and small group sessions can be arranged depending on the client's needs. Sessions are 60 minutes in duration, with 50 minutes of direct therapy followed by 10 minutes of documentation and discussion.",
	evaluation: "A comprehensive evaluation is conducted to determine what (if any) communication disorders exist. The SLP will collect client history and information through an interview with the client/caregivers. A battery of formal, standardized tests and informal/dynamic assessment measures will be utilized. This is typically a 1.5- to 2-hour process (3-hour maximum). After compiling the data, scoring the tests, interpreting the results, and writing an assessment report, the SLP will schedule a follow-up appointment to explain the findings to the client/caregiver and determine the next best plan of treatment, if needed.",
	consultation: "A consultation refers to a review of the client's previous reports, informal observation of the client, discussion with the client/caregiver about concerns, and input from the SLP as to the next best course of action. This is a 60-minute service, and no reports are provided with a consultative appointment. If a recommended comprehensive evaluation is scheduled with our practice within 60 days following the consultation, we will deduct the consultation fee from the total fee for the assessment."
};


export default Radium(Services);
