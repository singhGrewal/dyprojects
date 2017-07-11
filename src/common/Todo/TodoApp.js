import React from 'react';
import AddTodo from './components/AddTodo.js';

import TodoList from './components/TodoList.js';
import {Link} from 'react-router';

class Todo extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					text: "office"
				}, {
					id: 2,
					text: "To office"
				}, {
					id: 3,
					text: " 3 To office"
				}, {
					id: 4,
					text: "4 To office"
				}
			]
			
		};
		
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}
	
	handleAddTodo(text) {
		alert('new todo' + text)
	}
	
	
	
	
	
	render() {
		return (
			<div className="container">
				<h2>Todo React App</h2>
				<TodoList todos={this.state.todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
}

export default Todo;