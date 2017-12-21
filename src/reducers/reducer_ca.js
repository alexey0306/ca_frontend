// Init section
import {FETCH_CAS} from '../actions/index';

// Import section
const INITIAL_STATE = {all:[], ca:{}};

// Functions section
export default function (state = INITIAL_STATE, action) {
	switch(action.type){

		// Updating the alarm
		case FETCH_CAS:
			return {...state, all: action.payload.data }

		default:
			return state;
	}
}