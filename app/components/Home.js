import React from "react";
import List from "./shared/list.js";
import SharedStyles from "../styles/sharedStyles.js";
import Radium from "radium";
import NavigationActions from "../actions/NavigationActions";
var Link = require('react-router').Link;
Link = Radium(Link);	//Needs to be wrapped in Radium due to Raidum not working with all components

class Home extends React.Component {
	handleServiceClick(e){
		NavigationActions.updateSelectedNav("SERVICES");
		window.scrollTo(0, document.body.scrollHeight);
	}
	handleDisorderClick(e){
		NavigationActions.updateSelectedNav("RESOURCES");
		window.scrollTo(0,0);
	}
	handleAboutClick(e){
		NavigationActions.updateSelectedNav("ABOUT US");
		window.scrollTo(0,0);
	}
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
						<h3 style={inline.paragraphStyle}>Our services are offered in a variety of settings in <strong>Renton, Issaquah and Bellevue</strong> areas of Washington State:</h3>
					</div>
				</div>
				<div className="row" style={inline.paragraphIcons}>
					<ul className="list-unstyled">
						<li className="col-xs-6 col-sm-3 col-md-3 col-lg-offset-2 col-lg-2" style={inline.serviceLinkStyles} onClick={this.handleServiceClick.bind(this)}>
							<Link to='/services' className='home'><i className="material-icons" style={inline.iconStyles} key='home-home'>home</i><p>Home<i className="material-icons" style={inline.iconAltStyles}>keyboard_arrow_right</i></p></Link>
						</li>
						<li className="col-xs-6 col-sm-3 col-md-3 col-lg-2" style={inline.serviceLinkStyles} onClick={this.handleServiceClick.bind(this)}>
							<Link to='/services' className='clinic'><i className="material-icons" style={inline.iconStyles} key='home-clinic'>store_mall_directory</i><p>Clinic<i className="material-icons" style={inline.iconAltStyles}>keyboard_arrow_right</i></p></Link>
						</li>
						<li className="col-xs-6 col-sm-3 col-md-3 col-lg-2" style={inline.serviceLinkStyles} onClick={this.handleServiceClick.bind(this)}>
							<Link to='/services' className='community'><i className="material-icons" style={inline.iconStyles} key='home-community'>domain</i><p>Community<i className="material-icons" style={inline.iconAltStyles}>keyboard_arrow_right</i></p></Link>
						</li>
						<li className="col-xs-6 col-sm-3 col-md-3 col-lg-2" style={inline.serviceLinkStyles} onClick={this.handleServiceClick.bind(this)}>
							<Link to='/services' className='teletherapy'><i className="material-icons" style={inline.iconStyles} key='home-teletherapy'>computer</i><p>Teletherapy<i className="material-icons" style={inline.iconAltStyles}>keyboard_arrow_right</i></p></Link>
						</li>
					</ul>
				</div>
				<div style={SharedStyles.topPadding}></div>
				<div className="row" style={SharedStyles.altParagraphRowStyles}>
					<div className="col-md-offset-1 col-md-5 col-lg-offset-2 col-lg-4">
						<h3 style={SharedStyles.titleStyles}>What We Specialize In:</h3>
						<div style={inline.linkDiv} onClick={this.handleDisorderClick}>
							<Link to='/client-resources/common-disorders' style={inline.linkStyles}>
								<h4 style={inline.linkText}>Learn more about<p style={{fontSize: '0.7em'}}><strong>Common Language Disorders</strong></p></h4>
								<List data={data.specialize} ulStyles={dataUlStyles} liStyles={dataLiStyles} />
							</Link>
						</div>
					</div>
					<div className="col-md-5 col-lg-4">
						<h3 style={SharedStyles.titleStyles}>What We Offer:</h3>
						<div style={inline.linkDiv} onClick={this.handleAboutClick}>
							<Link to='/about' style={inline.linkStyles}>
								<h4 style={inline.linkText}>Get to know us at<p style={{fontSize: '0.7em'}}><strong>Language Liftoff !</strong></p></h4>
								<List data={data.offer} ulStyles={dataUlStyles} liStyles={dataLiStyles} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Radium(Home);


let inline = {
	paragraphStyle: {
		lineHeight: SharedStyles.lineHeight,
		margin: "40px 0"
	},
	iconStyles: {
		fontSize: "3.5em",
		transform: 'scale(1)',
		transition: "all 0.3s ease",
		color: "gray",
		':hover': {
			transform: 'scale(1.1)'
		}
	},
	iconAltStyles: {
		position: "absolute",
		marginTop: "5px"
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
		textDecoration: "none",
		color: "gray",
		borderRadius: "30px",
		transition: "all 0.5s ease",
		display: 'block',
		opacity: '1',
		':hover': {
			backgroundColor: "black",
			opacity: '0.6'
		}
	},
	linkText: {
		fontSize: '1.8em',
		position: 'absolute',
		top: '45%',
		left: '20%',
		right: '20%',
		zIndex: '-1',
		lineHeight: '1.8',
		color: 'orange'
	},
	linkDiv: {
		posiiton: 'relative'
	}
}


let text = {
	title: "Speech and Language Therapy Services For All",
	intro: <span>Using evidence-based practices, we pride ourselves in providing caring and effective Speech and Language Therapy Services, and tailoring treatment plans to individual client needs!</span>,
	icontext: ["Our SLP can come to the client's home"]
};

let dataUlStyles = {
	backgroundColor: SharedStyles.altColor,
	borderRadius: "30px",
	padding: "10px 50px",
	textAlign: "left",
	':hover': {
		opacity: '0'
	}
};

let dataLiStyles = {

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
