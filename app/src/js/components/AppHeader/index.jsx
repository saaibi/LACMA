import React from 'react';

import Marca from './Partials/Marca';

const AppHeader = (props) => (
	<nav className="nav-extended pink">
		<div className="nav-wrapper">
			<Marca name={props.name} />
		</div>
		<div className="nav-content">
			<a className="btn-floating  btn-small blue lighten-1 halfway-fab waves-effect waves-light">
				<i className="material-icons">visibility</i>
			</a>
		</div>
	</nav>
);

export default AppHeader;
