import React from "react";
import {Link} from "react-router";

class Todo extends React.Component {
	
	render() {
		
		return (
			<div>
				{this.props.id}{this.props.text}
			</div>
		);
	}
}

export default Todo;
