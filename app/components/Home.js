import React from "react";
import HomeAttributeList from "./HomeAttributeList.js";

class Home extends React.Component {
	render(){
		return (
			<div className="container" style={mainStyles}>
				<div className="row">
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<br/>
						<h2 style={titleStyle}>Speech and Language Services For All</h2>
						<br/>
						<h4 style={paragraphStyle}>Language Liftoff is a growing speech-language pathology private practice providing <strong>home-based, clinic, and telepractice</strong> speech and language services to clients in the Eastside Seattle suburbs of King County. We offer a wide range of services that enable our clients to reach their full potential and become successful communicators in the home, school, work, and community settings.</h4>
						<br/>
						<h4 style={paragraphStyle}>We pride ourselves in providing high quality services and differential diagnoses, utilizing evidence-based methods, assessment tools, training, and resources/materials. Caring and effective services are our utmost priority!</h4>
					</div>
				</div>
				<br/>
				<div className="row">
					<div className="col-md-offset-1 col-md-4 col-md-offset-1">
						<h3 style={titleStyle}>What We Specialize :</h3>
						<HomeAttributeList data={data.specialize}/>
					</div>
					<div className="col-md-offset-1 col-md-4 col-md-offset-1">
						<h3 style={titleStyle}>What We Offer :</h3>
						<HomeAttributeList data={data.offer}/>
					</div>
				</div>
			</div>
		);
	}	
}

let mainStyles = {
	textAlign: "center",
	color: "#9E9E9E"
};

let titleStyle = {
	color: "black",
	paddingBottom: "10px",
	borderBottom: "1px solid black"
};


let paragraphStyle = {
	lineHeight: "1.5"
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
		"The speech-language pathologist (SLP) should have a warm and positive connection with the client.",
		"Therapy should be creative, goal-oriented, and hierarchal. It should be individually tailored to the client's unique needs.",
		"Client's family members and/or caregivers should feel comfortable observing the sessions and later discussing any questions with the SLP.",
		"The SLP should explain why he/she is doing the activities with the client, and how speech/language skills can be practiced and reinforced at home or in the community",
		"While part of the therapy process requires effort from the client's part and may sometimes be challenging, it should also be fun, functional, and motivating."
	]
};

export default Home;