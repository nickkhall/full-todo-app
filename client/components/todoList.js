/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

export default class TodoCompList extends React.Component {
  constructor(props) {
    super(props);

    this.renderTodos = this.renderTodos.bind(this);
  }

  renderTodos() {
    if (this.props.todos.length < 1) {
      return <h1>You have no todos at the moment</h1>;
    }

    return this.props.todos.map((todo) => {
      if (!todo.isEditing) {
        return (
          <li
            className={`todo-li${todo.completed ? ' completed' : ''}`}
            key={todo.id}
            onClick={() => this.props.markCompleted(todo.id, todo.isEditing)}
          >
            { todo.todo }
            <span className="delete-todo">
              <i
                role="presentation"
                className="fa fa-trash"
                onClick={() => this.props.deleteTodo(todo.id)}
              />
              <i
                role="presentation"
                className="fa fa-pencil-square-o"
                onClick={() => this.props.editTodo(todo.id, todo.completed)}
              />
            </span>
          </li>
        );
      }

      return (
        <li className="todo-li editing" key={todo.id}>
          <form onSubmit={e => this.props.changeTodo(todo.id, this.input.value, e)}>
            <input
              type="text"
              autoFocus
              value={todo.todo}
              ref={(ref) => { this.input = ref; }}
              onChange={() => this.props.changeTodo(todo.id, this.input.value)}
            />
          </form>
          <i
            role="presentation"
            className="fa fa-pencil-square-o editing"
            onClick={() => this.props.editTodo(todo.id)}
          />
        </li>
      );
    });
  }

  render() {
    return (
      <ul className={`todo-list${this.props.todos.length < 1 ? ' no-todos' : ''}`}>
        { this.renderTodos() }
      </ul>
    );
  }
}
