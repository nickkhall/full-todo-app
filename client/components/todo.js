import * as React from "react";

export default class TodoComp extends React.Component {
	constructor(props) {
		super(props);
	}

	onTodoSubmit(e) {
		let value = this.input.value;
		this.props.onTodoSubmit(e, value);
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
						ref={(ref) => { this.input = ref; }}
					/>
					<button type="submit">Add</button>
				</form>
			</section>
		)
	}
}
