// Import section
import React,{Component} from 'react';
import {connect} from 'react-redux';

// Init section
const styles = {
	select: {
		width: '95%'
	}
}

// Class section
class CA_Dropdown extends Component{

	constructor(props){
		super(props);
		this.state = {hasError: false}
	}


	onChange(event){

		this.setState({hasError: (event.target.value == "")})
		if (event.target.value == ""){return;}

		// Otherwise send the selected value to parent component
		this.props.onChange(event.target.value);
	}

	render(){
		return(
			<div className={`form-group ${ this.state.hasEerror ? 'has-error' : '' }`}>
				<select disabled={this.props.disabled} onChange={this.onChange.bind(this)} className="form-control" style={styles.select} >
					<option value=""> -- Select Certificate Authority -- </option>
					<option value="1"> Test </option>
					{this.props.cas.map(function(ca){
						return (
							<option id={ca.id} key={ca.id} value={ca.id}>{ca.name}</option>
						);
					})}
				</select>
				{ !this.state.hasError ? ('') : (<div className="help-block">Please select Certificate Authority </div>) }
			</div>
		)
	}

}

function mapStateToProps(state){
	return { cas: state.ca.all };
}

export default connect(mapStateToProps,null)(CA_Dropdown);