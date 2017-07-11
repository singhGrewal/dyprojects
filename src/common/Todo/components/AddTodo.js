import React from 'react';

import {Link} from 'react-router';

class AddTodo extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}
	
	handleSubmit(e) {
		e.preventDefault();
		var todoText = this.refs.todoText.value;
		console.log('todoText' , todoText);
		
		// if (todoText.length > 0) {
		// 	this.refs.todoText.value = "";
		// 	this.props.onAddTodo(todoText);
		//
		// } else {
		// 	this.refs.todoText.focus();
		// }
	}
	
	
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref="todoText" placeholder="What do you need to do"/>
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}
}

export default AddTodo;