import { combineReducers } from 'redux';
import ReducerMenu from './reducer_menu';
import ReducerCA from './reducer_ca';
import AlertsReducer from './reducer_alerts';

const rootReducer = (state, action) => {
  return appReducer(state,action);
}

const appReducer = combineReducers({
  menu: ReducerMenu,
  ca: ReducerCA,
  alerts: AlertsReducer
});

export default rootReducer;
