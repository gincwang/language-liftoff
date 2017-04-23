import React from 'react';
import SharedStyles from "../styles/sharedStyles.js";
import ListWithAnchor from "./shared/listWithAnchor.js";
import Radium from 'radium';

class ClientResourcesMore extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>Additional Resources</h2>
					</div>
				</div>
				<div className="row" style={topRowStyle}>
					<div className="col-sm-6 col-lg-offset-2 col-lg-4" style={sectionStyle} key='speechDO'>
						<h3 style={categoryTitleStyle}>Autism Spectrum Disorder</h3>
						<ListWithAnchor texts={speechDO} links={speechDOLinks} ulStyles={dataUlStyles} liStyles={dataLiStyles}/>
					</div>
					<div className="col-sm-6 col-lg-4" style={sectionStyle} key='languageDO'>
						<h3 style={categoryTitleStyle}>Seniors with Special Needs</h3>
						<ListWithAnchor texts={languageDO} links={languageDOLinks} ulStyles={dataUlStyles} liStyles={dataLiStyles}/>
					</div>
				</div>
				<div className="row" style={topRowStyle}>
					<div className="col-sm-6 col-lg-offset-2 col-lg-4" style={sectionStyle} key='commOptions'>
						<h3 style={categoryTitleStyle}>Assistive Technology</h3>
						<ListWithAnchor texts={commOptions} links={commOptionsLinks} ulStyles={dataUlStyles} liStyles={dataLiStyles}/>
					</div>
					<div className="col-sm-6 col-lg-4" style={sectionStyle} key='others'>
						<h3 style={categoryTitleStyle}>Other</h3>
						<ListWithAnchor texts={others} links={othersLinks} ulStyles={dataUlStyles} liStyles={dataLiStyles}/>
					</div>
				</div>
				<div style={SharedStyles.bottomPadding}></div>
			</div>
		);
	}
}


export default Radium(ClientResourcesMore);

let topRowStyle = {
	margin: "20px 20px"
};

let sectionStyle = {
	transform: 'scale(1)',
	transition: 'all 0.3s ease',
	':hover': {
		transform: 'scale(1.03)'
	}
};

let categoryTitleStyle = {
	borderRadius: "20px",
	border: "3px solid gray",
	padding: "10px 0"
};

let dataUlStyles = {
	backgroundColor: SharedStyles.altColor,
	borderRadius: "30px",
	padding: "10px 50px",
};

let dataLiStyles = {
	textAlign: "left",
	listStyle: "none",
	fontSize: "1.3em",
	padding: "5px 10px",
	borderRadius: '20px',
	backgroundColor: 'transparent',
	transition: 'all 0.3s ease',
	':hover': {
		backgroundColor: '#C8E6C9'
	}
};



let speechDO = [
	"Hobbies for Autistic Children",
	"Aging with Autism Resources",
	"Travel Tips for Persons with Autism"
];
let speechDOLinks = [
	"http://www.autism-community.com/exploring-hobbies-with-your-child/",
	"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3324697/",
	"http://www.parents.com/health/autism/resources/travel-tips-children-with-autism/"
];



let languageDO = [
	"Planning for the Future for Seniors with Special Needs",
	"Home Organization for Newly Disabled Seniors",
	"Legal Guide for Newly Disabled Seniors"
];
let languageDOLinks = [
	"https://www.onereversemortgage.com/blog/2017/03/special-needs-seniors-planning-for-the-future-of-this-vulnerable-population/",
	"https://www.yourstoragefinder.com/home-organization-for-newly-disabled-seniors",
	"https://www.justgreatlawyers.com/legal-guide-for-newly-disabled-and-disabled-seniors"
];



let commOptions = [
	"Assistive Technology Buying Guide",
	"PrAACtical AAC: Strategies, Resources, and Information"
];
let commOptionsLinks = [
	"https://www.retailmenot.com/blog/assistive-technology-buying-guide.html",
	"http://praacticalaac.org/"
];



let others = [
	"Should They Stay or Should They Go: Selling a Home with Modifications"
];
let othersLinks = [
	"https://www.homecity.com/home-modifications-and-selling-your-home"
];
