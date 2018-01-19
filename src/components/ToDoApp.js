import React from 'react';
import List from './List'
import Input from './Input'
import { Button, Icon, Row, Col} from 'antd';
import '../css/index.css'

class ToDoApp extends React.Component {
  onInputChange = (event) => {
    this.props.inputChange(event.target.value);
  }

  onInputSubmit = (event) => {
    event.preventDefault();
    this.props.inputSubmit();
  };

  toggleTodo = (i) => {
    this.props.toggleTodo(i)
  };

  deleteListItem = (i) => {
    this.props.deleteListItem(i)
  };

  render() {
    console.log(this.props)
    return(
      <div>
        <div className="well">
          <h1>Todo App</h1>
          <hr/>
          <List
            data={this.props.toDoApp.list}
            toggleTodo={this.toggleTodo}
            deleteListItem={this.deleteListItem}
          />
          <Input
            value={this.props.toDoApp.newToDo}
            onSubmit={this.onInputSubmit}
            onChange={this.onInputChange}
          />
        </div>
        <Row>
          <Col span={14}>
          </Col>
          <Col span={10}>
            <Button className="pull-left"><Icon type="user" />   <a href="">Ethan Yu</a></Button>
            <Button className="pull-right"><Icon type="github" />   <a href="">yoogoo</a></Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ToDoApp;