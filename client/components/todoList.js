import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoCompList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  // renderTodos() {
  //   return (
  //     this.props.todos.map(v => {
  //       return <li className="todo-li">{ v }</li>
  //     })
  //   )
  // }

  render() {
    console.log(this.props);
    return (
      <ul>

      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: () => {dispatch(addTodo())},
  }
}

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(TodoCompList)
