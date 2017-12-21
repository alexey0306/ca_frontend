// Import section
import {FETCH_MENU,success} from './index';

// Init section
const items = [
	{id:1, name: 'Certificate Authorities',link: '/ca', icon: 'home'},
	{id:2, name: 'Users',link: '/users', icon: 'users'},
	{id:3, name: 'Certificates',link: '/certs', icon: 'certificate'},
	{id:4, name: 'Templates',link: '/templates', icon: 'template'}
]

// ---------------------------------------------------
// 		Getting the menu
// ---------------------------------------------------

export function fetchMenu(){
	return function(dispatch){
		dispatch(success(items,FETCH_MENU));
	}
}