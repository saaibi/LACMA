import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions } from "../../actions/user.actions";

import Form from './Form';
import Grid from './Grid';
import Edit from './Edit';
import Modal from '../Common/Modal';
import Progress from '../Common/Utils/Progress';

class Users extends Component {
	state = {
		user: {
			firstName: '',
			lastName: '',
			username: '',
			password: '',
			phone: '',
			email: '',
			user_id: '',
		},
		submitted: false
	}

	componentWillMount() {
		this.props.dispatch(userActions.getAllUsers());
	}

	createUsers = (e) => {
		e.preventDefault();
		this.props.dispatch(userActions.register(this.state.user));
	}

	loadUsers = (e) => {
		const { user } = this.state;
		const { name, value } = e.target;
		this.setState({
			user: {
				...user,
				[name]: value
			}
		})
	}

	updateUsers = (e) => {

	}

	loadUsersEdit = (e) => {

	}

	optionsUsers = (e) => {

	}

	render() {
		const { users } = this.props;
		if (users.isLoading) {
			if (!users.users) {
				return (
					<Progress type="circle" />
				)
			}
		}

		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<Form createUsers={this.createUsers} loadUsers={this.loadUsers} />
				</div>
				<div className="col s12 m8 l9">
					<Grid users={users.users} optionsUsers={this.optionsUsers} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.users
});

export default connect(mapStateToProps)(Users);
