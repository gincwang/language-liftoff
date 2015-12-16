import React from "react";
import HomeAttributeList from "./HomeAttributeList.js";
import SharedStyles from "../styles/sharedStyles.js";

class Home extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>{text.title}</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-offset-3 col-md-6" >
						<h3 style={inline.paragraphStyle}>{text.intro}</h3>
						<hr style={inline.hrStyles}/>
						<h3 style={inline.paragraphStyle}>Our services are offered in a variety of settings:</h3>
					</div>
				</div>
				<div className="row" style={SharedStyles.paragraphRowStyles}>
					<ul className="list-unstyled">
						<li className="col-sm-3 col-md-3 col-lg-offset-2 col-lg-2" style={inline.serviceLinkStyles}><i className="material-icons" style={inline.iconStyles}>home</i><p>Home</p></li>
						<li className="col-sm-3 col-md-3 col-lg-2" style={inline.serviceLinkStyles}><i className="material-icons" style={inline.iconStyles}>store_mall_directory</i><p>Clinic</p></li>
						<li className="col-sm-3 col-md-3 col-lg-2" style={inline.serviceLinkStyles}><i className="material-icons" style={inline.iconStyles}>domain</i><p>Community</p></li>
						<li className="col-sm-3 col-md-3 col-lg-2" style={inline.serviceLinkStyles}><i className="material-icons" style={inline.iconStyles}>computer</i><p>Teletherapy</p></li>
					</ul>					
				</div>
				<div className="row" style={SharedStyles.altParagraphRowStyles}>
					<div className="col-md-offset-1 col-md-5 col-lg-offset-2 col-lg-4">
						<h3 style={SharedStyles.titleStyles}>What We Specialize In:</h3>
						<HomeAttributeList data={data.specialize}/>
					</div>
					<div className="col-md-5 col-lg-4">
						<h3 style={SharedStyles.titleStyles}>What We Offer:</h3>
						<HomeAttributeList data={data.offer}/>
					</div>
				</div>
			</div>
		);
	}	
}

let inline = {
	paragraphStyle: {
		lineHeight: SharedStyles.lineHeight,
		marginTop: "20px"
	},
	iconStyles: {
		fontSize: "3.5em"
	},
	serviceLinkStyles: {
		fontSize: "1.5em",
		padding: "20px",
		color: "black"
	},
	hrStyles: {
		width: "70%",
		borderTop: "1px solid gray",
		borderBottom: "1px solid lightGray"
	}
}


let text = {
	title: "Speech and Language Services For All",
	intro: "Using evidence-based practices, we pride ourselves in providing caring and effective services and tailoring treatment plans to individual client needs!",
	icontext: ["Our SLP can come to the client's home"]
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
		"Challenging therapy process that is also fun, functional, and motivating to the clients.",

	]
};

export default Home;