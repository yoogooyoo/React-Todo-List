import React from 'react';
import List from './List'
import Input from './Input'

class ToDoApp extends React.Component {
  onInputChange = (event) => {
    this.setState({newToDo: event.target.value});
  }

  onInputSubmit = (event) => {
    event.preventDefault();
    this.setState((previousState) => ({
      list: [...previousState.list, {item: previousState.newToDo, done: false}],
      newToDo: ''
    }))
  }

  onListItemClick = (i) => {
    this.setState((previousState) => ({
      list: [
        ...previousState.list.slice(0, i),
        Object.assign({}, previousState.list[i], {done: !previousState.list[i].done}),
        ...previousState.list.slice(i+1)
      ]
    }))
  }

  deleteListItem = (i) => {
    this.setState((previousState) => ({
      list: [
        ...previousState.list.slice(0, i),
        ...previousState.list.slice(i+1)
      ]
    }))
  };

  componentWillMount() {
    this.setState({
      list: [],
      newToDo: 'test'
    })
  };

  render() {
    return(
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>Todo App</h1>
              <hr/>
              <List listItems={this.state.list} onClick={this.onListItemClick} deleteListItem={this.deleteListItem} />
              <Input value={this.state.newToDo} onSubmit={this.onInputSubmit} onChange={this.onInputChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoApp;