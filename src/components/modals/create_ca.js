// Import section
import React,{Component} from 'react';
import {Modal,Button,Tabs,Tab} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Init section

// Class section
class CreateCAModal extends Component{

	render(){
		return (
			<form>
			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg">Create new CA</Modal.Title>
				</Modal.Header>
				<Modal.Body className="modalBody">
					
					{/* Displaying the tabs for creating the Certificate Authority */}

					<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
						<Tab eventKey={1} title="General"></Tab>
						<Tab eventKey={2} title="Hierarchy"></Tab>
						<Tab eventKey={3} title="Security"></Tab>
						<Tab eventKey={4} title="CRL and OCSP"></Tab>
						<Tab eventKey={4} title="Subject DN"></Tab>
					</Tabs>


				</Modal.Body>
				<Modal.Footer>
					<button type="submit" className="btn btn-primary">Apply</button>
					<button className="btn btn-danger" onClick={this.props.onHide}>Close</button>
				</Modal.Footer>
			</Modal>
			</form>
		);
	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({},dispatch);
}

CreateCAModal = connect(null, mapDispatchToProps)(CreateCAModal);
export default CreateCAModal;


