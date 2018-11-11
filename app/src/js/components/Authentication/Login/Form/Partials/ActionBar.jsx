import React from 'react';
import { Link } from 'react-router-dom';

import Save from '../../../../Common/Button';
import Register from '../../../../Common/Button';

const ActionBar = (props) => (
	<div className="container">
		<div className="row">
			<div className="input-field col s4 offset-s2">
				<Save
					className="waves-effect waves-light blue lighten-1 btn"
					texto="Login"
					icon="send"
					classNameIcon="right"
					onClick={props.handleSubmit}
				/>
			</div>
		</div>
	</div>
);

export default ActionBar;
