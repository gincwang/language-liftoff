import React from "react";
import List from "./list.js";
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class ListWithList extends React.Component {
	render(){
		let titleStyle = {
			border: "2px solid gray",
			borderRadius: "20px",
			padding: "10px 20px",
			'@media (max-width: 768px)': {
				fontSize: "0.79em"
			}
		};

		let ulStyles = {
			textAlign: "left"
		};

		let innerUlStyles = {
			margin: "10px 0"
		};

		let elements = [];
		let title = "";
		for(let obj in this.props.data){
			if(obj==="hearingAndUnderstanding"){title="Hearing And Understanding";}
			else if(obj==="talking"){title="Talking";}
			else if(obj==="writing"){title="Writing";}
			else if(obj==="reading"){title="Reading";}
			else if(obj==="speaking"){title="Speaking";}
			else if(obj==="listening"){title="Listening";}
			else {title=obj;}
			elements.push(
				<List title={title} data={this.props.data[obj]} key={obj} ulStyles={innerUlStyles} />
			);
		}
		if(this.props.data){
			return (
				<ReactCSSTransitionGroup transitionName="development" transitionEnterTimeout={800} transitionLeaveTimeout={500}>
					<div style={{textAlign: "left"}} key={this.props.title}>
						<h3 style={{margin: "40px 0"}}><span style={titleStyle}>{this.props.title}</span></h3>
						<div style={ulStyles}>{elements}</div>
					</div>
				</ReactCSSTransitionGroup>
			);
		}else {
			return <div/>
		}
	}
}


export default Radium(ListWithList);

