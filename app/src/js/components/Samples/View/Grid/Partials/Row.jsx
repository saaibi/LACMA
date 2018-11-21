import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment'

import { sampleActions } from "../../../../../actions/sample.actions";

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
			headerModal: "Edit Sample",
			contentModal: "edit",
			id: id,
		};
		this.props.optionsClient(data)
	}

	onDelete = (id) => {
		this.props.dispatch(sampleActions.deleteSample(id));
	}

	onView = (id) => {
		const data = {
			headerModal: "View Sample",
			contentModal: "view",
			id: id,
		};
		this.props.optionsClient(data)
	}
	render() {
		const { sample } = this.props;
		return (
			<tr>
				<td>{sample.code}</td>
				<td>{sample.version}</td>
				<td>{sample.reference}</td>
				<td>{sample.analyst}</td>
				<td>{sample.coordinator}</td>
				<td>{sample.typeSample}</td>
				<td>{sample.responsibleSample}</td>
				<td>{sample.quantity}</td>
				<td>{sample.lote}</td>
				<td>{sample.typeContainer}</td>
				<td>{sample.color}</td>
				<td>{sample.smell}</td>
				<td>{sample.appearance}</td>
				<td>{sample.characteristicsOrganoleptic}</td>
				<td>{sample.temperature}</td>
				<td>{moment(sample.manufacturingDate).format('DD/MM/YYYY HH:mm')}</td>
				<td>{moment(sample.expirationDate).format('DD/MM/YYYY HH:mm')}</td>
				<td>{moment(sample.receiptDate).format('DD/MM/YYYY HH:mm')}</td>
				<td>{moment(sample.startDateAnalysis).format('DD/MM/YYYY HH:mm')}</td>
				<td>{moment(sample.endDateAnalysis).format('DD/MM/YYYY HH:mm')}</td>
				<td>{moment(sample.reportDate).format('DD/MM/YYYY HH:mm')}</td>
				<td>{moment(sample.agreedDeliveryDate).format('DD/MM/YYYY HH:mm')}</td>
				<td>{moment(sample.deliveryDate).format('DD/MM/YYYY HH:mm')}</td>
				<td>{moment(sample.takeSampleDate).format('DD/MM/YYYY HH:mm')}</td>
				<td>
					<ActionBarGrid
						id={sample._id}
						onEdit={this.onEdit}
						onDelete={this.onDelete}
						onView={this.onView}
					/>

				</td>
			</tr>
		);
	}
};

const mapStateToProps = (state) => ({
});

export default connect()(Row);
