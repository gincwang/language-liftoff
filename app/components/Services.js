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
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h3 style={SharedStyles.paragraphStyles}>Services offered include evaluation, intervention, and consultation for disorders of speech (i.e., articulation, fluency, resonance, voice) and language (i.e., phonology, morphology, syntax, semantics, and pragmatics) in pediatric, adolescent, adult, and geriatric populations. Communication-related cognitive rehabilitation services in improving attention, memory, and executive functioning (e.g., problem-solving, reasoning, planning) are also offered to clients with neurogenic impairments secondary to acquired brain injury and/or stroke.</h3>
					</div>
				</div>
				<br/>
				<br/>
				<br/>
				<div className="row">
					<div className="col-lg-offset-1 col-lg-3" style={colFlexStyle}>
						<button style={serviceButtonStyles}>Therapy</button>
						<button style={serviceButtonStyles}>Evaluation</button>
						<button style={serviceButtonStyles}>Consultation</button>
					</div>
					<div className="col-lg-7">
						<h3>Content</h3>
					</div>
				</div>
			</div>
		);
	}
}


let colFlexStyle = {
	display: "flex",
	flexFlow: "column nowrap"
};

let serviceButtonStyles = {
	height: "60px",
	color: "black",
	fontSize: "1.5em"
};

export default Services;