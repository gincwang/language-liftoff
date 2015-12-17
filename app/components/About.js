import React from "react";
import SharedStyles from "../styles/sharedStyles.js";

export default class About extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>Who We Are</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-offset-1 col-sm-10 col-lg-offset-3 col-lg-6" style={inline.paragraphRowStyle}>
						<h4 style={inline.paragraphStyle}>{text.mainParagraph1}</h4>
						<h4 style={inline.paragraphStyle}>{text.mainParagraph2}</h4>
					</div>
				</div>
				<div className="row" style={inline.therapistRowStyle}>
					<div className="col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6">
						<h2>{text.therapistTitle}</h2>
					</div>
				</div>
				<div className="row" style={inline.therapistRowStyle}>
					<div className="col-xs-offset-3 col-xs-6 col-sm-offset-0 col-sm-4 col-md-offset-1 col-md-2"><img className="img-responsive" style={inline.photoStyle} src={"app/assets/slp/jasmin.jpg"} alt="slp" height={400} /></div>
					<div className="col-xs-12 col-sm-8 col-md-8"><h4 style={inline.therapistParagraphStyle}>{text.therapistIntro}</h4></div>
					<div className="col-xs-12 col-sm-8 col-md-12 col-lg-8"><h4 style={inline.therapistParagraphStyle}>{text.therapistMain}</h4></div>
				</div>
			</div>
		);
	}	
}

let inline = {
	paragraphStyle: {
		lineHeight: SharedStyles.lineHeight,
		padding: "10px 0"
	},
	paragraphRowStyle: {
		padding: "10px 0"
	},
	therapistTitleStyle: {
		border: "2px solid white",
		padding: "10px 25px",
		borderRadius: "10px"
	},
	photoStyle: {
		margin: "40px 0 0 0",
		border: "5px solid white",
		borderRadius: "20px"
	},
	therapistRowStyle: {
		padding: "30px 0",
		color: SharedStyles.altColor,
		backgroundColor: SharedStyles.mainColor
	},
	therapistParagraphStyle: {
		textAlign: "left",
		padding: "10px 0",
		lineHeight: "1.5"
	}

};

let text = {
	title: "Speech and Language Services For All",
	mainParagraph1: "Language Liftoff is a growing speech-language pathology private practice providing home-based, clinic, and telepractice speech and language services to clients in the Eastside Seattle suburbs of King County. We offer a wide range of services that enable our clients to reach their full potential and become successful communicators in the home, school, work, and community settings.",
	mainParagraph2: "We pride ourselves in providing high quality services and differential diagnoses, utilizing evidence-based methods, assessment tools, training, and resources/materials. Caring and effective services are our utmost priority!",
	therapistTitle: <span style={inline.therapistTitleStyle}>Our Therapists</span>,
	therapistIntro: <span><p><strong>Jasmin W. Wang</strong></p><p>M.A., CCC-SLP</p>Jasmin is a certified and licensed multilingual speech-language pathologist.  She graduated from the University of California, San Diego with a B.A. in Human Development and an emphasis in Linguistics and Cognitive Science.  Jasmin received her postgraduate degree in Speech and Language Pathology at San Jose State University.</span>,
	therapistMain: <span>Jasmin is experienced in working in a variety of settings, including private practice, public schools, rehabilitation centers, and telepractice (teletherapy).  She is also experienced in working with a wide age range of clients, including the early childhood population (ages 2-5), school-aged children and adolescents in elementary and secondary programs, and adults.  Jasmin has specialized knowledge in the areas of cognitive-communication disorders, neurogenic speech and language disorders, articulation/phonological disorders, receptive-expressive language disorders, autism spectrum disorder (ASD), and fluency/stuttering.  In addition, Jasmin also has a background in applied behavior analysis (ABA) therapy, foreign language instruction, teaching English as a second language, and literacy instruction.</span>
};
