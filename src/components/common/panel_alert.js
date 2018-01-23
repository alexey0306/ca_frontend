// Import section
import React,{Component} from 'react';
import {Alert} from 'react-bootstrap';

// Init section

// Class section
class PanelAlert extends Component{

	handleAlertDismiss(){
		this.props.onDismiss();
	}

	render(){
		if (this.props.show){
			return (
				<Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)}>
					<div dangerouslySetInnerHTML={{__html: this.props.text}}></div>
				</Alert>
			);
		}
		else{
			return <div></div>;
		}
	}
}

export default PanelAlert;