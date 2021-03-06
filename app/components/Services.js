import React from "react";
import Radium from "radium";
import SharedStyles from "../styles/sharedStyles.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavigationActions from "../actions/NavigationActions";
var Link = require('react-router').Link;
Link = Radium(Link);

class Services extends React.Component {
	constructor(props){
		super(props);
		this.state = {toggleText: "therapy"};
	}
	handleClick(event){
		event.preventDefault();
		this.setState({toggleText: event.target.id});
	}
	handleClickAbout(){
		NavigationActions.updateSelectedNav("ABOUT US");
		window.scrollTo(0,0);
	}
	handleClickContact(){
		NavigationActions.updateSelectedNav("CONTACT");
		window.scrollTo(0,0);
	}
	setIconStyles(text){
		var padding, color;
		if(this.state.toggleText === text){
			padding = "15px";
			color = "#2E7D32";
		}else {
			padding = "10px";
			color = "transparent";
		}

		return{
			fontSize: "3.5em",
			backgroundColor: color,
			borderRadius: "50%",
			padding: padding,
			color: SharedStyles.altColor,
			transition: 'all 0.3s ease-out',
			':hover': {
				color: "#ECEFF1"
			}
		};
	}
	render(){

		return (
			<div>
				<div className="container-fluid" style={SharedStyles.mainStyles}>
					<div className="row" style={SharedStyles.titleRowStyles}>
						<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
							<h2 style={SharedStyles.titleStyles}>Service Details</h2>
						</div>
					</div>
				</div>
				<div className="container" style={SharedStyles.mainStyles}>
					<div className="row" style={SharedStyles.paragraphRowStyles}>
						<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
							<h4 style={inline.paragraphStyles}>{texts.mainParagraph}</h4>
							<br/>
							<h4 style={inline.paragraphStyles}>{texts.mainParagraphAddOn}</h4>
						</div>
					</div>
				</div>
				<div className="container-fluid" style={SharedStyles.mainStyles}>
					<div className="row" style={SharedStyles.altParagraphRowStyles}>
						<div style={SharedStyles.maxWidth}>
						<ul className="list-unstyled">
							<li className="col-xs-4 col-sm-offset-3 col-sm-2" style={inline.serviceLinkStyles}><a href="#" onClick={this.handleClick.bind(this)}><i className="material-icons" id="therapy" key="therapy" style={this.setIconStyles("therapy")}>local_florist</i></a><p style={{borderBottom:this.state.toggleText==="therapy" ? "2px solid white" : "none", color: SharedStyles.altColor}}>Therapy</p></li>
							<li className="col-xs-4 col-sm-2" style={inline.serviceLinkStyles}><a href="#" onClick={this.handleClick.bind(this)}><i className="material-icons" id="evaluation" key="evaluation" style={this.setIconStyles("evaluation")}>assignment</i></a><p style={{borderBottom:this.state.toggleText==="evaluation" ? "2px solid white" : "none", color: SharedStyles.altColor}}>Evaluation</p></li>
							<li className="col-xs-4 col-sm-2" style={inline.serviceLinkStyles}><a href="#" onClick={this.handleClick.bind(this)}><i className="material-icons" id="consultation" key="consultation" style={this.setIconStyles("consultation")}>record_voice_over</i></a><p style={{borderBottom:this.state.toggleText==="consultation" ? "2px solid white" : "none", color: SharedStyles.altColor}}>Consultation</p></li>
						</ul>
						<div className="col-xs-12 col-sm-offset-2 col-sm-8">
							<h4 style={inline.textToggleStyles}>
								<ReactCSSTransitionGroup transitionName="toggleText" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
									{texts[this.state.toggleText]}
								</ReactCSSTransitionGroup>
							</h4>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row" style={SharedStyles.paragraphRowStyles}>
						<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
							<h2 style={inline.paragraphStyles}><span style={inline.settingStyles}>Therapy Settings</span></h2>
						</div>
					</div>
					<div className="row" style={SharedStyles.paragraphRowStyles}>
						<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
							<h4 style={inline.paragraphStyles}>{texts.settingIntro}</h4>
						</div>
					</div>
					<div >
						<ul className="list-unstyled">
							<li style={inline.serviceLinkStyles}><div className="row"><div><i className="material-icons clearfix col-sm-2" style={inline.settingIconStyles}>home</i></div><div><p style={inline.settingPStyles} className="col-sm-10">{texts.settingHome}</p></div></div></li>
							<li style={inline.serviceLinkStyles}><div className="row"><i className="material-icons clearfix col-sm-2" style={inline.settingIconStyles}>store_mall_directory</i><p style={inline.settingPStyles} className="col-sm-10">{texts.settingClinic}</p></div></li>
							<li style={inline.serviceLinkStyles}><div className="row"><i className="material-icons clearfix col-sm-2" style={inline.settingIconStyles}>domain</i><p style={inline.settingPStyles} className="col-sm-10">{texts.settingCommunity}</p></div></li>
							<li style={inline.serviceLinkStyles}><div className="row"><i className="material-icons clearfix col-sm-2" style={inline.settingIconStyles}>computer</i><p style={inline.settingPStyles} className="col-sm-10">{texts.settingTeletherapy}</p></div></li>
						</ul>
					</div>
					<div style={SharedStyles.bottomPadding}></div>
					<div className="row" style={SharedStyles.paragraphRowStyles}>
						<div style={{marginBottom: '50px'}} className="col-md-offset-1 col-md-5 " onClick={this.handleClickAbout.bind(this)}>
							<Link style={inline.navLinkStyles} key='nav1' className="navLink" to='/about'>
								<h3 style={inline.paragraphStyles}>{texts.linkToAbout}</h3>
								<h4 style={inline.paragraphStyles}>And what our clients say about us</h4>
								<h4 className="navLinkTitle">About ></h4>
							</Link>
						</div>
						<div style={{marginBottom: '50px'}} className="col-md-5" onClick={this.handleClickContact.bind(this)}>
							<Link  style={inline.navLinkStyles} key='nav2' className="navLink" to='/contact'>
								<h3 style={inline.paragraphStyles}>{texts.linkToContact}</h3>
								<h4 style={inline.paragraphStyles}>Book a free, 30-minute consultation with us!</h4>
								<h4 className="navLinkTitle">Contact ></h4>
							</Link>
						</div>
					</div>
				</div>
				</div>
			</div>
		);
	}
}

