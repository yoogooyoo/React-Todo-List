import React from 'react'
import { connect } from 'react-redux'
import {Row} from 'antd'
import {inputSubmit} from '../actions/action'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if(!input.value.trim()) {
        return
      }
      dispatch(inputSubmit(input.value))
      input.value = ''
    }}>
      <div className="add-todo-item">
        <Row>
          <label htmlFor="listInput">Add New Todo</label>
          <input ref={node => {
            input = node
          }}
            type="text"
            className="form-control"
            id="listItemInput"
            placeholder="Add new todo"/>
        </Row>
        <Row>
          <button className="btn btn-primary pull-right">Add Todo</button>
        </Row>
      </div>
    </form>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo