import * as React from "react"
import { connect, bindActionCreators } from 'redux'

// Components
import TodoComp from "../components/todo"
import TodoCompList from '../components/todoList'

// actions
import * as actions from '../actions'

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	onTodoSubmit(e) {
		e.preventDefault();

	}

	render() {
		return (
			<main>
				<TodoComp onTodoSubmit={this.onTodoSubmit} todos={this.props.todos}/>
				<TodoCompList />
			</main>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(Todo)
