import {Route,IndexRoute} from 'react-router';
import React from 'react';
import App from './components/App';
import CA_Index from './components/ca/ca_index';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={CA_Index}/>
	</Route>
);
