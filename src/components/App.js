import React, { Component, useEffect } from 'react';
import { Translation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import i18n from '../i18n';
import Header from './header';
import Footer from './footer';
import ROUTES_LIST, { Routes } from '../core/routes';
import { ErrorBoundary } from '../components/error';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';
import { publish } from '../utils/pubSub';

class App extends Component {

    UNSAFE_componentWillMount() {
       this.unlisten = this.props.history.listen((location, action) => {
         if (location.pathname === '/vehicleInformation') {
            console.log("on route change");
            publish('route-changed', true);
         }
       });
    }
    UNSAFE_componentWillUnmount() {
        this.unlisten();
    }

    /* For functional component */
    /* import { withRouter } from 'react-router-dom';
    const location = useLocation();
    useEffect(() => {
       if (location.pathname === '/vehicleInformation') {
          console.log("on route change");
          publish('route-changed', true);
       }
    }, [location]); */

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

export default withRouter(App);