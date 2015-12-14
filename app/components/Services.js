import React from "react";
import SharedStyles from "../styles/sharedStyles.js";

class Services extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<br/>
						<h2 style={SharedStyles.titleStyles}>Service Details</h2>
						<br/>
					</div>
				</div>
				<div className="row" style={SharedStyles.paragraphRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h3 style={SharedStyles.paragraphStyles}>{texts.mainParagraph}</h3>
					</div>
				</div>
				<br/>
				<br/>
				<br/>
				<div className="row" style={rowStyle}>
					<ul className="list-unstyled">
						<li className="col-md-4" style={serviceButtonStyles}><img src={"app/assets/logos/logo-sm.jpg"} alt="logo" height={50} /><p>Therapy</p></li>
						<li className="col-md-4" style={serviceButtonStyles}><img src={"app/assets/logos/logo-sm.jpg"} alt="logo" height={50} /><p>Evaluation</p></li>
						<li className="col-md-4" style={serviceButtonStyles}><img src={"app/assets/logos/logo-sm.jpg"} alt="logo" height={50} /><p>Consultation</p></li>
					</ul>
				</div>
				<div className="row">
					<div className="col-md-offset-2 col-md-8">
						<h4>{texts.therapy}</h4>
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

let serviceButtonStyles = {
	fontSize: "1.5em"
};

let texts = {
	mainParagraph: "Services offered include evaluation, intervention, and consultation for disorders of speech (i.e., articulation, fluency, resonance, voice) and language (i.e., phonology, morphology, syntax, semantics, and pragmatics) in pediatric, adolescent, adult, and geriatric populations. Communication-related cognitive rehabilitation services in improving attention, memory, and executive functioning (e.g., problem-solving, reasoning, planning) are also offered to clients with neurogenic impairments secondary to acquired brain injury and/or stroke.",
	therapy: "Therapy sessions are provided by speech-language pathologists (SLPs). Clients are typically seen individually, (1:1), and small group sessions can be arranged depending on the client's needs. Sessions are 60 minutes in duration, with 50 minutes of direct therapy followed by 10 minutes of documentation and discussion.",
	evaluation: "",
	consultation: ""
};

export default Services;