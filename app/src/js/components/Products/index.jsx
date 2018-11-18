import React, { Component } from 'react';
import { connect } from 'react-redux';

import { productActions } from "../../actions/product.actions";

import Form from './Form';
import Grid from './Grid';
import Edit from './Edit';
import Modal from '../Common/Modal';
import Progress from '../Common/Utils/Progress';

class Product extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		product: {
			name: '',
			area: '',
			parameter: '',
			result: '',
			limitMin: '',
			limitMax: '',
			method: '',
		}
	}

	componentWillMount() {
		this.props.dispatch(productActions.getAllProduct());
	}

	createProduct = (e) => {
		e.preventDefault();
		this.props.dispatch(productActions.createProduct(this.state.product));
	}

	updateProduct = (e) => {

	}

	loadProduct = (e) => {
		const { product } = this.state;
		const { name, value } = e.target;
		this.setState({
			product: {
				...product,
				[name]: value
			}
		})
	}

	loadProductEdit = (s) => {

	}

	optionsProduct = (e) => {

	}

	render() {
		const { products } = this.props;
		const { contentModal, clientEdit } = this.state;
		if (products.isLoading) {
			if (!products.products) {
				return (
					<Progress type="circle" />
				)
			}
		}

		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<Form createProduct={this.createProduct} loadProduct={this.loadProduct} />
				</div>
				<div className="col s12 m8 l9">
					<Grid
						actions={true}
						product={products.products}
						optionsProduct={this.optionsProduct}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.product
});

export default connect(mapStateToProps)(Product);
