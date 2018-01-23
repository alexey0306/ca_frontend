// Import section
import {GENERATE_CRL,success,handleError,ROOT_URL,REQUEST_TIMEOUT} from './index';
import axios from 'axios';
import {showAlert,isLoading} from './alerts_actions';

// Init section
axios.defaults.timeout = REQUEST_TIMEOUT;

// ---------------------------------------------------
// 		Getting the list of Certificate Authorities
// ---------------------------------------------------

export function generateCRL(id,data){

	// Generating URLs
	const URL = `${ROOT_URL}ca/${id}/crl/generate`;
	
	// Handling the logic
	return function(dispatch){
		
		// Displaying the progress
		dispatch(isLoading(true));

		// Sending request
		axios.post(URL,data)
		.then((response) => {

			// Hiding the progress
			dispatch(isLoading(false));

			// Processing the response
			dispatch(success(response,GENERATE_CRL));			
		})
		.catch((err) => {
			handleError(dispatch,err);
		});
	}
}