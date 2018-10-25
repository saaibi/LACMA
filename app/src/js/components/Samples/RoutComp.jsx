import React,{Component} from 'react';
import { connect } from "react-redux";

import AppHeader from '../AppHeader';
import Sample from '.';

class AppSample extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="MUESTRAS" />
				<Sample />
			</div>
		);
	}
}

const connectedSample = connect()(AppSample);
export { connectedSample as AppSample };
