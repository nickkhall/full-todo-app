import * as types from '../actionTypes';

const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // Add Todo
    case types.ADD_TODO:
      const newTodo = Object.create({}, {
        newTodo: {
          todo: action.payload,
          completed: false,
          isEditing: false
        }
      });

      console.log({newTodo});

      return { todos: state.todos.concat(newTodo) }
    // Delete Todo
    case types.DELETE_TODO:
      return {
        todos: state.todos.filter((v,i) => {
          if(i === action.payload) return;
          return v;
        })
      }
    default:
      return state
  }
}

export default reducer;
