import React from 'react';
import {Link} from 'react-router';

class TodoSearch extends React.Component {
  
  constructor(props) {
    super(props);
    
  }
  handleSearch(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    
    this.props.onSearch(showCompleted , searchText)
    
    
    
    
  }
  
  render() {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todo" onChange={this.handleSearch}/>
        </div>
       
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>Show completed Todo
          </label>
        </div>
      </div>
    );
  }
}

export default TodoSearch;
