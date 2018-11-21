import React from 'react';
import PropTypes from 'prop-types';

import Columns from './Partials/Columns';
import Rows from './Partials/Rows';

const Grid = (props) => {
	const { users, optionsUsers } = props;
	return (
		<table className="striped centered responsive-table">
			<Columns />
			<Rows users={users} optionsUsers={optionsUsers} />
		</table>
	);
}

Grid.propTypes = {
	product: PropTypes.array,
};

export default Grid;
