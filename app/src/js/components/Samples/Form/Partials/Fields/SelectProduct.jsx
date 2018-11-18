import React, { Component } from 'react';
import { connect } from 'react-redux'

import { productActions } from "../../../../../actions/product.actions";

import Product from '../../../../Common/Input';
import Grid from '../../../../Products/Grid'

class SelectProduct extends Component {

	componentWillMount() {
		this.props.dispatch(productActions.getAllProduct());
	}

	render() {
		const { products, loadSample } = this.props
		if (products.isLoading) {
			if (!products.products) {
				return (
					<Progress type="circle" />
				)
			}
		}
		return (
			<div className="row">
				<div className="container">
					<Product
						id="products"
						name="products"
						text="Product"
						className="col s12"
						autoFocus={true}
						icon="card_giftcard"
						classNameIcon="prefix"
						onChange={loadSample}
					/>
					<Grid product={products.products} />
				</div>
			</div>
		)
	}
};

const mapStateToProps = (state) => ({
	products: state.product
})

export default connect(mapStateToProps)(SelectProduct);
