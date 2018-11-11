import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

const Rows = ({ users, optionsUsers }) => (
	<tbody>
		{
			users.map(
				(user, index) => <Row key={index} user={user} optionsUsers={optionsUsers} />
			)
		}
	</tbody>
);

Rows.propTypes = {
	clients: PropTypes.array,
};

export default Rows;
