import React from "react";
import Radium from "radium";
import NavigationActions from "../../actions/NavigationActions";
var Link = require('react-router').Link;
Link = Radium(Link);

class PopUp extends React.Component {
	constructor(props){
		super(props);
		this.hasStorage = checkStorage('sessionStorage');
		if(this.hasStorage){
			if(!sessionStorage.getItem('isClosed')){
				sessionStorage.setItem('isClosed', "notClosed")
				this.state = {isClosed: "notClosed"};
			}else {
				this.state = {isClosed: sessionStorage.getItem('isClosed')};
			}
		}
		else {
			this.state = {isClosed: "notClosed"};
		}
	}
	handleClick(e){
		if(this.hasStorage){
			this.setState({isClosed: "closed"});
		}
		sessionStorage.setItem('isClosed', "closed");
	}
	handleTabClick(e){
		if(this.hasStorage){
			NavigationActions.updateSelectedNav("CONTACT");
		}
		this.setState({isClosed: "closed"});
		window.scroll(0,0);
	}
	render(){
		let popWindowStyle = {
			fontSize: "1.5em",
			width: "300px",
			height: "185px",
			backgroundColor: bgColor,
			position: "fixed",
			zIndex: "999",
			top: "45px",
			right: "10px",
			borderRadius: "10px",
			border: "5px solid #FFC400",
			animation: "x 3s ease",
			animationName: slideInKeyframes,
			display: this.state.isClosed === "closed" ? "none" : "block"
		};

		return (
			<div style={popWindowStyle} key={this.props.content.length}>
				<div onClick={this.handleTabClick.bind(this)}><Link to="/contact" style={linkStyle}><p style={pStyle}>{this.props.content}</p><i style={iconStyle} className="material-icons" key='popup-contact-phone'>contact_phone</i></Link></div>
				<button onClick={this.handleClick.bind(this)} style={buttonStyle} key='close'>x</button>
			</div>
		);
	}
}

export default Radium(PopUp);

function checkStorage(type) {
	try {
		let storage = window[type];
		let x = '_try_';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}


var bgColor = "#FFECB3";

var pStyle = {
	padding: "40px 20px 0px",
	textAlign: "center",
	textDecoration: 'none',
	color: 'dimgray'
};

var buttonStyle = {
	fontSize: "0.8em",
	position: "absolute",
	top: "5px",
	right: "5px",
	backgroundColor: bgColor,
	border: "none",
	borderRadius: '50%',
	padding: '3px 10px',
	color: "black",
	':hover': {
		color: "dimgray",
		backgroundColor: '#FFC400'
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
