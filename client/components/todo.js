import React from 'react';

export default class TodoComp extends React.Component {
  constructor(props) {
    super(props);

    this.onTodoSubmit = this.onTodoSubmit.bind(this);
  }

  onTodoSubmit(e) {
    const value = this.input.value;
    const id = Math.floor((1 + Math.random()) * 0x10000);
    this.props.onTodoSubmit(e, value, id);
    this.input.value = '';
  }

  render() {
    return (
      <section className="todo-container">
        <h1>Insert your todo below</h1>
        <form onSubmit={this.onTodoSubmit}>
          <input
            type="text"
            placeholder="Enter todo.."
            autoFocus
            ref={(ref) => { this.input = ref; }}
          />
          <button type="submit">Add</button>
        </form>
      </section>
    );
  }
}
