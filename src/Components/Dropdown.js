import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
import './Task9CSS/dropdownStyle.css';

// This component uses a dropdown menu from react bootstrap along with NavLinks from react-router-dom
class MyDropdown extends Component {
	render() {

		return (
			<div id="dropdownDiv">
				<Dropdown>
				  <Dropdown.Toggle id="dropdown-basic">
				    Dropdown Menu
				  </Dropdown.Toggle>

				  <Dropdown.Menu id="dropmenu">
				  	<Dropdown.Item className="dropItem"><NavLink id="nav1" className="links" to="/">>Home</NavLink></Dropdown.Item>
				  	<Dropdown.Item className="dropItem"><NavLink id="nav2" className="links" to="/currencyConverter">>Currency Converter</NavLink></Dropdown.Item>
				  	<Dropdown.Item className="dropItem"><NavLink id="nav3" className="links" to="/cardGame">>Win!</NavLink></Dropdown.Item>				    
				  </Dropdown.Menu>
				</Dropdown>
			</div>
		);
	}
}

export default MyDropdown;