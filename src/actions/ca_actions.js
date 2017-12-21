// Import section
import {FETCH_CAS,success,handleError,ROOT_URL,REQUEST_TIMEOUT} from './index';
import axios from 'axios';
import {showAlert,isLoading} from './alerts_actions';

// Init section
axios.defaults.timeout = REQUEST_TIMEOUT;

// ---------------------------------------------------
// 		Getting the list of Certificate Authorities
// ---------------------------------------------------

export function fetchCAS(term = ""){

	// Generating URLs
	const URL = `${ROOT_URL}ca/list?term=${term}`;
	
	// Handling the logic
	return function(dispatch){
		
		// Displaying the progress
		dispatch(isLoading(true));

		// Sending request
		axios.get(URL)
		.then((response) => {

			// Hiding the progress
			dispatch(isLoading(false));

			// Processing the response
			dispatch(success(response,FETCH_CAS));			
		})
		.catch((err) => {
			handleError(dispatch,err);
		});
	}
}