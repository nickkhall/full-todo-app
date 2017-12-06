import React from "react"
import * as Redux from "redux"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

// Styles
import css from './client/sass/main.scss'

// Containers
import App from "./client/containers/App"
import Todo from "./client/containers/Todo"

import store from './client/store'

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
document.getElementById('app'));
