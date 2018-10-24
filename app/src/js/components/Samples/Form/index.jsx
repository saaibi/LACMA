import React from 'react';

import Collapsibles from './Partials/Collapsibles';

import ActionBar from './Partials/ActionBar';

const Form = (props) => (
	<div className="row">
		<Collapsibles />
		<ActionBar createSample={props.createSample} />
	</div>
);

export default Form;