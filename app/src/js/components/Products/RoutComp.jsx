import React, { Component } from 'react';

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

export { AppProducts };
