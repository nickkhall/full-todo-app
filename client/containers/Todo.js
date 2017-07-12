import * as React from "react"

// Components
import TodoComp from "../components/todo"
import TodoCompList from '../components/todoList'

export default class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	onTodoSubmit(e) {
		e.preventDefault();

	}

	render() {
		return (
			<main>
				<TodoComp onTodoSubmit={this.onTodoSubmit}/>
				<TodoCompList />
			</main>
		)
	}
}
