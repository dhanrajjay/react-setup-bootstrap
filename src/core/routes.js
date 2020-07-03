import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Agent from '../components/agent';
import Agency from '../components/agency';
import PolicyType from '../components/policyType';
import VehicleInformation from '../components/vehicleInformation';
import DriverInformation from '../components/driverInformation';

const ROUTES_LIST = [	
	{
		path: "/",
		key: "PolicyType",
		exact: true,
		component: PolicyType
	},
	{
		path: "/policyType",
		key: "PolicyType",
		exact: true,
		component: PolicyType
	},
	{
		path: "/vehicleInformation",
		key: "VehicleInformation",
		exact: true,
		component: VehicleInformation
	},
	{
		path: "/driverInformation",
		key: "DriverInformation",
		exact: true,
		component: DriverInformation
	}
];

export function Routes({routes}) {
	console.log(routes);
	return (
		<Switch>
			{
				routes.map((route, i) => {
					return <RenderRoute key={route.key} {...route} />
				})
			}			
		</Switch>
	)
}

export default ROUTES_LIST;

function RenderRoute(currentRoute) {	
	return (
		<Route
			path={currentRoute.path}
			exact={currentRoute.exact}
			render={() => <currentRoute.component />}
		/>		
	)
}