export default Radium(Services);

let inline = {
	paragraphStyles: {
		lineHeight: SharedStyles.lineHeight,
		textAlign: "center",
		color: "gray"
	},
	textToggleStyles: {
		lineHeight: SharedStyles.lineHeight,
		backgroundColor: SharedStyles.altColor,
		borderRadius: "30px",
		padding: "30px 30px",
		transition: "all 1s ease"
	},
	settingStyles: {
		border: "2px solid gray",
		padding: "10px 25px",
		borderRadius: "10px"
	},
	serviceLinkStyles: {
		fontSize: "1.35em",
		padding: "20px",
		color: "gray"
	},
	settingIconStyles: {
		fontSize: "3.5em"
	},
	settingPStyles: {
		textAlign: "left"
	},
	navLinkStyles: {
		':hover': {
			textDecoration: 'none'
		},
		':focus': {
			textDecoration: 'none'
		}
	}
}

let texts = {
	mainParagraph: <span>Services offered include <strong>Therapy, Evaluation,</strong> and <strong>Consultation</strong> for disorders of speech (i.e., articulation, fluency, resonance, voice) and language (i.e., phonology, morphology, syntax, semantics, and pragmatics) in pediatric, adolescent, adult, and geriatric populations. Communication-related cognitive rehabilitation services in improving attention, memory, and executive functioning (e.g., problem-solving, reasoning, planning) are also offered to clients with neurogenic impairments secondary to acquired brain injury and/or stroke.</span>,
	mainParagraphAddOn: <span>Bilingual services in <strong>Mandarin Chinese</strong> and <strong>Spanish</strong> are also offered.</span>,
	therapy: <span key='therapy'>Therapy sessions are provided by speech-language pathologists (SLPs). Clients are typically seen individually, (1:1), and small group sessions can be arranged depending on the client's needs. Sessions are 60 minutes in duration, with 50 minutes of direct therapy followed by 10 minutes of documentation and discussion.</span>,
	evaluation: <span key='evaluation'>A comprehensive evaluation is conducted to determine what (if any) communication disorders exist. The SLP will collect client history and information through an interview with the client/caregivers. A battery of formal, standardized tests and informal/dynamic assessment measures will be utilized. This is typically a 1.5- to 2-hour process (3-hour maximum). After compiling the data, scoring the tests, interpreting the results, and writing an assessment report, the SLP will schedule a follow-up appointment to explain the findings to the client/caregiver and determine the next best plan of treatment, if needed.</span>,
	consultation: <span key='consultation'>A consultation refers to a review of the client's previous reports, informal observation of the client, discussion with the client/caregiver about concerns, and input from the SLP as to the next best course of action. This is a 60-minute service, and no reports are provided with a consultative appointment. If a recommended comprehensive evaluation is scheduled with our practice within 60 days following the consultation, we will deduct the consultation fee from the total fee for the assessment.</span>,
	settingIntro: <span>Therapy services can be provided in a variety of settings.  <a target="_blank" href="http://www.asha.org/Research/EBP/">Evidence-based practice (EBP)</a> is used across all settings, and is the integration of (1) clinical expertise/expert opinion, (2) external scientific evidence, and (3) client/patient/caregiver perspectives to provide high-quality services, reflecting the interests, values, needs, and choices of the individuals served. </span>,
	settingHome: <span><strong>HOME</strong> - A home-based therapy session is provided in the client's home.  It may be helpful for clients who work well in their natural environment.  We use a routines-based approach, which is family-centered, involving family members such as parents, caregivers, and siblings.  </span>,
	settingClinic: <span><strong>CLINIC</strong> - A clinic setting may be helpful for clients who (1) perform better in a structured setting, (2) benefit from using a wide variety of therapy tools and instruments, and/or (3) may be distracted by objects in the home.</span>,
	settingCommunity: <span><strong>COMMUNITY</strong> - Therapy can take place in the community, which lends to the opportunity to work on generalizing functional speech and language skills in a variety of settings.  This may include places that the client frequently visits, such as the library, grocery store, restaurant, city bus, etc.  This setting is particularly helpful for clients focused on community reintegration.</span>,
	settingTeletherapy: <span><strong>TELETHERAPY</strong> - Therapy services can also be provided over the internet by video call.  This type of therapy is done individually between the therapist and one client.  </span>,
	linkToContact: <span>Questions or concerns?</span>,
	linkToAbout: <span>Who We Are.</span>
};
