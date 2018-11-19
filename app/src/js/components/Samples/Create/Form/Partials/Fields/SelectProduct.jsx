import React, { Component } from 'react';
import { connect } from 'react-redux'

import { productActions } from "../../../../../../actions/product.actions";

import Select from '../../../../../Common/Select';
import Grid from '../../../../../Products/Grid'
import Progress from '../../../../../Common/Utils/Progress';

class SelectProduct extends Component {

	componentWillMount() {
		this.props.dispatch(productActions.getAllProduct());
	}

	componentDidUpdate() {
		$('select').formSelect();
	}

	handleProduct = (e) => {
		e.preventDefault();
		const { loadSample } = this.props
		const { value } = e.target;
		this.props.dispatch(productActions.getProductById(value));
		loadSample(e);
	}

	render() {
		const { products } = this.props

		if (products.isLoading) { return (<Progress className="selectproduct" />) }
		if (!products.products) { return (<Progress className="selectproduct" />) }

		return (
			<div className="row">
				<div className="container">
					<Select
						id="products"
						name="products"
						icon="card_giftcard"
						classNameIcon="prefix"
						defaultText="Selecciona"
						defaultValue={products.product ? products.product._id : '1'}
						onChange={(e) => this.handleProduct(e)}
						items={products.products}
					/>
					<Grid product={products.productSelect} />
				</div>
			</div>
		)
	}
};

const mapStateToProps = (state) => ({
	products: state.product
})

export default connect(mapStateToProps)(SelectProduct);
