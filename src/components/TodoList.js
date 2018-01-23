import React from 'react';
import Todo from './Todo'

const TodoList = ({ todos, deleteListItem, toggleTodo }) => (
  <div>
    <ul className="list-group">
      {console.log(todos)}
      {

        todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          deleteTask={() => deleteListItem(todo.id)}
          toggleComplete={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  </div>
)

export default TodoList