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
			hideDropDown: true
		};
	}
	handleClick(e){
		//Checks if user clicked on any dropdown button, then trigger state change.
		let node = e.target;
		for(let i=0; i<4; i++){
			if(node.className === "dropDownBtn"){
				return;
			}else {
				node = node.parentNode;
			}
		}
		this.setState({hideDropDown: !this.state.hideDropDown});
	}
    render(){
        return (
        	<div className="container-fluid" style={{padding: "0"}} onClick={this.handleClick.bind(this)}>
        		<div style={{backgroundColor: "white"}}>
		            <nav style={inline.navStyles}>
		            	<Link to="/"><img style={inline.navLogoStyles} src={"app/assets/logos/language-liftoff-full-sm.png"} alt="language-liftoff-logo" height={60}/></Link>
		                <ul style={inline.navUlStyles}>
		                	<li style={inline.navLiStyles}><Link to="/" style={inline.navLinkStyles}>HOME</Link></li>
		                    <li style={inline.navLiStyles}><Link to="/services" style={inline.navLinkStyles}>SERVICES</Link></li>
		                    <li style={inline.navLiStyles}><DropDownButton className={"dropDownBtn"} anchorStyles={inline.navLinkStyles} title="RESOURCES" texts={dropDowntext} links={dropDownLink} minWidth={150} hideDropDown={this.state.hideDropDown}/></li>
		                    <li style={inline.navLiStyles}><Link to="/about" style={inline.navLinkStyles}>ABOUT US</Link></li>
		                    <li style={inline.navLiStyles}><Link to="/contact" style={inline.navLinkStyles}>CONTACT</Link></li>
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

let dropDowntext = ["Common Disorders", "Typical Development"];
let dropDownLink = ["/client-resources/common-disorders", "/client-resources/typical-development"];

let inline = {
	navStyles: {
		fontFamily: "'Comfortaa', cursive",
		display: "flex",
		flexFlow: "row nowrap",
		alignItems: "stretch",
		maxWidth: "850px",
		margin: "0 auto"
	},
	navUlStyles: {
		flex: "2 auto",
		display: "flex",
		flexFlow: "row nowrap",
		fontSize: "1em",
		listStyle: "none",
		margin: "auto",
		padding: "0"
	},
	navLogoStyles: {
		margin: "15px 20px",
	},
	navLiStyles: {
		flex: "1 20%",
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



export default Radium(Main);