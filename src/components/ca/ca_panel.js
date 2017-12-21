// Import section
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from '../common/search_bar';
import CreateCAModal from '../modals/create_ca';

// Init section

// Class section
class CA_Panel extends Component{

	constructor(props){
		super(props);
		this.state = {modalCreate: false}
	}

	render(){
		return (
			<div className="row">
				<div className="col-md-11">
					<div className="col-md-3">
						<button onClick={() => this.setState({modalCreate: true})} title="Click to update the list of notes" type="button" className="btn btn-default" aria-label="Left Align" id="btnCreate"> 
							<i className="fa fa-plus" aria-hidden="true"></i> Create new CA
						</button>
					</div>
					<div className="col-md-9">
						<SearchBar onSearch={this.onSearchClick} />
					</div>					
				</div>
				<CreateCAModal show={this.state.modalCreate} onHide={()=> this.setState({modalCreate:false})}/>
			</div>

		);
	}
}

function mapStateToProps(state){
	return { ca: state.ca };
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CA_Panel);
