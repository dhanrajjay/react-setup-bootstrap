import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import * as i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import App from "./components/App.js"

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("app")
);