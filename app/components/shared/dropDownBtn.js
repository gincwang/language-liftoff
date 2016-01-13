import React from "react";
import Radium from "radium";
var Link = require('react-router').Link;
Link = Radium(Link); 

class DropDownBtn extends React.Component {
	constructor(props){
		super(props);
		this.state = {toggleVisible: false};
	}
	componentWillUpdate(nextProps){
		//check if hideDropDwn prop has changed, and hides this component if visible
		if(this.props.hideDropDown !== nextProps.hideDropDown){
			if(this.state.toggleVisible){
				this.setState({toggleVisible: false});
			}
		}

	}
	handleClick(e){
		e.preventDefault();
		this.setState({toggleVisible: !this.state.toggleVisible});
	}
	handleLiClick(e){
		e.preventDefault();
		if(this.state.toggleVisible){
			this.setState({toggleVisible: false});
		}
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
				<li key={i} style={listStyle} onClick={this.handleLiClick.bind(this)}><Link to={this.props.links[i]} style={linkStyle} >{this.props.texts[i]}</Link></li>
			);
		}
		return list;
	}
	render(){
		let ulStyles = {
			minWidth: this.props.minWidth,
			position: "absolute",
			backgroundColor: "white",
			padding: "0",
			zIndex: "1000",
			marginTop: "0",
			opacity: "0.7",
			'@media (max-width: 992px)': {
				backgroundColor: "#FFE0B2",
				opacity: "1.0",
				display: "block",
				textAlign: "center",
				width: "100%"
			}

		};
		return (
			<div><a style={this.props.anchorStyles} href="#" onClick={this.handleClick.bind(this)}> {this.props.title} <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true" style={{fontSize: "0.8em"}}></span></a>
				<ul style={ulStyles}>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}


export default Radium(DropDownBtn);