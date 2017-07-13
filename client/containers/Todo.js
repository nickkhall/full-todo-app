import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import TodoComp from "../components/todo"
import TodoCompList from '../components/todoList'

// Actions
import { addTodo, deleteTodo } from '../actions'

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	deleteTodo(todo) {
		this.props.deleteTodo(todo);
	}

	editTodo(todo) {
		this.props.editTodo(todo);
	}

	onTodoSubmit(e, value) {
		e.preventDefault();
		this.props.addTodo(value);
	}

	render() {
		return (
			<main>
				<TodoComp onTodoSubmit={this.onTodoSubmit.bind(this)}/>
				<TodoCompList
					todos={this.props.todos}
					deleteTodo={this.deleteTodo.bind(this)}
					editTodo={this.editTodo.bind(this)}
				/>
			</main>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todoReducer.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (todo) => {dispatch(addTodo(todo))},
		deleteTodo: (todo) => {dispatch(deleteTodo(todo))},
		editTodo: (todo) => {dispatch(editTodo(todo))}
	}
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(Todo)
