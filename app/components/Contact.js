import React from "react";
import SharedStyles from "../styles/sharedStyles.js";
import FaqDiv from "./shared/faqDiv.js";

class Contact extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>Contact Info</h2>
					</div>
				</div>
				<div className="row" style={SharedStyles.paragraphRowStyles}>
					<div className="col-md-offset-1 col-md-10">
						<h4>Thank you for visiting us at Language Liftoff!</h4>
						<h4>Please feel free to contact us with any questions or service inquiries.</h4>
					</div>
				</div>
				<div className="row" style={SharedStyles.altParagraphRowStyles}>
					<div className="col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
						<ul style={inline.ulStyles}>
							<li><h4><span className="glyphicon glyphicon-earphone" style={SharedStyles.glyphiconStyles}></span> : <a href="tel:4253954671" style={inline.linkStyles}>425-395-4671</a></h4></li>
							<li><h4><span className="glyphicon glyphicon-envelope" style={SharedStyles.glyphiconStyles}></span> : <a href="mailto:services@languageliftoff.com?subject=Speech%20Inquiries" style={inline.linkStyles}>services@languageliftoff.com</a></h4></li>
							<li><h4><i className="material-icons" style={inline.iconStyles}>store_mall_directory</i> : <a target="_blank" style={inline.linkStyles} href="https://www.google.com/maps/place/Renton,+WA+98059/@47.4994156,-122.1465083,13z/data=!3m1!4b1!4m2!3m1!1s0x5490662246c4d82b:0x193c3cf558507015">Renton, WA 98059</a></h4></li>
							<li style={{marginTop: "20px"}}><h4><a href={"http://www.facebook.com/LanguageLiftoff"} target={"_blank"} ><img src={"app/assets/logos/fb/png/FB-FindUsonFacebook-online-114.png"} width={114} /></a></h4></li>
						</ul>
					</div>
				</div>
				<div className="row" style={SharedStyles.paragraphRowStyles}>
					<div className="col-md-offset-1 col-md-10">
						<h2><span style={inline.sectionTitleStyles}>FAQ</span></h2>
					</div>
				</div>
				<div className="row" style={{padding: "10px"}}>
					<div className="col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6">
						<FaqDiv faq={faq.one}/>
					</div>
					<div className="col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6">
						<FaqDiv faq={faq.two}/>
					</div>	
					<div className="col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6">
						<FaqDiv faq={faq.three}/>
					</div>														
				</div>
				<div style={SharedStyles.bottomPadding}></div>			
			</div>
		);
	}	
}

let inline = {
	ulStyles: {
		listStyle: "none",
		marginTop: "30px",
		backgroundColor: SharedStyles.altColor,
		borderRadius: "30px",
		padding: "15px 10px 20px"
	},
	linkStyles: {
		color: "#9E9E9E"
	},
	sectionTitleStyles: {
		borderRadius: "15px",
		border: "2px solid gray",
		padding: "10px 25px"
	},
	iconStyles: {
		verticalAlign: "middle"
	}
};

let faq = {
	one: {
		question: "What forms of payment are accepted?",
		answer: <span>We are in-network providers with <a target="_blank" href="https://www.premera.com/wa/visitor/">Premera Blue Cross.</a> We accept cash or check as payment.</span>
	},
	two: {
		question: "In which areas can in-home therapy services be provided?",
		answer: "We can provide in-home therapy services in the cities of Renton, Newcastle, Bellevue, Issaquah, Tukwila, and Kent."
	},
	three: {
		question: "Do you provide services in other languages?",
		answer: "We provide services in English, Mandarin Chinese, and Spanish."
	}
	
};

export default Contact;