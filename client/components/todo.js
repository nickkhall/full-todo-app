import * as React from "react";

export default class TodoComp extends React.Component {
	constructor(props) {
		super(props);
	}

	onTodoSubmit(e) {
		// console.log(this.refs.todoInput);
		// this.props.onTodoSubmit(e, this.refs.todoInput);
	}

	render() {
		return (
			<section className="todo-container">
				<h1>Insert your todo below</h1>
				<form onSubmit={this.onTodoSubmit.bind(this)}>
					<input
						type="text"
						placeholder="Enter todo.."
						autoFocus={true}
						ref={(input) => { this.todoInput = input; }}
					/>
					<button type="submit">Add</button>
				</form>
			</section>
		)
	}
}
