/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

// ^^ NOT PROUD!
import * as types from '../actionTypes';

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Add Todo
    case types.ADD_TODO:
      const { id, todo } = action.payload;

      const x = state.todos.push({
        id,
        todo,
        completed: false,
        isEditing: false
      });

      return { ...state };

    // Delete TodO
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(v => v.id !== action.payload)
      };

    // Edit Todo (Activate Edit Mode)
    case types.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.payload === todo.id) {
            todo.isEditing = !todo.isEditing;
            return todo;
          }
          return todo;
        })
      };

    // Change Todo (Actually Editing Todo Value)
    case types.CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.payload.todo === todo.id) {
            todo.todo = action.payload.newValue;
            return todo;
          }
          return todo;
        })
      };

    // Mark Todo As completed
    case types.MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
            return todo;
          }
          return todo;
        })
      };

    default:
      return { ...state };
  }
};

export default reducer;
