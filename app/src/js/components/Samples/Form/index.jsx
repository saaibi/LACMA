import React from 'react';

import Collapsibles from './Partials/Collapsibles';

import ActionBar from './Partials/ActionBar';

const Form = (props) => (
	<div className="row">
		<Collapsibles {...props}/>
		<ActionBar createSample={props.createSample} />
	</div>
);

export default Form;