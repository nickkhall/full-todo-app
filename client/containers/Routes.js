import React from 'react'
import { browserHistory, HashRouter, Route, Switch } from 'react-router-dom'

import Todo from './Todo';

const Routes = () => {
    return (
    	<HashRouter history={ browserHistory }>
	        <Switch>
	        	<Route exact={ true } path="/" component={ Todo }/>
	        </Switch>
        </HashRouter>
    );
}

export default Routes
