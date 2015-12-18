import React from "react";
import List from "./shared/list.js";
import SharedStyles from "../styles/sharedStyles.js";
import Radium from "radium";
var Link = require('react-router').Link;
Link = Radium(Link);	//Needs to be wrapped in Radium due to Raidum not working with all components

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
					<div className="col-md-offset-2 col-md-8" >
						<h3 style={inline.paragraphStyle}>{text.intro}</h3>
						<hr style={inline.hrStyles}/>
						<h3 style={inline.paragraphStyle}>Our services are offered in a variety of settings:</h3>
					</div>
				</div>
				<div className="row" style={inline.paragraphIcons}>
					<ul className="list-unstyled">
						<li className="col-sm-3 col-md-3 col-lg-offset-2 col-lg-2" style={inline.serviceLinkStyles}><i className="material-icons" style={inline.iconStyles}>home</i><p>Home</p></li>
						<li className="col-sm-3 col-md-3 col-lg-2" style={inline.serviceLinkStyles}><i className="material-icons" style={inline.iconStyles}>store_mall_directory</i><p>Clinic</p></li>
						<li className="col-sm-3 col-md-3 col-lg-2" style={inline.serviceLinkStyles}><i className="material-icons" style={inline.iconStyles}>domain</i><p>Community</p></li>
						<li className="col-sm-3 col-md-3 col-lg-2" style={inline.serviceLinkStyles}><i className="material-icons" style={inline.iconStyles}>computer</i><p>Teletherapy</p></li>
					</ul>					
				</div>
				<div className="row" style={inline.linkStyles}>
					<Link to="/services"><h4>Learn more<i className="material-icons" style={inline.iconAltStyles}>play_arrow</i></h4></Link>
				</div>
				<div className="row" style={SharedStyles.altParagraphRowStyles}>
					<div className="col-md-offset-1 col-md-5 col-lg-offset-2 col-lg-4">
						<h3 style={SharedStyles.titleStyles}>What We Specialize In:</h3>
						<List data={data.specialize} ulStyles={dataUlStyles} liStyles={dataLiStyles} />
					</div>
					<div className="col-md-5 col-lg-4">
						<h3 style={SharedStyles.titleStyles}>What We Offer:</h3>
						<List data={data.offer} ulStyles={dataUlStyles} liStyles={dataLiStyles}/>
					</div>
				</div>
			</div>
		);
	}	
}

export default Home;


let inline = {
	paragraphStyle: {
		lineHeight: SharedStyles.lineHeight,
		margin: "40px 0"
	},
	iconStyles: {
		fontSize: "3.5em"
	},
	iconAltStyles: {
		position: "relative",
		top: "6px"
	},
	serviceLinkStyles: {
		fontSize: "1.5em",
		padding: "20px",
		color: "gray"
	},
	hrStyles: {
		width: "70%",
		borderTop: "1px solid gray",
		borderBottom: "1px solid lightGray"
	},
	paragraphIcons:{
		backgroundColor: SharedStyles.altColor
	},
	linkStyles: {
		margin: "20px 0"
	}
}


let text = {
	title: "Speech and Language Services For All",
	intro: <span>Using Evidence-Based Practices(EBP) we pride ourselves in providing caring and effective services, and tailoring treatment plans to individual client needs!</span>,
	icontext: ["Our SLP can come to the client's home"]
};

let dataUlStyles = {
	backgroundColor: SharedStyles.altColor,
	borderRadius: "30px",
	padding: "10px 50px"
};

let dataLiStyles = {
	textAlign: "left"
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
