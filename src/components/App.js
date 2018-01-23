import React from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
import { Button, Icon, Row, Col} from 'antd';
import '../css/index.css'

const App = () => (
  <div>
    <div className="well">
      <h1>Todo App</h1>
      <hr/>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <UndoRedo />
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
)


export default App