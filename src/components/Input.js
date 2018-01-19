import React from 'react';
import {Row, Col} from 'antd';

const Input = ({ onChange, onSubmit, value }) => (
  <form onSubmit={onSubmit}>
    <div className="add-todo-item">
      <Row>
        <label htmlFor="listInput">Add New Todo</label>
        <input value={value} onChange={onChange} type="text" className="form-control" id="listItemInput" placeholder="Add new todo"/>
      </Row>
      <Row>
        <button className="btn btn-primary pull-right">Add Item</button>
      </Row>
    </div>
  </form>
);

export default Input;