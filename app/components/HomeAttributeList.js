import React from "react";

class HomeAttributeList extends React.Component {
	render(){
		let elements = this.props.data.sort().map(function(em, index){
			return (
				<li style={liStyle} key={index}><h4>{em}</h4></li>
			);
		});

		return (
			<ul>
				{elements}
			</ul>
		);
	}
}

let liStyle = {
	textAlign: "left"
};

export default HomeAttributeList;

