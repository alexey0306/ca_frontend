// Import section
import React,{Component} from 'react';
import {Modal,Button,Tabs,Tab} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {create} from '../../actions/ca_actions';

// Import additional components
import CA_General from '../ca/ca_general';
import CA_Hierarchy from '../ca/ca_hierarchy';
import PanelAlert from '../common/panel_alert';
import CA_Security from '../ca/ca_security';
import CA_CRL from '../ca/ca_crl';
import CA_Subject from '../ca/ca_subject';

// Init section
const styles = {
	tab:{
		padding: '10px'
	}
}
var errors = [];

// Class section
class CreateCAModal extends Component{

	constructor(props){
		super(props);
		this.state = {
			name: "", dscr: "", type: "0", root_ca: "-1",rootPassword:"",CN: "",
			password: "",valid: 1, keylen: 512, hash: "SHA1",
			extensions: {
				crl: false,
				ocsp: false,
				issuers: false
			},
			subjectDN: "",
			alertVisible: false,
			alertText: ""
		}
	}

	dismissAlert(){
		this.setState({alertVisible:false});
	}

	onGeneralChange(state){
		this.setState({name: state.name, dscr: state.dscr},function(){
			this.setState({CN: state.name});
		});
	}

	onHieraChanged(state){
		this.setState({
			type: state.type, 
			root_ca: parseInt(state.root_ca),
			rootPassword: state.password
		});
	}

	onSecurityChanged(state){
		this.setState({
			password: state.password, 
			valid: parseInt(state.valid),
			keylen: parseInt(state.keylen),
			hash: state.hash
		});
	}

	onCRLChanged(state){

		// Getting extensions from state
		var extensions = this.state.extensions;

		// Updating the extensions
		extensions.crl = state.includeCRL;
		extensions.ocsp = state.includeOCSP;
		extensions.issuers = state.includeIssuers;

		// Updating the state
		this.setState({extensions});
	}

	onSubjectChange(subject){
		this.setState({subjectDN: subject});
	}

	createNewCA(){

		errors = [];

		// Checking Certificate Authority name
		if (this.state.name == ""){
			errors.push("* Please specify the <strong>Certificate Authority name</strong>");
		}

		// Checking the password for the Root CA if we're creating the Intermediate
		if ( (this.state.type == "1") && (this.state.rootPassword == "") ){
			errors.push("* Please specify the <strong>password for Root CA private key</strong>");
		}

		// Checking the Security tab data
		if ( this.state.password == "" ){
			errors.push("* Please specify the <strong>password to protect CA private key</strong>");
		}

		// Checking if there are any errors
		if ( errors.length > 0 ){
			this.setState({alertVisible: true, alertText: errors.join("<br/>")});
			return;
		}

		var ca = this.state;
		delete ca['alertVisible'];
		delete ca['alertText'];
		ca.subjectDN.CN = ca.name

		//console.log(ca);
		this.props.create(ca);
	}

	render(){
		return (
			<form>
			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg">Create new CA</Modal.Title>
				</Modal.Header>
				<Modal.Body className="modalBody">

					<PanelAlert onDismiss={this.dismissAlert.bind(this)} show={this.state.alertVisible} text={this.state.alertText} />
					
					{/* Displaying the tabs for creating the Certificate Authority */}

					<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
						<Tab eventKey={1} title="General" style={styles.tab}>
							<CA_General onChange={this.onGeneralChange.bind(this)} />
						</Tab>
						<Tab eventKey={2} title="Hierarchy" style={styles.tab}>
							<CA_Hierarchy onChange={this.onHieraChanged.bind(this)} />
						</Tab>
						<Tab eventKey={3} title="Security" style={styles.tab}>
							<CA_Security onChange={this.onSecurityChanged.bind(this)}/>
						</Tab>
						<Tab eventKey={4} title="CRL and OCSP" style={styles.tab}>
							<CA_CRL onChange={this.onCRLChanged.bind(this)} />
						</Tab>
						<Tab eventKey={5} title="Subject DN" style={styles.tab}>
							<CA_Subject onChange={this.onSubjectChange.bind(this)} name={this.state.CN} />
						</Tab>
					</Tabs>


				</Modal.Body>
				<Modal.Footer>
					<button onClick={this.createNewCA.bind(this)} type="submit" className="btn btn-primary">Apply</button>
					<button className="btn btn-danger" onClick={this.props.onHide}>Close</button>
				</Modal.Footer>
			</Modal>
			</form>
		);
	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({create},dispatch);
}

CreateCAModal = connect(null, mapDispatchToProps)(CreateCAModal);
export default CreateCAModal;


