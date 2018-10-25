import React from 'react';

import Empresa from '../../../../Common/Input';
import Nit from '../../../../Common/Input';
import Contacto from '../../../../Common/Input';
import Direccion from '../../../../Common/Input';
import Fax from '../../../../Common/Input';
import Email from '../../../../Common/Input';

const Fields = (props) => (
	<div>
		<Empresa
			id="firts_name"
			name="firstName"
			text="Empresa Solicitante"
			autoFocus={true}
			icon="closed_caption"
			classNameIcon="prefix"
			onChange={props.handleChange}
		/>
	
		<Nit
			id="last_name"
			name="lastName"
			text="Nit"
			icon="fingerprint"
			classNameIcon="prefix"
			onChange={props.handleChange}
		/>
		<Contacto
			id="client_id"
			name="client_id"
			text="Contacto"
			icon="perm_contact_calendar"
			classNameIcon="prefix"
			onChange={props.handleChange}
		/>
		<Email
			id="email"
			name="email"
			text="Email"
			icon="email"
			classNameIcon="prefix"
			onChange={props.handleChange}
		/>
		
	</div>
);

export default Fields;
