import React from "react";
import ReactDOM from 'react-DOM';
import Radium from 'radium';
var Link = require('react-router').Link;
Link = Radium(Link); 	//Needs to be wrapped in Radium due to Raidum not working with all components

class Main extends React.Component{
    render(){
        return (
        	<div>
        		<div style={{backgroundColor: "white"}}>
		            <nav style={navStyles}>
		            	<Link to="/"><img style={navLogoStyles} src={"app/assets/logos/logo-lg.jpg"} alt="logo" height={100}/></Link>
		                <ul style={navUlStyles}>
		                	<li style={navLiStyles}><Link to="/" style={navLinkStyles}>Home</Link></li>
		                    <li style={navLiStyles}><Link to="/services" style={navLinkStyles}>Services</Link></li>
		                    <li style={navLiStyles}><Link to="/client-resources" style={navLinkStyles}>Client Resources</Link></li>
		                    <li style={navLiStyles}><Link to="/about" style={navLinkStyles}>About Us</Link></li>
		                    <li style={navLiStyles}><Link to="/contact" style={navLinkStyles}>Contact</Link></li>
		                </ul>
		            </nav>
		        </div>
	            {this.props.children}
	        </div>
        );
    }
}

let navStyles = {
	fontFamily: "'Comfortaa', cursive",
	display: "flex",
	flexFlow: "column nowrap",
	alignItems: "stretch",
	maxWidth: "1140px",
	margin: "0 auto"
};

let navUlStyles = {
	display: "flex",
	flexFlow: "row nowrap",
	fontSize: "1.5em",
	listStyle: "none",
	backgroundColor: "#FFCA28",
	padding: "0"
};

let navLogoStyles = {
	margin: "20px 20px",
};

let navLiStyles = {
	flex: "1 20%",
};

let navLinkStyles = {
	color: "#3E2723",
	padding: "20px 0",
	textDecoration: "none",
	display: "block",
	textAlign: "center",

	':hover': {
		color: "#E0E0E0",
	}
};

export default Radium(Main);