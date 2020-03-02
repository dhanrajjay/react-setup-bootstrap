import React, { Component } from "react";

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, errorInfo: null };
	}

	// using this lifecycle we will be able to catch the error.
	componentDidCatch(error, info) {
		this.setState( { hasError: true, errorInfo: info } );
	}

	render() {
		if (this.state.hasError) {
			return (
				<div>
					<h1>Something went wrong</h1>
					<section>
						{this.state.errorInfo}
					</section>
				</div>
			)
		}

		return this.props.children;
	}
}