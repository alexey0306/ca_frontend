// Import section
import React,{Component} from 'react';
import {Modal} from 'react-bootstrap';

// Init section
const styles = {
	input: {
		width:"95%"
	}
}
const placeholder = "Please specify the private key password";

// Class section
class Modal_PKeyPassword extends Component{

	constructor(props){
		super(props);
		this.state = {password: ""};
	}

	onPasswordChange(event){
		this.setState({password: event.target.value});
	}

	onSendPassword(){
		this.props.onPasswordSent(this.state.password);
	}

	render(){
		return (
		<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg">Private Key password</Modal.Title>
				</Modal.Header>
				<Modal.Body className="modalBody">
					<div className="form-group">
						<input style={styles.input} onChange={this.onPasswordChange.bind(this)} type="password" className="form-control" placeholder={placeholder} />
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.onSendPassword.bind(this)} type="submit" className="btn btn-primary">Apply</button>
					<button className="btn btn-danger" onClick={this.props.onHide}>Close</button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default Modal_PKeyPassword;