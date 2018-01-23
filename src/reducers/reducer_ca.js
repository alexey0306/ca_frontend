// Init section
import {FETCH_CAS,CREATE_CA} from '../actions/index';

// Import section
const INITIAL_STATE = {all:[], ca:{}};

// Functions section
export default function (state = INITIAL_STATE, action) {
	switch(action.type){

		// Updating the alarm
		case FETCH_CAS:
			return {...state, all: action.payload.data }

		// Creating new CA
		case CREATE_CA:
			return state;

		default:
			return state;
	}
}