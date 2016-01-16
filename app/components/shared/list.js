import React from "react";
import Radium from 'radium';

class List extends React.Component {
	render(){


		let elements = this.props.data.sort().map(function(em, index){
			return (
				<li style={this.props.liStyles} key={index}><h4>{em}</h4></li>
			);
		}, this);

		return (
			<ul style={this.props.ulStyles} key={this.props.data.length}>
				{elements}
			</ul>
		);
	}
}


export default Radium(List);

