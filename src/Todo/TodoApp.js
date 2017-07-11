import React from 'react';
import AddTodo from './components/AddTodo';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';

import uuid from "uuid";
import {Link} from 'react-router';

class Todo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: "office"
        }, {
          id: uuid(),
          text: "To office"
        }, {
          id: uuid(),
          text: "To office"
        }, {
          id: uuid(),
          text: "To office"
        }
      ]
      
    };
    
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  }
  
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
    
  }
  
  
  render() {
    return (
      <div className="container">
        <h2>Todo React App</h2>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={this.state.todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

export default Todo;
