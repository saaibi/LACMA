import React from 'react';

import Product from '../../../../Common/Input';
import Grid from '../../../../Products/Grid'

const SelectProduct = (props) => (
	<div className="row">
		<div className="container">
			<Product
				id="product"
				name="Product"
				text="Product"
				className="col s12"
				autoFocus={true}
				icon="account_circle"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Grid />
		</div>
	</div>
);

export default SelectProduct;
