import * as React from "react"
import * as Redux from "redux"
import ReactDOM from "react-dom"
import css from './client/sass/main.scss'

// Containers
import Todo from "./client/containers/Todo"

// Styles
//require('./client/styles/main.scss');

export default class App extends React.Component {
	render() {
		console.log({Todo});
		return (
			<Todo className="app" />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
