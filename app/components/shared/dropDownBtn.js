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
	//toggle dropdown state
	handleDivClick(e){
		e.preventDefault();
		this.setState({toggleVisible: !this.state.toggleVisible});
	}
	//trigger nav UI change when router is triggered
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
			transition: "all 0.3s ease",
			':hover': {
				backgroundColor: "#FF9800"
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
			backgroundColor: "#FFE0B2",
			padding: "0",
			zIndex: "1000",
			marginTop: "0",
			'@media (max-width: 992px)': {
				display: "block",
				textAlign: "center",
				width: "100%"
			}

		};
		return (
			<div><a style={this.props.anchorStyles} href="#" onClick={this.handleDivClick.bind(this)}> {this.props.title} <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true" style={{fontSize: "0.8em"}}></span></a>
				<ul style={ulStyles}>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}


export default Radium(DropDownBtn);