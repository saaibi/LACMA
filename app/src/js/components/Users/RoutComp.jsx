import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import Users from '.';

class AppUsers extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="USERS" />
				<Users />
			</div>
		);
	}
}

export { AppUsers };
