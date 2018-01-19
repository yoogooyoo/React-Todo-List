import {connect} from 'react-redux';
import ToDoApp from '../components/ToDoApp';
import {
  inputChange,
  inputSubmit,
  deleteListItem,
  toggleTodo
} from '../redux/modules/toDoApp';

function mapStateToProps(state) {
  return {
    toDoApp: state.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (value) => dispatch(inputChange(value)),
    inputSubmit: () => dispatch(inputSubmit()),
    deleteListItem: (i) => dispatch(deleteListItem(i)),
    toggleTodo: (i) => dispatch(toggleTodo(i))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);