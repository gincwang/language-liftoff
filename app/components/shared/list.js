import React from "react";

class List extends React.Component {
	render(){


		let elements = this.props.data.sort().map(function(em, index){
			return (
				<li style={this.props.liStyles} key={index}><h4>{em}</h4></li>
			);
		}, this);

		return (
			<div>
				<h4 style={{fontWeight: "bold"}}>{this.props.title}</h4>
				<ul style={this.props.ulStyles}>
					{elements}
				</ul>
			</div>
		);
	}
}


export default List;

