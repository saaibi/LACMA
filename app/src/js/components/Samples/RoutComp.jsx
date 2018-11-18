import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import Sample from '.';

class AppSample extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="CREAR MUESTRA" />
				<Sample />
			</div>
		);
	}
}

export { AppSample };
