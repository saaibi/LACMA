import React, { Component } from 'react';
import { connect } from "react-redux";

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

const connectedUsers = connect()(AppUsers);
export { connectedUsers as AppUsers };
