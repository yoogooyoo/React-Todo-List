import undoable, { includeAction }  from 'redux-undo';

const todo = (state, action) => {
  switch (action.type) {
    case 'INPUT_SUBMIT':
      return {
        id: action.id,
        task: action.value,
        complete: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        complete: !state.complete
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'INPUT_SUBMIT':

      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE_LIST_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index+1)
      ]
    default:
      return state;
  }
}

const undoableTodos = undoable(todos, { filter: includeAction(['INPUT_SUBMIT','TOGGLE_TODO','DELETE_LIST_ITEM'])})

export default undoableTodos