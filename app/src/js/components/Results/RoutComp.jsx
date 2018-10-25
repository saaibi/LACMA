import React,{Component} from 'react';
import { connect } from "react-redux";

import AppHeader from '../AppHeader';

class AppResult extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="RESULTADOS" />
			</div>
		);
	}
}

const connectedResult = connect()(AppResult);
export { connectedResult as AppResult };
