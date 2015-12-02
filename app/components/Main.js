import React from "react";
import ReactDOM from 'react-DOM';
import Radium from 'radium';
var Link = require('react-router').Link;
Link = Radium(Link);

class Main extends React.Component{
    render(){
        return (
        	<div>
        		<div style={{backgroundColor: "white", border: "1px solid #F5F5F5"}}>
		            <nav style={navStyles}>
		            	<Link to="/"><img style={logoStyles} src={"app/assets/logos/logo-lg.jpg"} alt="logo" height={100}/></Link>
		                <ul style={navLinkStyles}>
		                	<li><Link to="/" style={linkStyles}>Home</Link></li>
		                    <li><Link to="/services" style={linkStyles}>Services</Link></li>
		                    <li><Link to="/client-resources" style={linkStyles}>Client Resources</Link></li>
		                    <li><Link to="/about" style={linkStyles}>About Us</Link></li>
		                    <li><Link to="/contact" style={linkStyles}>Contact</Link></li>
		                </ul>
		            </nav>
		        </div>
	            {this.props.children}
	        </div>
        );
    }
}

let navStyles = {
	display: "flex",
	flexFlow: "column nowrap",
	justifyContent: "center",
	alignItems: "stretch",
	maxWidth: "1024px",
	margin: "0 auto"
};

let navLinkStyles = {
	display: "flex",
	flexFlow: "row nowrap",
	justifyContent: "space-around",
	fontSize: "1.4em",
	listStyle: "none",
	padding: "10px 0",
	backgroundColor: "#FF5722"
};

let logoStyles = {
	margin: "10px 20px",
};

let linkStyles = {
	color: "white",
	padding: "10px 15px",
	textDecoration: "none",
	borderRadius: "5px",

	':hover': {
		color: "gray",
	}
};

export default Radium(Main);