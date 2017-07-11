import React from 'react';

import {Link} from 'react-router';

class Todo extends React.Component {
	
	constructor(props) {
		super(props);
		
	}
	
	
	render() {
		return (
			<div className="container">
				<h2>Todo React App</h2>
				<TodoList todos={this.state.todos}/>
			</div>
		);
	}
}

export default Todo;