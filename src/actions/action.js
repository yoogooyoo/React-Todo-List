let nextTodoId = 0
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteListItem = (index) => ({
  type: 'DELETE_LIST_ITEM',
  index
})

export const inputSubmit = (value) => ({
  type: 'INPUT_SUBMIT',
  id: nextTodoId++,
  value
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})