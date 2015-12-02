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
		                <ul style={navUlStyles}>
		                	<li style={navLiStyles}><Link to="/" style={linkStyles}>Home</Link></li>
		                    <li style={navLiStyles}><Link to="/services" style={linkStyles}>Services</Link></li>
		                    <li style={navLiStyles}><Link to="/client-resources" style={linkStyles}>Client Resources</Link></li>
		                    <li style={navLiStyles}><Link to="/about" style={linkStyles}>About Us</Link></li>
		                    <li style={navLiStyles}><Link to="/contact" style={linkStyles}>Contact</Link></li>
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
	alignItems: "stretch",
	maxWidth: "1024px",
	margin: "0 auto"
};

let navUlStyles = {
	display: "flex",
	flexFlow: "row nowrap",
	justifyContent: "space-around",
	fontSize: "1.4em",
	listStyle: "none",
	backgroundColor: "#FF5722",
	padding: "0"
};

let logoStyles = {
	margin: "10px 20px",
};

let navLiStyles = {
	flex: "1 20%",
};

let linkStyles = {
	color: "white",
	padding: "20px 0",
	textDecoration: "none",
	display: "block",
	textAlign: "center",

	':hover': {
		color: "#E0E0E0",
	}
};

export default Radium(Main);