import * as types from '../actionTypes';

const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // Add Todo
    case types.ADD_TODO:
      const todo = Object.assign({}, {
        todo: action.payload,
        completed: false,
        isEditing: false
      });

      return { todos: state.todos.concat(todo) }

    // Delete Todo
    case types.DELETE_TODO:
      return {
        todos: state.todos.filter((v,i) => {
          if(i === action.payload) return;
          return v;
        })
      }

    // Edit Todo (Activate Edit Mode)
    case types.EDIT_TODO:
      return {
        todos: state.todos.map((v,i) => {
          if(action.payload === i) {
            console.log('action.payload equals i');
            v.isEditing = !v.isEditing;
            return v;
           }
        })
      }

    // Change Todo (Actually Editing Todo Value)
    case types.CHANGE_TODO:
    return {
      todos: state.todos.map((v,i) => {
        console.log({v});
        if(action.payload.todo === i) {
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
