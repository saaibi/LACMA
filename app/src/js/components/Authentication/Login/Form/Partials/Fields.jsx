import React from 'react';

import Email from '../../../../Common/Input';
import Password from '../../../../Common/Input';

const Fields = (props) => (
	<div>
		<Email
			id="email"
			name="email"
			text="Email"
			type="email"
			className="col s6"
			icon="email"
			classNameIcon="prefix"
			onChange={props.handleChange}
		/>
		<Password
			id="password"
			name="password"
			text="Password"
			type="password"
			className="col s6"
			autoFocus={true}
			icon="fingerprint"
			classNameIcon="prefix"
			onChange={props.handleChange}
		/>
	</div>
);

export default Fields;
