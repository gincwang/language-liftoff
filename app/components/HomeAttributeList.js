import React from "react";

class HomeAttributeList extends React.Component {
	render(){
		let elements = this.props.data.sort().map(function(em, index){
			return (
				<li style={liStyles} key={index}><h4>{em}</h4></li>
			);
		});

		return (
			<ul style={ulStyles}>
				{elements}
			</ul>
		);
	}
}

let ulStyles = {
	backgroundColor: "#FFF8E1",
	borderRadius: "30px",
	padding: "10px 50px"
};

let liStyles = {
	textAlign: "left"
};

export default HomeAttributeList;

