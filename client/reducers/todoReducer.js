import * as types from '../actionTypes';

const initialState = {
  todos: [
    'testing todo'
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_TODO: {
      return {
        todos: state.concat(action.payload)
      }
    }
    default:
      return state
  }
}
