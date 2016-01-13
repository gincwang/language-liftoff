import React from "react";
import Radium from "radium";
import NavigationActions from "../../actions/NavigationActions";
var Link = require('react-router').Link;
Link = Radium(Link);

class PopUp extends React.Component {
	constructor(props){
		super(props);
		if(!sessionStorage.getItem('isClosed')){
			sessionStorage.setItem('isClosed', "notClosed")
			this.state = {isClosed: "notClosed"};
		}else {
			this.state = {isClosed: sessionStorage.getItem('isClosed')};
		}
	}
	handleClick(e){
		this.setState({isClosed: "closed"});
		sessionStorage.setItem('isClosed', "closed");
	}
	handleTabClick(e){
		NavigationActions.updateSelectedNav("CONTACT");
	}
	render(){
		let popWindowStyle = {
			fontSize: "1.5em",
			width: "220px",
			height: "220px",
			backgroundColor: bgColor,
			position: "fixed",
			zIndex: "999",
			top: "45px",
			right: "10px",
			borderRadius: "10px",
			border: "7px solid #FFC400",
			animation: "x 3s ease",
			animationName: slideInKeyframes,
			display: this.state.isClosed === "closed" ? "none" : "block"
		};

		return (
			<div style={popWindowStyle} >
				<p style={pStyle}>{this.props.content}</p>
				<div onClick={this.handleTabClick.bind(this)}><Link to="/contact" style={linkStyle}><i style={iconStyle} className="material-icons">contact_phone</i></Link></div>
				<button onClick={this.handleClick.bind(this)} style={buttonStyle}>x</button>
			</div>
		);
	}
}

export default PopUp;
var bgColor = "#FFECB3";

var pStyle = {
	padding: "40px 20px 0px",
	textAlign: "center"
};

var buttonStyle = {
	fontSize: "0.8em",
	position: "absolute",
	top: "5px",
	right: "5px",
	backgroundColor: bgColor,
	border: "none",
	color: "black",
	':hover': {
		color: "gray"
	}

};

var iconStyle = {
	fontSize: "2em",
	display: "block",
	textAlign: "center",
	color: "black",
	':hover': {
		color: "gray"
	}
};

var linkStyle = {
	textDecoration: "none"
};

var slideInKeyframes = Radium.keyframes({
	'0%': {right: '-250px'},
	'100%': {right: '10px'}
}, 'slideIn');
