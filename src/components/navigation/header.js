// Import section
import React,{Component} from 'react';

// Init section
const styles = {
	header: {
		color: '#fff',
		background: '#2c3742',
		fontSize:'1.5em',
		paddingTop:'10px',
		paddingBottom:'10px' 
	}
}

// Class section
class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
			<div className="row">
				<div className="col-md-12" style={styles.header}>
					<span style={{marginLeft: '20px'}}>Flask Certificate Authority</span>
				</div>
			</div><br/>
			</div>
		);
	}
}

export default Header;
