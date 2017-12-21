// Import sections
import {showAlert,isLoading} from './alerts_actions';

// System parameters
export const ROOT_URL = "http://www.saferoomapp.com:5000/";

// Menu actions
export const FETCH_MENU = "FETCH_MENU";

// Certificate Authority actions
export const FETCH_CAS = "FETCH_CAS";
export const FETCH_CA = "FETCH_CA";
export const DELETE_CAS = "DELETE_CAS";

// Alert actions
export const SHOW_ALERT = "SHOW_ALERT";
export const CLEAR_ALERTS = "CLEAR_ALERTS";
export const REQUEST_TIMEOUT = 20000;
export const HANDLE_LOADER = "HANDLE_LOADER";

// Alert types
export const TYPE_DANGER = "danger";
export const TYPE_SUCCESS = "success";
export const TYPE_WARN = "warning";

// Functions
export function success(response,type){
	return {
		type: type,
		payload: response
	}
}

export function handleError(dispatch,err){
	var message = "";
	if (err.response){message = err.response.data.message;}
	else{message = err.toString();}
	dispatch(showAlert(TYPE_DANGER,message));
	dispatch(isLoading(false));
}