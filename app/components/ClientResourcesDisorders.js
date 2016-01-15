import React from 'react';
import SharedStyles from "../styles/sharedStyles.js";
import ListWithAnchor from "./shared/listWithAnchor.js";

class ClientResourcesDisorders extends React.Component {
	render(){
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>Common Disorders</h2>
					</div>
				</div>
				<div className="row" style={topRowStyle}>
					<div className="col-sm-6 col-lg-offset-2 col-lg-4">
						<h3 style={categoryTitleStyle}>Speech Disorders</h3>
						<ListWithAnchor texts={speechDO} links={speechDOLinks} ulStyles={dataUlStyles} liStyles={dataLiStyles}/>
					</div>
					<div className="col-sm-6 col-lg-4">
						<h3 style={categoryTitleStyle}>Language Disorders</h3>
						<ListWithAnchor texts={languageDO} links={languageDOLinks} ulStyles={dataUlStyles} liStyles={dataLiStyles}/>
					</div>
				</div>
				<div className="row" style={topRowStyle}>
					<div className="col-sm-6 col-lg-offset-2 col-lg-4">
						<h3 style={categoryTitleStyle}>Communication Options</h3>
						<ListWithAnchor texts={commOptions} links={commOptionsLinks} ulStyles={dataUlStyles} liStyles={dataLiStyles}/>
					</div>
					<div className="col-sm-6 col-lg-4">
						<h3 style={categoryTitleStyle}>Medical and Developmental Conditions</h3>
						<ListWithAnchor texts={medConditions} links={medConditionsLinks} ulStyles={dataUlStyles} liStyles={dataLiStyles}/>
					</div>
				</div>
				<div style={SharedStyles.bottomPadding}></div>			
			</div>
		);
	}
}


export default ClientResourcesDisorders;

let topRowStyle = {
	margin: "20px 20px"
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
	padding: "5px 0"
};



let speechDO = [
	"Apraxia",
	"Childhood Apraxia of Speech",
	"Dysarthria",
	"Speech Sound Disorders: Articulation and Phonological Processes",
	"Stuttering"
];
let speechDOLinks = [
	"http://www.asha.org/public/speech/disorders/ApraxiaAdults/",
	"http://www.asha.org/public/speech/disorders/ChildhoodApraxia/",
	"http://www.asha.org/public/speech/disorders/dysarthria/",
	"http://www.asha.org/public/speech/disorders/SpeechSoundDisorders/",
	"http://www.asha.org/public/speech/disorders/stuttering/"
];



let languageDO = [
	"Aphasia",
	"Language-Based Learning Disabilities",
	"Preschool Language Disorders",
	"Selective Mutism"
];
let languageDOLinks = [
	"http://www.asha.org/public/speech/disorders/Aphasia/",
	"http://www.asha.org/public/speech/disorders/LBLD/",
	"http://www.asha.org/public/speech/disorders/Preschool-Language-Disorders/",
	"http://www.asha.org/public/speech/disorders/SelectiveMutism/"
];



let commOptions = [
	"Augmentative and Alternative Communication (AAC)"
];
let commOptionsLinks = [
	"http://www.asha.org/public/speech/disorders/AAC/"
];



let medConditions = [
	"Attention Deficit/Hyperactivity Disorder (ADHD)",
	"Autism (Autism Spectrum Disorders)",
	"Dementia",
	"Stroke",
	"Traumatic Brain Injury"
];
let medConditionsLinks = [
	"http://www.asha.org/public/speech/disorders/ADHD/",
	"http://www.asha.org/public/speech/disorders/Autism/",
	"http://www.asha.org/public/speech/disorders/dementia/",
	"http://www.asha.org/public/speech/disorders/Stroke/",
	"http://www.asha.org/public/speech/disorders/TBI/"
];

