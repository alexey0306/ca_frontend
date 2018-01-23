// Import section
import React,{Component} from 'react';

// Init section
const styles = {
	row: {
		margin: '10px'
	},
	formElement:{
		marginBottom:'30px'
	},
	select:{
		width: '50%'
	},
	number:{
		width:'20%'
	}
}

const keyLengths = [512,1024,2048,4096,8192];
const hashAlgs = ["SHA1","SHA2","SHA256"];

// Class section
class CA_Security extends Component{

	constructor(props){
		super(props);
		this.state = {password: "", valid: 1,keylen: 512, hash: "SHA1"};
	}

	onPasswordChange(event){
		this.setState({password: event.target.value},function(){
			this.onChange();
		});		
	}

	onValidityChange(event){
		this.setState({valid: event.target.value},function(){
			this.onChange();
		});		
	}

	onKeylenChanged(event){
		this.setState({keylen: event.target.value},function(){
			this.onChange();
		});
		
	}

	onChange(){
		this.props.onChange(this.state);
	}

	onHashChanged(event){
		this.setState({hash: event.target.value},function(){
			this.onChange();
		});
	}

	render(){

		return (
			<div>
			<br/>
			<div className="row">
				<div className="col-md-12" style={styles.row}>
					<div style={styles.formElement}>
						<label>Password: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Specify the password that will be used to protect Certificate Authority Private key. Please remember this password because it's not saved anywhere"></i></label>
						<input onChange={this.onPasswordChange.bind(this)} type="password" maxLength="32" style={{width:'95%'}} placeholder="Specify the password to encrypt CA private's key" className="form-control"/>
					</div>
					<div style={styles.formElement}>
						<label>Validity (months): <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Specify the number of months the CA certificate will be valid"></i></label>
						<input value={this.state.valid} onChange={this.onValidityChange.bind(this)} type="number" style={styles.number} className="form-control"/>
					</div>
					<div style={styles.formElement}>
						<label>Key Length: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Specify the key length for CA keys"></i></label>
						<select onChange={this.onKeylenChanged.bind(this)} className="form-control" style={styles.select} >
							{keyLengths.map(function(item){
								return (
									<option key={item} value={item}>{item} bits</option>
								)
							})};	
						</select>
					</div>
					<div style={styles.formElement}>
						<label>Hash Algorithm: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Select the hashing algorithm"></i></label>
						<select onChange={this.onHashChanged.bind(this)} className="form-control" style={styles.select} >
							{hashAlgs.map(function(item){
								return (<option key={item} value={item}>{item}</option>)
							})}			
						</select>
					</div>
					
				</div>
			</div>
			</div>
		);

	}

}

export default CA_Security;