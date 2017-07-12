import * as React from "react";

export default class TodoComp extends React.Component {
	render() {
		return (
			<section className="todo-container">
				<h1>Insert your todo below</h1>
				<form onSubmit={this.props.onTodoSubmit}>
					<input type="text" placeholder="Enter todo.." autoFocus={true}/>
					<button type="submit">Add</button>
				</form>
			</section>
		)
	}
}
