import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

const Rows = ({ product, optionsProduct, actions }) => (
	<tbody>
		{
			product.map(
				(product, index) => <Row key={index} product={product} actions={actions} optionsProduct={optionsProduct} />
			)
		}
	</tbody>
);

Rows.propTypes = {
	clients: PropTypes.array,
};

export default Rows;
