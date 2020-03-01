import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
	render() {
		return (			
			<nav>
				<Link to="/agent">Agent</Link>
		        <Link to="/agency">Agency</Link>
	        </nav>
		)
	}
}

export default NavBar;