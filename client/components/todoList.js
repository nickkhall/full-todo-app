import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class TodoCompList extends Component {
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
