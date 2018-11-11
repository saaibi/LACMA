import React from 'react';

import Empresa from '../../../Common/Input';
import Nit from '../../../Common/Input';
import Contacto from '../../../Common/Input';
import Direccion from '../../../Common/Input';
import Fax from '../../../Common/Input';
import Email from '../../../Common/Input';

const Fields = (props) => (
	<div>
		<Empresa
			id="company"
			name="company"
			text="Empresa Solicitante"
			autoFocus={true}
			icon="closed_caption"
			classNameIcon="prefix"
			onChange={props.loadClient}
		/>
	
		<Nit
			id="nit"
			name="nit"
			text="Nit"
			icon="fingerprint"
			classNameIcon="prefix"
			onChange={props.loadClient}
		/>
		<Contacto
			id="contact"
			name="contact"
			text="Contacto"
			icon="perm_contact_calendar"
			classNameIcon="prefix"
			onChange={props.loadClient}
		/>
		<Email
			id="email"
			name="email"
			text="Email"
			icon="email"
			classNameIcon="prefix"
			onChange={props.loadClient}
		/>
		
	</div>
);

export default Fields;
