import React from 'react';
import { Link } from "react-router-dom";

import Marca from './Partials/Marca';

const AppHeader = (props) => (
	<nav className="nav-extended">
		<div className="nav-wrapper">
			<Marca name={props.name} />
		</div>
		<div className="nav-content">
			<Link to="viewsamples" className="btn-floating  btn-small halfway-fab waves-effect waves-light">
				<i className="material-icons">visibility</i>
			</Link>
		</div>
	</nav>
);

export default AppHeader;
