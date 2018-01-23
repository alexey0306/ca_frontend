// Import section
import React,{Component} from 'react';
import CountriesList from '../common/countries';

// Init section
const styles = {
	row: {
		margin: '10px'
	},
	formElement:{
		marginBottom:'30px'
	},
	input: {
		width:'95%'
	}
}

// Class section
class CA_Subject extends Component{

	constructor(props){
		super(props);
		this.state = {subject:{},subjectDN:"",org:"",dep:"",city:"",country: "",code: ""}
	}

	componentWillReceiveProps(nextProps){
		if (this.props.name != nextProps.name){
			var subject = this.state.subject;
			subject.cn = "CN="+nextProps.name;
			this.setState({subject},function(){this.onChange();});
		}		
	}

	componentDidMount(){
		this.onChange();
	}

	onCountrySelect(state){
		
		if (state.code != ""){
			var subject = this.state.subject;
			subject.country = "C="+state.code;
			this.setState({subject:subject, country: state.country,code: state.code},function(){this.onChange();});
		}
		
	}

	onOrgChange(event){

		// Getting value
		var org = event.target.value;

		// Updating the state
		this.setState({org: event.target.value},function(){
			var subject = this.state.subject;
			if (org == ""){delete subject.org;}
			else{subject.org = "O="+org;}
			this.setState({subject},function(){this.onChange();});	
		})
	}

	onDepChange(event){

		// Getting value
		var dep = event.target.value;

		// Updating the state
		this.setState({dep: event.target.value},function(){
			var subject = this.state.subject;
			if (dep == ""){delete subject.dep;}
			else{subject.dep = "OU="+dep;}
			this.setState({subject},function(){this.onChange();});	
		})
	}

	onCityChange(event){

		// Getting value
		var city = event.target.value;

		// Updating the state
		this.setState({city: event.target.value},function(){
			var subject = this.state.subject;
			if (city == ""){delete subject.city;}
			else{subject.city = "L="+city;}
			this.setState({subject},function(){this.onChange();});	
		})
	}



	onChange(){

		// Getting a list of values from subject object
		var values = Object.values(this.state.subject);
		this.setState({subjectDN: values.join(",")},function(){			
			
			// Sending the object back to parent component
			var subject = {};
			if (this.state.org != ""){subject.O = this.state.org;}
			if (this.state.dep != ""){subject.OU = this.state.dep;}
			if (this.state.code != ""){subject.C = this.state.code;}
			if (this.state.city!= ""){subject.L = this.state.city};

			// Sending the update
			this.props.onChange(subject);
			
		});
	}

	render(){
		return (
			<div>
				<br/>
				<div className="row" style={styles.row}>
					<div style={styles.formElement}>
						<label>Subject DN: <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Filled automatically based on the specified values"></i></label>
							<input readOnly="true" value={this.state.subjectDN} style={styles.input} type="text" className="form-control"/>
					</div>
					<div style={styles.formElement}>
						<label>Country(optional): <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Specify the country for this CA. This value will be used as C= field in the Subject DN"></i></label>
							<CountriesList onChange={this.onCountrySelect.bind(this)} />
					</div>
					<div style={styles.formElement}>
						<label>Company (optional): <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Specify the company name for this CA. This values will be used as O= field in Subject DN"></i></label>
							<input maxLength="128" onChange={this.onOrgChange.bind(this)} value={this.state.org} style={styles.input} type="text" className="form-control"/>
					</div>
					<div style={styles.formElement}>
						<label>Department (optional): <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Specify the department name for this CA. This values will be used as OU= field in Subject DN"></i></label>
							<input maxLength="128" onChange={this.onDepChange.bind(this)} value={this.state.dep} style={styles.input} type="text" className="form-control"/>
					</div>
					<div style={styles.formElement}>
						<label>City (optional): <i className="fa fa-info-circle" aria-hidden="true" rel="tooltip" title="Specify the city name for this CA. This values will be used as L= field in Subject DN"></i></label>
							<input maxLength="128" onChange={this.onCityChange.bind(this)} value={this.state.city} style={styles.input} type="text" className="form-control"/>
					</div>


				</div>
			</div>
		);
	}

}

export default CA_Subject;