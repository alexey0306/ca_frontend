// Import section
import React,{Component} from 'react';
import {connect} from 'react-redux';
import CA_Dropdown from './ca_dropdown';

// Init section
const styles = {
	row: {
		margin: '10px'
	},
	formElement:{
		marginBottom:'30px'
	}
}

// Class section
class CA_Hierarchy extends Component{

	constructor(props){
		super(props);
		this.state = {type: "0", root_ca: "-1", disabled: true,password: ''};
	}
	
	onChange(){
		this.props.onChange(this.state);
	}

	onTypeSelected(event){
		this.setState({disabled: (event.target.value == "0"), type: event.target.value},function(){
			this.onChange();
		});
		
	}

	onPasswordChange(event){
		this.setState({ password: event.target.value },function(){
			this.onChange();
		});
		
	}

	onCASelected(value){
		this.setState({root_ca: value},function(){
			this.onChange();
		});
		
	}

	render(){

		return (
			<div>
				<br/>
				<div className="row">
					<div className="col-md-12" style={{margin:'10px'}}>
						<div style={styles.formElement}>
							<label>CA Type: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Select whether you want to create Root or Intermediate CA"></i>
							</label>
							<select onChange={this.onTypeSelected.bind(this)} className="form-control" style={{width:'95%'}}>
								<option value="0">Root</option>
								<option value="1">Intermediate</option>
							</select>
						</div>
						<div style={styles.formElement}>
							<label>Certificate Authority: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Select the root Certificate Authority for this CA"></i></label>
							<CA_Dropdown disabled={this.state.disabled} onChange={this.onCASelected.bind(this)} />
						</div>
						<div style={styles.formElement}>
							<label>Private key password: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="If you want to create Intermediate CA, it's key must be signed by Root CA private key. Since private key is encrypted, you need password to decrypt it"></i></label>
							<input disabled={this.state.disabled} onChange={this.onPasswordChange.bind(this)} type="password" maxLength="128" value={this.state.password} style={{width:'95%'}} placeholder="Specify the password to decrypt root CA private key" className="form-control" id="txtPassword" />
						</div>
					</div>
				</div>
			</div>
		);

	}

}

export default CA_Hierarchy;
