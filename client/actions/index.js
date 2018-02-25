import * as actionTypes from '../actionTypes';

export const addTodo = (todo, id) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    todo,
    id
  }
});

export const deleteTodo = todo => ({
  type: actionTypes.DELETE_TODO,
  payload: todo
});

export const editTodo = todo => ({
  type: actionTypes.EDIT_TODO,
  payload: todo
});

export const changeTodo = (todo, newValue) => ({
  type: actionTypes.CHANGE_TODO,
  payload: {
    todo,
    newValue
  }
});

export const markCompleted = todo => ({
  type: actionTypes.MARK_COMPLETED,
  payload: todo
});
