import React from "react";
import Radium from 'radium';

class ListWithAnchor extends React.Component {
	render(){
		let elements = this.props.texts.map(function(em, index){
			return (
				<li style={this.props.liStyles} key={index}><a href={this.props.links[index]} target="_blank" style={{textDecoration: 'none',color:'gray',display:'block'}}>{em}</a></li>
			);
		}, this);

		return (
			<ul style={this.props.ulStyles} key={this.props.texts[0]}>
				{elements}
			</ul>
		);
	}
}


export default Radium(ListWithAnchor);

