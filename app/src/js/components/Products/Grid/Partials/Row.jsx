import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { productActions } from "../../../../actions/product.actions";

import ActionBarGrid from './ActionBarGrid';

class Row extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		headerModal: "",
		contentModal: "",
	}

	onEdit = (id) => {
		const data = {
			headerModal: "Edit Product",
			contentModal: "edit",
			id: id,
		};
		this.props.optionsProduct(data)
	}

	onDelete = (id) => {
		this.props.dispatch(productActions.deleteProduct(id));
	}

	onView = (id) => {
		const data = {
			headerModal: "View Product",
			contentModal: "view",
			id: id,
		};
		this.props.optionsProduct(data)
	}
	render() {
		const { product, actions } = this.props;
		return (
			<tr>
				<td>{product.name}</td>
				<td>{product.area}</td>
				<td>{product.parameter}</td>
				<td>{product.result}</td>
				<td>{product.limitMin}</td>
				<td>{product.limitMax}</td>
				<td>{product.method}</td>
				{actions && (<td>
					<ActionBarGrid
						id={product._id}
						onEdit={this.onEdit}
						onDelete={this.onDelete}
						onView={this.onView}
					/>
				</td>)
				}
			</tr>
		);
	}
};

const mapStateToProps = (state) => ({
	// svgArr: state.client.clients[0].credit
});

export default connect()(Row);
