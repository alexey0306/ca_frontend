// Import section
import React,{Component} from 'react';

// Init section
const styles = {
	formElement:{
		marginBottom: '30px'
	},
	input: {
		width: '95%'
	},
	select: {
		width: '95%'
	}
}

// Class section
class CA_CRL extends Component{

	constructor(props){
		super(props);
		this.state = {includeCRL: false, includeOCSP: false, includeIssuers: false};
	}

	onIncludeCRLChanged(event){
		var includeCRL = ( event.target.value == "0" ? false : true );
		this.setState({includeCRL},function(){
			this.onChange();
		});

	}
	onIncludeOCSPChanged(event){
		var includeOCSP = ( event.target.value == "0" ? false : true );
		this.setState({includeOCSP},function(){
			this.onChange();
		});

	}

	onIncludeIssuersChanged(event){
		var includeIssuers = ( event.target.value == "0" ? false : true );
		this.setState({includeIssuers},function(){
			this.onChange();
		});

	}

	onChange(){
		this.props.onChange(this.state);
	}

	render(){
		return (
			<div>
				<br/>
				<div className="row">
					<div className="col-md-12">
						<div style={styles.formElement}>
							<label>Include CRL: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="If option is enabled, then CRL Distribution Point will be included in the CA certificate. Also this CDP will be used by default by all certificates issued by this CA"></i></label>
							<select style={styles.select} onChange={this.onIncludeCRLChanged.bind(this)} id="selectCRL" className="form-control">
								<option value="0"> Don't include </option>
								<option value="1"> Include </option>
							</select>
						</div>
						<div style={styles.formElement}>
							<label>Include AIA OCSP: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="If option is enabled, then AIA extension with OCSP URL will be included in the CA certificate. Also this AIA will be used by default by all certificates issued by this CA"></i></label>
							<select style={styles.select} onChange={this.onIncludeOCSPChanged.bind(this)} id="selectOCSP" className="form-control">
								<option value="0"> Don't include </option>
								<option value="1"> Include </option>
							</select>
						</div>
						<div style={styles.formElement}>
							<label>Include AIA Issuers: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="If option is enabled, then AIA extension with Issuers URL will be included in the CA certificate. Also this AIA will be used by default by all certificates issued by this CA"></i></label>
							<select style={styles.select} onChange={this.onIncludeIssuersChanged.bind(this)} id="selectIssuers" className="form-control">
								<option value="0"> Don't include </option>
								<option value="1"> Include </option>
							</select>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CA_CRL;