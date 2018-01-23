// Import section
import React, {Component} from 'react';
import {Tabs,Tab} from 'react-bootstrap';

//// Importing additional components
import CA_List from './ca_list';
import CA_Panel from './ca_panel';

// Init section

// Class section
class CA_Index extends Component{
	render(){
		return (<div>

			<h2> Certificate Authorities </h2><hr/>
			<CA_Panel /><br/><br/>
			<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
				<Tab eventKey={1} title="List" style={{paddingTop:'30px'}}>
					{/* List of Certificate Authorities */}
					<CA_List />
				</Tab>
				<Tab eventKey={2} title="Topology">
					{/* Topology */}
				</Tab>
			</Tabs>
		</div>);
	}
}

export default CA_Index;