import React from 'react';

export default class FaqDiv extends React.Component {
	render(){
		let divStyle = {
			textAlign: "left",
			fontSize: "1.2em",
			lineHeight: "1.5",
			margin: "15px 0"
		};
		let questionStyle = {
			fontWeight: "bold",
			margin: "0 0 7px"
		};
		let answerStyle = {
			margin: "0 0 7px"
		};

		return (
			<div style={divStyle}>
				<div style={questionStyle}>
					{this.props.faq.question}
				</div>
				<div style={answerStyle}>
					{this.props.faq.answer}
				</div>				
			</div>
		);
	}

}