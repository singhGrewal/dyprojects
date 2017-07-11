import React from 'react';
import Todo from './Todo.js';
import {Link} from 'react-router';

class TodoList extends React.Component {
	
	render() {
		var {todos} = this.props;
		var renderTodos = () =>{
			return todos.map((todo)=>{
				return (
					<Todo key={todo.id}  {...todo}/>
				);
			});
		};
		
		
		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
}

export default TodoList;