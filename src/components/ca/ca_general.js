// Import section
import React,{Component} from 'react';

// Init section

// Class section
class CA_General extends Component{

	constructor(props){
		super(props);
		this.state = {name: "", dscr: ""};
	}

	onNameChange(event){
		this.setState({name: event.target.value},function(){
			this.onChange();
		});
		
	}

	onDscrChange(event){
		this.setState({dscr: event.target.value},function(){
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
				<div className="col-md-12" style={{margin:'10px'}}>
					<div>
						<label>Name: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Certificate Authority name. THis name will be used as CN value in the Subject DN field"></i></label>
						<input onChange={this.onNameChange.bind(this)} type="text" maxLength="128" style={{width:'95%'}} placeholder="Type CA's name" className="form-control" id="txtName" />
					</div>
					<br/>
					<div>
						<label>Description:</label>
						<textarea onChange={this.onDscrChange.bind(this)} rows="5" style={{width:'95%'}} id="txtDscr" placeholder="Type Certificate Authority brief description. Max. 256 characters" className="form-control"></textarea>
					</div><br/>
				</div>
			</div>
			</div>
		);

	}

}

export default CA_General;
