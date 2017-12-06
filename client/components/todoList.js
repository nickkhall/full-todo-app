import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class TodoCompList extends Component {
  constructor(props) {
    super(props);
  }

  renderTodos() {
    if(this.props.todos.length < 1) {
      return <h1>You have no todos at the moment</h1>
    }

    return this.props.todos.map((todo,index) => {
        if(!todo.isEditing) {
          return (
            <li
              className={`todo-li${todo.completed ? ' completed' : ''}`}
              key={todo._id}
              onClick={() => this.props.markCompleted(todo._id, todo.isEditing)}
            >
              { todo.todo }
              <span className="delete-todo">
                <i className="fa fa-trash" onClick={() => this.props.deleteTodo(todo._id)} />
                <i className="fa fa-pencil-square-o" onClick={() => this.props.editTodo(todo._id, todo.completed)}/>
              </span>
            </li>
          )
        }

        return (
          <li className="todo-li editing" key={todo._id}>
            <form onSubmit={e => this.props.changeTodo(todo._id, this.input.value, e)}>
              <input
                type="text"
                autoFocus={true}
                value={todo.todo}
                ref={(ref) =>  { this.input = ref }}
                onChange={() => this.props.changeTodo(todo._id, this.input.value)}
              />
            </form>
            <i className="fa fa-pencil-square-o editing" onClick={() => this.props.editTodo(todo._id)}/>
          </li>
        )
      });
    }

  render() {
    return (
      <ul className={`todo-list${this.props.todos.length < 1 ? ' no-todos' : ''}`}>
        { this.renderTodos() }
      </ul>
    )
  }
}
