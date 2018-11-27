import React from 'react';
import PropTypes from 'prop-types';

import Columns from './Partials/Columns';
import Rows from './Partials/Rows';

const Grid = (props) => {
	const { samples, className, optionsClient } = props;
	return (
		<table id="tableGrid" className={`highlight centered ${className}`}>
			<Columns />
			<Rows samples={samples} optionsClient={optionsClient} />
		</table>
	);
}

Grid.propTypes = {
	clients: PropTypes.array,
};

export default Grid;
