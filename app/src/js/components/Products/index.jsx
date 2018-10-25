import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clientActions } from "../../actions/client.actions";

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

	}
	createProduct = (e) => {
		console.log("create Product")
	}

	updateProduct = (e) => {

	}

	loadProduct = (event) => {
		console.log("load Product")
	}

	loadProductEdit = (event) => {

	}

	optionsProduct = (e) => {

	}

	render() {
		const { product } = this.props;
		const { contentModal, clientEdit } = this.state;
		{/* 
		if (product.isLoading) {
			if (!product.product) {
				return (
					<Progress type="circle" />
				)
			}
		}

		let content = contentModal == "edit" ? content =
			<Edit client={clientEdit} updateProduct={this.updateProduct} loadProduct={this.loadProductEdit} /> : content =
			<View client={product} />;
		*/}
		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<Form createProduct={this.createProduct} loadProduct={this.loadProduct} />
				</div>
				<div className="col s12 m8 l9">
					<Grid product={product} optionsProduct={this.optionsProduct} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Product);
