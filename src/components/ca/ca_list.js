// Import section
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {ROOT_URL} from '../../actions/index';

//// Import actions
import {fetchCAS} from '../../actions/ca_actions';
import {generateCRL} from '../../actions/crl_actions';

//// Importing additional component
import Modal_PKeyPassword from '../modals/pkey_password';

// Init section

// Class section
class CA_List extends Component{

	constructor(props){
		super(props);
		this.renderCA = this.renderCA.bind(this);
		this.state = {modalKey: false, caID:""}
	}

	componentDidMount(){
		this.props.fetchCAS();
	}

	// Method used to download CA certificate
	downloadCACert(event){
		const URL = `${ROOT_URL}ca/${event.target.id}/crt`;
		window.location.href = URL;
	}

	// Generate new CRL
	onGenerateCRL(event){
		this.setState({caID: event.target.id,modalKey: true});
	}
	generateCRL(password){
		console.log(this.state.caID);
		this.props.generateCRL(this.state.caID,{password:this.state.password});
	}




	renderCA(ca){
		return (
			<tr>
				<td><input id="{{id}}" type="checkbox"/></td>
				<td><Link to={"ca/"+ca.id}>{ca.name}</Link></td>
				<td style={{width:'30%'}}>{ca.description}</td>
				<td><span className="label label-primary">{ca.root_ca}</span></td>
				<td>
					<button title="Download Certificate Authority certificate" 
						id="btnDownloadCA" onClick={this.downloadCACert.bind(this)} id={ca.id} data={ca.id} 
						className="btn btn-default">
							<span className="glyphicon glyphicon-download" aria-hidden="true">
							</span> Download
					</button>
				</td>
				<td>
					<button title="Generate new CRL" id={ca.id} onClick={this.onGenerateCRL.bind(this)} data={ca.id} className="btn btn-default"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> Generate</button>
					<button id="btnDownloadCRL" title="Download selected CRL" data={ca.id} className="btn btn-default"><span className="glyphicon glyphicon-download" aria-hidden="true"></span> Download</button>
				</td>
			</tr>
		);
	}

	render(){
		return (
			<div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th><input type="checkbox" id="selectAll"/></th>
						<th>Name</th>
						<th>Description</th>
						<th>Root CA</th>
						<th>CA certificate</th>
						<th>CRL</th>
					</tr>
				</thead>
				<tbody>
					{this.props.cas.map(this.renderCA)}
				</tbody>
			</table>
			<Modal_PKeyPassword onPasswordSent={this.generateCRL.bind(this)} show={this.state.modalKey} onHide={()=> this.setState({modalKey:false})}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { cas: state.ca.all };
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchCAS,generateCRL},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CA_List);
