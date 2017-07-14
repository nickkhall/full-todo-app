import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import TodoComp from "../components/todo"
import TodoCompList from '../components/todoList'

// Actions
import { addTodo, deleteTodo, editTodo, changeTodo } from '../actions'

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	changeTodo(todo, newValue) {
		this.props.changeTodo(todo, newValue);
	}

	deleteTodo(todo) {
		this.props.deleteTodo(todo);
	}

	editTodo(todo) {
		this.props.editTodo(todo);
	}

	onTodoSubmit(e, value, id) {
		e.preventDefault();
		if(value === '') return;
		this.props.addTodo(value, id);
	}

	render() {
		console.log(this.props);
		return (
			<main>
				<TodoComp onTodoSubmit={this.onTodoSubmit.bind(this)}/>
				<TodoCompList
					todos={this.props.todos}
					deleteTodo={this.deleteTodo.bind(this)}
					editTodo={this.editTodo.bind(this)}
					changeTodo={this.changeTodo.bind(this)}
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
		addTodo: (todo, id) => {dispatch(addTodo(todo, id))},
		deleteTodo: (todo) => {dispatch(deleteTodo(todo))},
		editTodo: (todo) => {dispatch(editTodo(todo))},
		changeTodo: (todo, newValue) => {dispatch(changeTodo(todo, newValue))}
	}
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(Todo)
