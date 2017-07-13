import * as types from '../actionTypes';

const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_TODO :
      return { todos: state.todos.concat(action.payload) }
    default:
      return state
  }
}

export default reducer;
