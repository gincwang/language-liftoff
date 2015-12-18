import React from "react";

class List extends React.Component {
	render(){
		console.log(this.props);
		let elements = this.props.data.sort().map(function(em, index){
			return (
				<li style={this.props.liStyles} key={index}><h4>{em}</h4></li>
			);
		}, this);

		return (
			<ul style={this.props.ulStyles}>
				{elements}
			</ul>
		);
	}
}


export default List;

