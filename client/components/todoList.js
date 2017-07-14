import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class TodoCompList extends Component {
  constructor(props) {
    super(props);
  }

  renderTodos() {
    return (
      this.props.todos.length < 1
        ? <h1>You have no todos at the moment</h1>
        : this.props.todos.map((v,i) => {
            return (!v.isEditing)
              ? <li className="todo-li" key={i}>
                  { v.todo }
                  <span className="delete-todo">
                    <i className="fa fa-trash" onClick={() => this.props.deleteTodo(i)} />
                    <i className="fa fa-pencil-square-o" onClick={() => this.props.editTodo(i)}/>
                  </span>
                </li>
              : <li className="todo-li editing" key={i}>
                  <input
                    type="text"
                    autoFocus={true}
                    value={v.todo}
                    ref={(ref) =>  { this.input = ref }}
                    onChange={() => this.props.changeTodo(i, this.input.value)}
                  />
                  <i className="fa fa-pencil-square-o editing" onClick={() => this.props.editTodo(i)}/>
                </li>
          })
    )
  }

  render() {
    return (
      <ul className={`todo-list${this.props.todos.length < 1 ? ' no-todos' : ''}`}>
        { this.renderTodos() }
      </ul>
    )
  }
}
