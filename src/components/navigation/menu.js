// Import section
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMenu} from '../../actions/menu_actions';
import {Link} from 'react-router';


// Init section
const styles = {
	
}

// Class section
class Menu extends Component{
	constructor(props){
		super(props);
		this.renderMenu.bind(this);
	}

	componentDidMount(){
		this.props.fetchMenu();
	}

	renderMenu(item){
		return (
			<li key={item.id} className="">
			<Link to={item.link}>
				<i style={{width:'20px'}} className={`fa fa-${item.icon}`} aria-hidden="true"></i> {item.name}
			</Link>
			</li>
		);
	}


	render(){
		return (
			<div className="sidebar content-box" style={{display:'block'}}>
				<ul className="nav">
					{this.props.menu.items.map(this.renderMenu)}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { menu: state.menu };
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchMenu},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
