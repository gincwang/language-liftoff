import React from "react";
import ReactDOM from 'react-DOM';
import Radium from 'radium';
import SharedStyles from "../styles/sharedStyles.js";
import DropDownButton from "./shared/dropDownBtn.js";
var Link = require('react-router').Link;
Link = Radium(Link); 	//Needs to be wrapped in Radium due to Raidum not working with all components

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hideDropDown: true,
			selectedTab: "HOME"
		};
	}
	handleClick(e){
		//Checks if user clicked on any dropdown button, then trigger state change.
		let node = e.target.parentNode.parentNode;
		for(let i=0; i<2; i++){
			if(node.className === "dropDownBtn"){
				return;
			}else {
				node = node.parentNode;
			}
		}
		this.setState({hideDropDown: !this.state.hideDropDown});
	}
	navLiStyles(tabTitle){
		return {
			flex: "1 20%",
			backgroundColor: tabTitle === this.state.selectedTab ? SharedStyles.mainColor : SharedStyles.altColor
		};		
	}
	handleTabClick(e){

		//there's edge cases when clicking on dropdown menu:
		//	 if the carrot is clicked the textContent will show only space,
		//	 if dropdown text is clicked it will be shown with dropdown title + carrot (space)
		let tabText = e.target.textContent.trim();
		let node = e.target.parentNode.parentNode;
		for(let i=0; i<2; i++){
			if(node.className === "dropDownBtn"){
				tabText = "RESOURCES";
				break;
			}else {
				node = node.parentNode;
			}
		}

		this.setState({selectedTab: tabText});
	}
    render(){
        return (
        	<div className="container-fluid" style={{padding: "0"}} onClick={this.handleClick.bind(this)}>
        		<div style={{backgroundColor: "white"}}>
		            <nav style={inline.navStyles}>
		            	<Link to="/"><img style={inline.navLogoStyles} src={"app/assets/logos/language-liftoff-full-sm.png"} alt="language-liftoff-logo" height={60}/></Link>
		                <ul style={inline.navUlStyles}>
		                	<li style={this.navLiStyles("HOME")} onClick={this.handleTabClick.bind(this)}><Link to="/" style={inline.navLinkStyles}>HOME</Link></li>
		                    <li style={this.navLiStyles("SERVICES")} onClick={this.handleTabClick.bind(this)}><Link to="/services" style={inline.navLinkStyles}>SERVICES</Link></li>
		                    <li style={this.navLiStyles("RESOURCES")} onClick={this.handleTabClick.bind(this)}><DropDownButton className={"dropDownBtn"} anchorStyles={inline.navLinkStyles} title="RESOURCES" texts={dropDowntext} links={dropDownLink} minWidth={150} hideDropDown={this.state.hideDropDown}/></li>
		                    <li style={this.navLiStyles("ABOUT US")} onClick={this.handleTabClick.bind(this)}><Link to="/about" style={inline.navLinkStyles}>ABOUT US</Link></li>
		                    <li style={this.navLiStyles("CONTACT")} onClick={this.handleTabClick.bind(this)}><Link to="/contact" style={inline.navLinkStyles}>CONTACT</Link></li>
		                </ul>
		            </nav>
		        </div>
	            {this.props.children}
	            <div style={inline.footerStyles}>
					<Link to="/"><img style={inline.navLogoStyles} src={"app/assets/logos/language-liftoff.png"} alt="language-liftoff-logo" height={40}/></Link>	            
            		<ul style={inline.footerUlStyles}>
	                	<li style={inline.footerLiStyles}><Link to="/" style={inline.navLinkStyles}>HOME</Link></li>
	                    <li style={inline.footerLiStyles}><Link to="/services" style={inline.navLinkStyles}>SERVICES</Link></li>
	                    <li style={inline.footerLiStyles}><Link to="/client-resources" style={inline.navLinkStyles}>RESOURCES</Link></li>
	                    <li style={inline.footerLiStyles}><Link to="/about" style={inline.navLinkStyles}>ABOUT US</Link></li>
	                    <li style={inline.footerLiStyles}><Link to="/contact" style={inline.navLinkStyles}>CONTACT</Link></li>
	                </ul>
	            </div>
	        </div>
        );
    }
}

export default Radium(Main);

let dropDowntext = ["Common Disorders", "Typical Development"];
let dropDownLink = ["/client-resources/common-disorders", "/client-resources/typical-development"];

let inline = {
		navStyles:{
			fontFamily: "'Comfortaa', cursive",
			display: "flex",
			flexFlow: "row nowrap",
			alignItems: "stretch",
			maxWidth: "850px",
			margin: "0 auto",
		},
		navUlStyles: {
			flex: "2 auto",
			display: "flex",
			flexFlow: "row nowrap",
			fontSize: "1em",
			listStyle: "none",
			margin: "0",
			padding: "0"
		},
		navLogoStyles: {
			margin: "0 20px",
			padding: "4px 0"
		},
		navLinkStyles: {
			color: SharedStyles.navTextColor,
			padding: "20px 0",
			textDecoration: "none",
			display: "block",
			textAlign: "center",

			':hover': {
				color: SharedStyles.navTextColorHover,
				textDecoration: "underline"
			}
		},
		footerStyles: {
			backgroundColor: SharedStyles.altColor,
			fontSize: "0.8em",
			display: "flex",
			flexFlow: "row nowrap",
			justifyContent: "center"
		},
		footerUlStyles: {
			padding: "5px 0 0 0",
			display: "flex",
			listStyle: "none",
		},
		footerLiStyles: {
			margin: "0 5px"
		}
	};

