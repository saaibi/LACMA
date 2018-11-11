import React from 'react';

import FirtsName from '../../../Common/Input';
import LastName from '../../../Common/Input';
import UserName from '../../../Common/Input';
import Password from '../../../Common/Input';
import Email from '../../../Common/Input';
import Phone from '../../../Common/Input';
import User_id from '../../../Common/Input';

const Fields = (props) => (
	<div>
		<FirtsName
			id="firts_name"
			name="firstName"
			text="Firts Name"
			autoFocus={true}
			icon="account_circle"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

		<LastName
			id="last_name"
			name="lastName"
			text="Last Name"
			icon="assignment_ind"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

		<UserName
			id="username"
			name="username"
			text="Username"
			icon="people"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

		<Password
			id="password"
			name="password"
			text="Password"
			type="password"
			icon="vpn_key"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>
		<Email
			id="email"
			name="email"
			text="Email"
			icon="email"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

		<Phone
			id="phone"
			name="phone"
			text="Phone"
			type="number"
			icon="call"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>
		
		<User_id
			id="user_id"
			name="user_id"
			text="ID"
			type="number"
			icon="fingerprint"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

	</div>
);

export default Fields;
