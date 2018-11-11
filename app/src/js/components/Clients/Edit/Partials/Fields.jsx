import React from 'react';

import FirtsName from '../../../Common/Input';
import LastsName from '../../../Common/Input';

const Fields = (props) => (
	<div>
		<FirtsName
			id="company"
            name="company"
            value={props.client.company ? props.client.company: "" }
			text="Firts Name"
			autoFocus={true}
			icon="account_circle"
			classNameIcon="prefix"
			onChange={(e) => props.loadClient(e)}
		/>
	
		<LastsName
			id="contact"
            name="contact"
            value={props.client.contact ? props.client.contact: ""}
			text="Last Name"
			icon="perm_identity"
			classNameIcon="prefix"
			onChange={(e) => props.loadClient(e)}
		/>
	</div>
);

export default Fields;
