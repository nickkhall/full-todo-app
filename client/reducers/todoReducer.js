import * as types from '../actionTypes';

const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // Add Todo
    case types.ADD_TODO:
      const todo = Object.assign({}, {
        _id: action.payload.id,
        todo: action.payload.todo,
        completed: false,
        isEditing: false,
      });

      return { todos: state.todos.concat(todo) }

    // Delete Todo
    case types.DELETE_TODO:
      return {
        todos: state.todos.filter(v => {
          if(v._id !== action.payload) return v;
          return;
        })
      }

    // Edit Todo (Activate Edit Mode)
    case types.EDIT_TODO:
      return {
        todos: state.todos.map(v => {
          if(action.payload === v._id) {
            v.isEditing = !v.isEditing;
            return v;
           }
           return v;
        })
      }

    // Change Todo (Actually Editing Todo Value)
    case types.CHANGE_TODO:
    return {
      todos: state.todos.map(v => {
        if(action.payload.todo === v._id) {
          v.todo = action.payload.newValue;
          return v;
        }
        return v;
      })
    }

    default:
      return state
  }
}

export default reducer;
