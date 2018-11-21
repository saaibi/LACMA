import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

const Rows = ({ samples, optionsClient }) => (
	<tbody>
		{
			samples.map(
				(sample, index) => <Row key={index} sample={sample} optionsClient={optionsClient} />
			)
		}
	</tbody>
);

Rows.propTypes = {
	clients: PropTypes.array,
};

export default Rows;
