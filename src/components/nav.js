import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import { ButtonGroup, Button } from 'react-bootstrap';
import '../styles/nav.css';

class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			currentTab: 'agent'
		}
		this.setActiveTab = this.setActiveTab.bind(this);
	}
	setActiveTab(tab) {
		this.setState({currentTab: tab})
	}
	render() {
		return (			
			<nav className="nav-bar">
			    <Link to="/agent" className={(this.state.currentTab == 'agent') ? 'active-tab' : ''} onClick={() => this.setActiveTab('agent')}>
					<img src="" alt="alt" /> AGENT
				</Link>
		        <Link to="/agency" className={(this.state.currentTab == 'agency') ? 'active-tab' : ''} onClick={() => this.setActiveTab('agency')}>
					<img src="" alt="alt" /> AGENT
		        </Link>
	        </nav>
		)
	}
}

export default NavBar;