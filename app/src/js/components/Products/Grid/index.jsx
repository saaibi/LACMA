import React from 'react';
import PropTypes from 'prop-types';

import Columns from './Partials/Columns';
import Rows from './Partials/Rows';

const Grid = ({ className, product, optionsProduct, actions }) => (
	<table className={`striped centered ${className}`}>
		<Columns actions={actions} />
		<Rows
			actions={actions}
			product={product}
			optionsProduct={optionsProduct}
		/>
	</table>
);

Grid.defaultProps = {
	className: '',
	actions: false
};

Grid.propTypes = {
	product: PropTypes.array.isRequired
};

export default Grid;
