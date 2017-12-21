// Import section
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCAS} from '../../actions/ca_actions';
import {Link} from 'react-router';

// Init section

// Class section
class CA_List extends Component{

	constructor(props){
		super(props);
		this.renderCA = this.renderCA.bind(this);
	}

	componentDidMount(){
		this.props.fetchCAS();
	}

	renderCA(ca){
		return (
			<tr>
				<td><input id="{{id}}" type="checkbox"/></td>
				<td><Link to={"ca/"+ca.id}></Link></td>
				<td style="width:30%">{ca.dscr}</td>
				<td><span className="label label-primary">{ca.root_ca}</span></td>
				<td>
					<button title="Download Certificate Authority certificate" 
						id="btnDownloadCA" data={ca.id} 
						className="btn btn-default">
							<span className="glyphicon glyphicon-download" aria-hidden="true">
							</span> Download
					</button>
				</td>
				<td>
					<button title="Generate new CRL" id="btnGenerateCRL" data={ca.id} className="btn btn-default"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> Generate</button>
					<button id="btnDownloadCRL" title="Download selected CRL" data={ca.id} className="btn btn-default"><span className="glyphicon glyphicon-download" aria-hidden="true"></span> Download</button>
				</td>
			</tr>
		);
	}

	render(){
		return (
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
		);
	}
}

function mapStateToProps(state){
	return { cas: state.ca.all };
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchCAS},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CA_List);
