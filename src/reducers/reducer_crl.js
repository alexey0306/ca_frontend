// Init section
import {GENERATE_CRL} from '../actions/index';

// Import section
const INITIAL_STATE = {all:[]};

// Functions section
export default function (state = INITIAL_STATE, action) {
	switch(action.type){

		// Generating new CRL
		case GENERATE_CRL:
			return state;

		default:
			return state;
	}
}