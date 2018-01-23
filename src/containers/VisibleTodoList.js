import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {
  deleteListItem,
  toggleTodo
} from '../actions/action';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.complete)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.complete)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})

const mapDispatchToProps = ({
    deleteListItem: deleteListItem,
    toggleTodo: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList