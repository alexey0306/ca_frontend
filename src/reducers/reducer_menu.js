// Init section
import {FETCH_MENU} from '../actions/index';

// Import section
const INITIAL_STATE = {items:[], active:""};

// Functions section
export default function (state = INITIAL_STATE, action) {
	switch(action.type){

		// Updating the alarm
		case FETCH_MENU:
			return {...state, items: action.payload }

		default:
			return state;
	}
}