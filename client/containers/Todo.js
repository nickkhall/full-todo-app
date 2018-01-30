import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import TodoComp from '../components/todo';
import TodoCompList from '../components/todoList';

// Actions
import { addTodo, deleteTodo, editTodo, changeTodo, markCompleted } from '../actions';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.changeTodo = this.changeTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.onTodoSubmit = this.onTodoSubmit.bind(this);
  }

  onTodoSubmit(e, value, id) {
    e.preventDefault();
    if (value === '') return;
    this.props.addTodo(value, id);
  }

  changeTodo(todo, newValue, e) {
    if (e) {
      e.preventDefault();
      this.props.editTodo(todo);
    }
    this.props.changeTodo(todo, newValue);
  }

  deleteTodo(todo) {
    this.props.deleteTodo(todo);
  }

  editTodo(todo, isCompleted) {
    if (isCompleted) return;
    this.props.editTodo(todo);
  }

  markCompleted(todo, isEditing) {
    if (isEditing) return;
    this.props.markCompleted(todo);
  }

  render() {
    return (
      <main>
        <TodoComp onTodoSubmit={this.onTodoSubmit} />
        <TodoCompList
          todos={this.props.todos}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
          changeTodo={this.changeTodo}
          markCompleted={this.markCompleted}
        />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  todos: state.todoReducer.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: (todo, id) => { dispatch(addTodo(todo, id)); },
  deleteTodo: (todo) => { dispatch(deleteTodo(todo)); },
  editTodo: (todo) => { dispatch(editTodo(todo)); },
  changeTodo: (todo, newValue) => { dispatch(changeTodo(todo, newValue)); },
  markCompleted: (todo) => { dispatch(markCompleted(todo)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
