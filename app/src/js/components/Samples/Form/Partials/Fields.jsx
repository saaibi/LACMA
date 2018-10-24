import React from 'react';
import { Collapsible } from 'react-materialize';

import Fecha from '../../../Common/Input';
import LastsName from '../../../Common/Input';
import Id from '../../../Common/Input';

const Fields = (props) => (
	<div className="row">
		<div className="container">
			<Fecha
				id="firts_name"
				name="firstName"
				text="Firts Name"
				className="col s4"
				autoFocus={true}
				icon="account_circle"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<LastsName
				id="last_name"
				name="lastName"
				text="Last Name"
				className="col s4"
				icon="perm_identity"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Id
				id="client_id"
				name="client_id"
				text="Id"
				className="col s4"
				icon="fingerprint"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
		</div>
	</div>
);

export default Fields;
