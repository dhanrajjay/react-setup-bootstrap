import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import { ButtonGroup, Button } from 'react-bootstrap';
import '../styles/nav.css';

class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			currentTab: ''
		}
		this.setActiveTab = this.setActiveTab.bind(this);
	}
	setActiveTab(tab) {
		this.setState({currentTab: tab})
	}
	render() {
		return (			
			<nav className="nav-bar">
			    <Link to="/" className={(this.state.currentTab == 'policyType') ? 'active-tab' : ''} onClick={() => this.setActiveTab('policyType')}>
					<img src="" alt="alt" /> Policy Type
				</Link>
		        <Link to="/vehicleInformation" className={(this.state.currentTab == 'vehicleInformation') ? 'active-tab' : ''} onClick={() => this.setActiveTab('vehicleInformation')}>
					<img src="" alt="alt" /> Vehicle Information
		        </Link>
		        <Link to="/driverInformation" className={(this.state.currentTab == 'driverInformation') ? 'active-tab' : ''} onClick={() => this.setActiveTab('driverInformation')}>
					<img src="" alt="alt" /> Driver Information
		        </Link>
	        </nav>
		)
	}
}

export default NavBar;