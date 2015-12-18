import React from "react";

class ListWithAnchor extends React.Component {
	render(){
		console.log(this.props);
		let elements = this.props.texts.map(function(em, index){
			return (
				<li style={this.props.liStyles} key={index}><a href={this.props.links[index]} target="_blank">{em}</a></li>
			);
		}, this);

		return (
			<ul style={this.props.ulStyles}>
				{elements}
			</ul>
		);
	}
}


export default ListWithAnchor;

