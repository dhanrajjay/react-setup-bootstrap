import React, { Component } from 'react';
import { Translation } from 'react-i18next';
import i18n from '../i18n';
import Header from './header';
import Footer from './footer';
import ROUTES_LIST, { Routes } from '../core/routes';
import { ErrorBoundary } from '../components/error';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

class App extends Component {
	render() {
		return(
			<div>
				<ErrorBoundary><Header /></ErrorBoundary>
				<ErrorBoundary><Routes routes={ROUTES_LIST} /></ErrorBoundary>
				<ErrorBoundary><Footer /></ErrorBoundary>
			</div>
		)
	}
}

export default App;