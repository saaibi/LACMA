import React from 'react';

import Fields from './Partials/Fields';
import ActionBar from './Partials/ActionBar';

const Form = (props) => (
	<div className="row">
		<Fields loadClient={props.loadClient} />
		<ActionBar createClient={props.createClient} />
	</div>
);

export default Form;
