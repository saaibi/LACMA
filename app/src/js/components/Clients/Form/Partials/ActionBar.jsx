import React from 'react';

import Save from '../../../Common/Button';
import Clean from '../../../Common/Button';

const ActionBar = (props) => (
	<div className="center-aling">
		<div className="input-field col s6 align-center">
			<Save
				className="waves-effect waves-light btn"
				texto="Save"
				icon="send"
				classNameIcon="right"
				onClick={props.createClient}
			/>
		</div>
		<div className="input-field col s6 align-center">
			<Clean
				className="waves-effect waves-light btn"
				texto="Clear"
				icon="delete_sweep"
				classNameIcon="right"
			/>
		</div>
	</div>
);

export default ActionBar;
