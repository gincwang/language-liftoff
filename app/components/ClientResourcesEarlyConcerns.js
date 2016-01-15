import React from 'react';
import SharedStyles from "../styles/sharedStyles";

class ClientResourcesEarlyConcerns extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let paragraphStyles = {
			lineHeight: SharedStyles.lineHeight,
			textAlign: "left",
			padding: "5px 0"
		};

		let altStyles = {
			lineHeight: SharedStyles.lineHeight,
			textAlign: "center",
			padding: "5px 50px",
			fontStyle: "italic"
		};

		return (
			<div className='container-fluid' style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>{contentTitle}</h2>
					</div>
				</div>
				<div style={SharedStyles.topPadding}></div>
				<div className="row">
					<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
						<h4 style={paragraphStyles}>{contentText[0]}</h4>
						<h4 style={altStyles}>{contentText[1]}</h4>
						<h4 style={paragraphStyles}>{contentText[2]}</h4>
						<h4 style={paragraphStyles}>{contentText[3]}</h4>
					</div>
				</div>
				<div style={SharedStyles.bottomPadding}></div>
				<div className="row">
					<div className="col-sm-12">
						<h6 style={SharedStyles.referenceStyle}>Information obtained from <span style={{fontStyle: "italic"}}>American Speech-Language-Hearing Association</span> <a href="http://www.asha.org" target="_blank">(http://www.asha.org)</a></h6>
					</div>
				</div>
			</div>
		);
	}
}

export default ClientResourcesEarlyConcerns;

var contentTitle = <span>Early Detection of Speech, Language, and Hearing Disorders</span>;

var contentText = [<span>Do you have a child 3 years old or younger? Are you worried because your child doesn't seem to listen? Has your child started to say any words? Does your child cry a lot or have tantrums? Your child may have early signs of a speech, language, or hearing disorder.</span>,
<span>"My 2½-year-old, Evan, doesn't talk at all. He doesn't respond when I call his name. He turns the pages of a book, but doesn't pay any attention when I read to him. He shows me what he wants, but doesn't use words. He doesn't do what I ask him to do. He gets upset when I don't understand him. Is this normal? Does he just need more time to catch up?"</span>,
<span>Don't wait and hope your child will outgrow a communication problem. Early detection leads to early treatment. The earlier you get help for your child, the better. </span>,
<span>Speech-language pathologists (SLPs) and audiologists can help your infant or toddler who has a speech, language, or hearing disorder. SLPs help with <strong>language disorders, speech sound disorders, stuttering (disfluency), and voice disorders.</strong></span>
];