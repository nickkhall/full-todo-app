import * as actionTypes from '../actionTypes'

export const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  payload: todo
})
