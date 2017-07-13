import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class TodoCompList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  renderTodos() {
    return (
      this.props.todos.map((v,i) => {
        return (
          <li className="todo-li" key={i}>
            { v }
            <span className="delete-todo">
              <i className="fa fa-trash" />
            </span>
          </li>
        )
      })
    )
  }

  render() {
    return (
      <ul className="todo-list">
        { this.renderTodos() }
      </ul>
    )
  }
}
