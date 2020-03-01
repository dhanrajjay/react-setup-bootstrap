import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Agent from '../components/agent';
import Agency from '../components/agency';

const ROUTES_LIST = [	
	{
		path: "/",
		key: "AGENT",
		exact: true,
		component: Agent
	},
	{
		path: "/agent",
		key: "AGENT",
		exact: true,
		component: Agent
	},
	{
		path: "/agency",
		key: "AGENCY",
		exact: true,
		component: Agency
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