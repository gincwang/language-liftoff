import React from "react";
import ReactDOM from 'react-DOM';
import Radium from 'radium';
var Link = require('react-router').Link;
Link = Radium(Link); 	//Needs to be wrapped in Radium due to Raidum not working with all components

class Main extends React.Component{
    render(){
        return (
        	<div className="container-fluid" style={{padding: "0"}}>
        		<div style={{backgroundColor: "#FFF8E1"}}>
		            <nav style={navStyles}>
		            	<Link to="/"><img style={navLogoStyles} src={"app/assets/logos/logo-full-sm.png"} alt="logo" height={60}/></Link>
		                <ul style={navUlStyles}>
		                	<li style={navLiStyles}><Link to="/" style={navLinkStyles}>HOME</Link></li>
		                    <li style={navLiStyles}><Link to="/services" style={navLinkStyles}>SERVICES</Link></li>
		                    <li style={navLiStyles}><Link to="/client-resources" style={navLinkStyles}>RESOURCES</Link></li>
		                    <li style={navLiStyles}><Link to="/about" style={navLinkStyles}>ABOUT US</Link></li>
		                    <li style={navLiStyles}><Link to="/contact" style={navLinkStyles}>CONTACT</Link></li>
		                </ul>
		            </nav>
		        </div>
	            {this.props.children}
	            <div style={footerStyles}>
					<Link to="/"><img style={navLogoStyles} src={"app/assets/logos/logo.png"} alt="logo" height={40}/></Link>	            
            		<ul style={footerUlStyles}>
	                	<li style={footerLiStyles}><Link to="/" style={navLinkStyles}>HOME</Link></li>
	                    <li style={footerLiStyles}><Link to="/services" style={navLinkStyles}>SERVICES</Link></li>
	                    <li style={footerLiStyles}><Link to="/client-resources" style={navLinkStyles}>RESOURCES</Link></li>
	                    <li style={footerLiStyles}><Link to="/about" style={navLinkStyles}>ABOUT US</Link></li>
	                    <li style={footerLiStyles}><Link to="/contact" style={navLinkStyles}>CONTACT</Link></li>
	                </ul>
	            </div>
	        </div>
        );
    }
}

let navStyles = {
	fontFamily: "'Comfortaa', cursive",
	display: "flex",
	flexFlow: "row nowrap",
	alignItems: "stretch",
	maxWidth: "850px",
	margin: "0 auto"
};

let navUlStyles = {
	flex: "2 auto",
	display: "flex",
	flexFlow: "row nowrap",
	fontSize: "1em",
	listStyle: "none",
	margin: "auto",
	padding: "0"
};

let navLogoStyles = {
	margin: "15px 20px",
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
		color: "gray",
		textDecoration: "underline"
	}
};

let footerStyles = {
	backgroundColor: "#FFF8E1",
	fontSize: "0.8em",
	display: "flex",
	flexFlow: "row nowrap",
	justifyContent: "center"
}

let footerUlStyles = {
	padding: "5px 0 0 0",
	display: "flex",
	listStyle: "none",
}

let footerLiStyles = {
	margin: "0 5px"
}

export default Radium(Main);