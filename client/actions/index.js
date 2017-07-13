import * as actionTypes from '../actionTypes'

export const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  payload: todo,
  completed: false
})

export const deleteTodo = (todo) => ({
  type: actionTypes.DELETE_TODO,
  payload: todo
})

export const editTodo = (todo) => ({
  type: actionTypes.EDIT_TODO,
  payload: todo
})
