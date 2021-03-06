// Import section
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import {Router,browserHistory} from 'react-router';
import routes from './routes'
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import 'font-awesome/css/font-awesome.min.css';

// Init section
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// Render section
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
  , document.querySelector('.app_container'));