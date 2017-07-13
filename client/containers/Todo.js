import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import TodoComp from "../components/todo"
import TodoCompList from '../components/todoList'

// Actions
import { addTodo } from '../actions'

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	onTodoSubmit(e, value) {
		e.preventDefault();
		this.props.addTodo(value);
	}

	render() {
		return (
			<main>
				<TodoComp onTodoSubmit={this.onTodoSubmit.bind(this)}/>
				<TodoCompList todos={this.props.todos} />
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
		addTodo: (todo) => {dispatch(addTodo(todo))}
	}
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(Todo)
