import React from "react";
import ListWithToggle from "./listWithToggle.js"


class ListWithToggleList extends React.Component {
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

		let elements = [];
		for(let obj in this.props.data){
			elements.push(
				<ListWithToggle title={obj} data={this.props.data[obj]} key={obj}/>
			);
		}

		return (
			<div>
				<h4><a href="#" onClick={this.handleClick.bind(this)}>{this.props.title}</a></h4>
				<div style={ulStyles}>{elements}</div>
			</div>
		);
	}
}


export default ListWithToggleList;

