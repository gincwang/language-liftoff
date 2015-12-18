import React from "react";
import Radium from "radium";
var Link = require('react-router').Link;
Link = Radium(Link); 

class DropDownBtn extends React.Component {
	constructor(props){
		super(props);
		this.state = {toggleVisible: false};
	}
	handleClick(e){
		e.preventDefault();
		this.setState({toggleVisible: !this.state.toggleVisible});
	}
	renderList(){
		var list = [];
		let listStyle = {
			display: this.state.toggleVisible? "block" : "none",
			listStyle: "none"
		};
		let linkStyle = {
			display: "block",
			fontSize: "1.2em",
			padding: "5px 15px",
			color: "black",
			textDecoration: "none",
			':hover': {
				backgroundColor: "lightGray"
			}
		};

		for(let i=0, length=this.props.texts.length; i < length; i++){

			list.push(
				<li key={i} style={listStyle}><Link to={this.props.links[i]} style={linkStyle} >{this.props.texts[i]}</Link></li>
			);
		}
		return list;
	}
	render(){
		let ulStyles = {
			minWidth: this.props.minWidth,
			position: "absolute",
			background: "white",
			padding: "0",
			zIndex: "1000",
			marginTop: "15px",
			opacity: "0.7"

		};
		return (
			<div><a style={this.props.anchorStyles} href="#" onClick={this.handleClick.bind(this)} >RESOURCES <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true" style={{fontSize: "0.8em"}}></span></a>
				<ul style={ulStyles}>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}


export default Radium(DropDownBtn);