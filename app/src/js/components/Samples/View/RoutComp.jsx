import React, { Component } from 'react';

import AppHeader from '../../AppHeader';
import ViewSample from '.';

class AppViewSample extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="VER MUESTRAS" />
				<ViewSample/>
			</div>
		);
	}
}

export { AppViewSample };
