import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from "../../../../actions/user.actions";

import ActionBarGrid from './ActionBarGrid';

class Row extends Component {
	state = {

	}

	onEdit = (id) => {
	
	}

	onDelete = (id) => {
		this.props.dispatch(userActions.deleteUser(id));
	}

	onView = (id) => {
	
	}

	render() {
		const { user } = this.props;
		return (
			<tr>
				<td>{user.firstName}</td>
				<td>{user.lastName}</td>
				<td>{user.user_id}</td>
				<td>{user.phone}</td>
				<td>{user.email}</td>
				<td>
					<ActionBarGrid
						id={user._id}
						onEdit={this.onEdit}
						onDelete={this.onDelete}
						onView={this.onView}
					/>

				</td>
			</tr>
		);
	}
};

const mapStateToProps = (state) => ({

});

export default connect()(Row);
