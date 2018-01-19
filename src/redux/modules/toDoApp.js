const INPUT_CHANGED = 'React-Todo-List/toDoApp/INPUT_CHANGED';
const INPUT_SUBMIT = 'React-Todo-List/toDoApp/INPUT_SUBMIT';
const TOGGLE_TODO = 'React-Todo-List/toDoApp/TOGGLE_TODO';
const DELETE_LIST_ITEM = 'React-Todo-List/toDoApp/DELETE_LIST_ITEM';

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  }
}

export function deleteListItem(index) {
  return {
    type: DELETE_LIST_ITEM,
    index
  }
}

export function inputSubmit() {
  return {
    type: INPUT_SUBMIT
  }
}

export function inputChange(value) {
  return {
    type: INPUT_CHANGED,
    value
  }
}

const initialState = {
  list: [
    {
      "id": "1",
      "task": "Complete A TodoList Demo",
      "complete": false
    }, {
      "id": "2",
      "task": "Learning ES6",
      "complete": false
    }, {
      "id": "3",
      "task": "Hello React",
      "complete": true
    }, {
      "id": "4",
      "task": "Land on a Job",
      "complete": false
    }
  ],
  newToDo: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_SUBMIT:
      let new_id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      });
      return Object.assign(
        {},
        state,
        {
          list: [...state.list, {id: new_id, task: state.newToDo, complete: false}],
          newToDo: ''
        }
      );
    case INPUT_CHANGED:
      return Object.assign(
        {},
        state,
        {newToDo: action.value}
      );
    case TOGGLE_TODO:
      return Object.assign(
        {},
        state,
        {
          list: state.list.map( todo => {
            if(todo.id === action.index) {
              return Object.assign({}, todo, {
                complete: !todo.complete
              })
            }
            return todo
          })
        }
      )
    case DELETE_LIST_ITEM:
      return Object.assign(
        {},
        state,
        {
          list: [
            ...state.list.slice(0, action.index),
            ...state.list.slice(action.index+1)
          ]
        }
      );
    default:
      return state;
  }
}