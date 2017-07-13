import * as React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import TodoComp from "../components/todo"
import TodoCompList from '../components/todoList'

// actions
import * as actions from '../actions'

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	onTodoSubmit(e, value) {
		e.preventDefault();
		console.log({e, value});
	}

	render() {
		return (
			<main>
				<TodoComp onTodoSubmit={this.onTodoSubmit}/>
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
		addTodo: (todo) => {dispatch(addTodo(todo))},
	}
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(Todo)
