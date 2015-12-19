import React from "react";

class ListWithToggle extends React.Component {
	constructor(props){
		super(props);
		this.state = {visible: false};
	}
	handleClick(e){
		e.preventDefault();
		this.setState({visible: !this.state.visible});
	}
	render(){
		let ulStyles = {
			display: this.state.visible? "block" : "none"
		};


		let elements = this.props.data.map(function(em, index){
			return 	(<li style={this.props.liStyles} key={index}>{em}</li>);
		}, this);

		return (
			<div>
				<h3><a href="#" onClick={this.handleClick.bind(this)}>{this.props.title}</a></h3>
				<ul style={ulStyles}>
					{elements}
				</ul>
			</div>
		);

	}
}


export default ListWithToggle;