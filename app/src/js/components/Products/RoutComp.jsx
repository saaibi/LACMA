import React, { Component } from 'react';
import { connect } from "react-redux";

import AppHeader from '../AppHeader';
import Product from '.';

class AppProducts extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="PRODUCTOS" />
				<Product />
			</div>
		);
	}
}

const connectedProduct = connect()(AppProducts);
export { connectedProduct as AppProducts };
