import React from "react";
import ReactDOM from 'react-DOM';
import Radium from 'radium';
import SharedStyles from "../styles/sharedStyles.js";
import DropDownButton from "./shared/dropDownBtn.js";
import NavigationStore from "../stores/NavigationStore";
import NavigationActions from "../actions/NavigationActions";
import PopUp from "./shared/popUp";
var Link = require('react-router').Link;
Link = Radium(Link); 	//Needs to be wrapped in Radium due to Raidum not working with all components

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = NavigationStore.getState();
	}
	componentDidMount(){
		NavigationStore.listen(this.handleStoreChange.bind(this));
	}
	componentWillUnmount(){
		NavigationStore.unlisten(this.handleStoreChange);
	}
	handleStoreChange(state){
		this.setState(state);
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
		NavigationActions.updateHideDropDown(!this.state.hideDropDown);
	}
	navLiStyles(tabTitle){
		return {
			flex: "1 20%",
			backgroundColor: tabTitle === this.state.selectedTab ? SharedStyles.mainColor : SharedStyles.altColor,
			'@media (max-width: 992px)': {
				flex: "1 100%"
			}
		};		
	}
	navUlStyles(isHidden){
		return {
			zIndex: "100",
			flex: "2 auto",
			display: "flex",
			flexFlow: "row nowrap",
			fontSize: "1em",
			listStyle: "none",
			margin: "0",
			padding: "0",
			'@media (max-width: 992px)': {
				display: isHidden ? "none" : "block",
				position: "absolute",
				top: "60px",
				right: "0px",
				width: "100%",
				borderTop: "1px solid gray",
				borderBottom: "2px solid black",
				transition: "all 1s ease"
			}
		}
	}
	handleTabClick(e){
		//there's edge cases when clicking on dropdown menu:
		//	 if the carrot is clicked the textContent will show only space,
		//	 if dropdown text is clicked it will be shown with dropdown title + carrot (space)
		//	 so look for if its parent class name equals dropDownBtn
		let changeTab = true;
		let tabText = e.target.textContent.trim();
		console.log(tabText);

		if(!tabText.length){tabText = "HOME";}
		else if (dropDowntext.indexOf(tabText) !== -1){
			changeTab = true;
			tabText = "RESOURCES"
		}


		//check if clicked element is part of a dropdown component, and don't change tab if resource is clicked
		let node = e.target.parentNode.parentNode;
		for(let i=0; i<2; i++){
			if(node.className === "dropDownBtn" && this.state.selectedTab !== "RESOURCES"){
				changeTab = false;
				break;
			}else {
				node = node.parentNode;
			}
		}

		if(changeTab) {
			NavigationActions.updateSelectedNav(tabText);
			NavigationActions.updateHideMobileNav(!this.state.hideMobileNav);
		}
	}
	handleHideMobileNavClick(e){
		NavigationActions.updateHideMobileNav(!this.state.hideMobileNav);
	}
    render(){
        return (
        	<div className="container-fluid" style={{padding: "0"}} onClick={this.handleClick.bind(this)}>
        		<div style={{backgroundColor: "white"}}>
		            <nav style={inline.navStyles}>
		            	<div onClick={this.handleTabClick.bind(this)}><Link to="/"><img style={inline.navLogoStyles} src={"app/assets/logos/language-liftoff-full-sm.png"} alt="language-liftoff-logo" height={60}/></Link></div>
		                <ul style={this.navUlStyles(this.state.hideMobileNav)}>
		                	<li style={this.navLiStyles("HOME")} onClick={this.handleTabClick.bind(this)}><Link to="/" style={inline.navLinkStyles}>HOME</Link></li>
		                    <li style={this.navLiStyles("SERVICES")} onClick={this.handleTabClick.bind(this)}><Link to="/services" style={inline.navLinkStyles}>SERVICES</Link></li>
		                    <li style={this.navLiStyles("RESOURCES")} onClick={this.handleTabClick.bind(this)} className={"dropDownBtn"}><DropDownButton anchorStyles={inline.navLinkStyles} title="RESOURCES" texts={dropDowntext} links={dropDownLink} minWidth={150} hideDropDown={this.state.hideDropDown}/></li>
		                    <li style={this.navLiStyles("ABOUT US")} onClick={this.handleTabClick.bind(this)}><Link to="/about" style={inline.navLinkStyles}>ABOUT US</Link></li>
		                    <li style={this.navLiStyles("CONTACT")} onClick={this.handleTabClick.bind(this)}><Link to="/contact" style={inline.navLinkStyles}>CONTACT</Link></li>
		                </ul>
		            </nav>
		            <button onClick={this.handleHideMobileNavClick.bind(this)} style={inline.navToggleButtonStyle}><i className="material-icons">dehaze</i></button>
		        </div>
	            {this.props.children}
	            <div style={inline.footerStyles}>
					<div onClick={this.handleTabClick.bind(this)}><Link to="/"><img style={inline.navLogoStyles} src={"app/assets/logos/language-liftoff-full-sm.png"} alt="language-liftoff-logo" height={50}/></Link><span>2015-16 Language Liftoff</span></div>	            
	            </div>
	            <div>
	            	<PopUp content={popUpText.content}/>
	            </div>
	        </div>
        );
    }
}

export default Radium(Main);

let dropDowntext = ["Common Disorders", "Typical Development"];
let dropDownLink = ["/client-resources/common-disorders", "/client-resources/typical-development"];
let popUpText = {content: "Contact us for a free 30-minute consultation!"};

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
		navToggleButtonStyle: {
			position: "absolute",
			top: "13px",
			right: "10px",
			padding: "6px 6px 0",
			backgroundColor: "#F5F5F5",
			border: "none",
			'@media (min-width: 992px)': {
				display: "none"
			}
		},
		footerStyles: {
			backgroundColor: "#EEEEEE",
			fontSize: "0.8em",
			display: "flex",
			flexFlow: "row nowrap",
			justifyContent: "center",
			padding: "30px 0"
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

