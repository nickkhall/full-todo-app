import * as types from '../actionTypes';

const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // Add Todo
    case types.ADD_TODO:
      const todo = state.todos.push(
        Object.assign({}, {
          _id: action.payload.id,
          todo: action.payload.todo,
          completed: false,
          isEditing: false,
        })
      );

      return {
        ...state
      }

    // Delete Todo
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(v => v._id !== action.payload)
      }

    // Edit Todo (Activate Edit Mode)
    case types.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if(action.payload === todo._id) {
            todo.isEditing = !todo.isEditing;
            return todo;
           }
           return todo;
        })
      }

    // Change Todo (Actually Editing Todo Value)
    case types.CHANGE_TODO:
    return {
      ...state,
      todos: state.todos.map(todo => {
        if(action.payload.todo === todo._id) {
          todo.todo = action.payload.newValue;
          return todo;
        }
        return todo;
      })
    }

    // Mark Todo As completed
    case types.MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if(todo._id === action.payload) {
            todo.completed = !todo.completed;
            return todo;
          }
          return todo;
        })
      }

    default:
      return { ...state }
  }
}

export default reducer;
