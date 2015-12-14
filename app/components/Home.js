import React from "react";
import HomeAttributeList from "./HomeAttributeList.js";
import SharedStyles from "../styles/sharedStyles.js";

class Home extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<br/>
						<h2 style={SharedStyles.titleStyles}>{text.title}</h2>
						<br/>
					</div>
				</div>
				<div className="row" style={SharedStyles.paragraphRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h3 style={paragraphStyle}>{text.mainParagraph1}</h3>
						<br/>
						<h3 style={paragraphStyle}>{text.mainParagraph2}</h3>
						<br/>
					</div>
				</div>
				<div className="row" style={SharedStyles.altParagraphRowStyles}>
					<br/>
					<div className="col-md-offset-1 col-md-4 col-md-offset-1">
						<h3 style={SharedStyles.titleStyles}>What We Specialize In:</h3>
						<HomeAttributeList data={data.specialize}/>
					</div>
					<div className="col-md-offset-1 col-md-4 col-md-offset-1">
						<h3 style={SharedStyles.titleStyles}>What We Offer:</h3>
						<HomeAttributeList data={data.offer}/>
					</div>
				</div>
			</div>
		);
	}	
}


let paragraphStyle = {
	lineHeight: "1.5"
};

let text = {
	title: "Speech and Language Services For All",
	mainParagraph1: "Language Liftoff is a growing speech-language pathology private practice providing home-based, clinic, and telepractice speech and language services to clients in the Eastside Seattle suburbs of King County. We offer a wide range of services that enable our clients to reach their full potential and become successful communicators in the home, school, work, and community settings.",
	mainParagraph2: "We pride ourselves in providing high quality services and differential diagnoses, utilizing evidence-based methods, assessment tools, training, and resources/materials. Caring and effective services are our utmost priority!"
};

let data = {
	specialize: [
		"Autism Spectrum Disorders",
		"Articulation/speech sound disorders",
		"Fluency disorders (stuttering)",
		"Expressive and/or receptive language skills",
		"Specific language impairments",
		"Pragmatics/social language & cognition skills",
		"Auditory memory / auditory processing disorders",
		"Literacy and phonological awareness",
		"Aphasia",
		"Dysarthria",
		"Cognitive communication rehab for improved attention, memory, and executive functioning",
		"Augmentative and alternative communication (AAC)",
	],
	offer: [
		"Warm and positive connection with the client.",
		"Creative, goal-oriented, and hierarchal therapy that are tailored to each client's individual needs.",
		"Observations are welcomed anytime by client's family members and/or caregivers.",
		"Clear explanations of the activities during therapy, and how these skills can be applied and reinforced at home or in the community.",
		"Challenging therapy process that is also fun, functional, and motivating to the clients."
	]
};

export default Home;