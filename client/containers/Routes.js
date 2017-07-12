import React from 'react'
import { browserHistory, HashRouter, Route, Switch } from 'react-router-dom'

import App from './App';

const Routes = () => {
    return (
    	<HashRouter history={ browserHistory }>
	        <Switch>
	        	<Route exact={ true } path="/" component={ App }/>
	        </Switch>
        </HashRouter>
    );
}

export default Routes
