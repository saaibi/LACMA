import React from 'react';

import FechaRecibo from '../../../../Common/Input';
import FechaInicioAnalisis from '../../../../Common/Input';
import FechaFinalAnalisis from '../../../../Common/Input';
import FechaElabInforme from '../../../../Common/Input';
import FechaPactadaEntrega from '../../../../Common/Input';
import FechaEntrega from '../../../../Common/Input';
import FechaToma from '../../../../Common/Input';

const Fields = (props) => (
	<div className="row">
		<div className="container">
			<FechaRecibo
				id="receipt_date"
				name="receiptDate"
				text="Fecha y Hora de Recibo"
				classNameInput="datepicker"
				className="col s6"
				icon="event_note"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaInicioAnalisis
				id="start_date_analysis"
				name="startDateAnalysis"
				text="Fecha y Hora Inicio Análisis"
				classNameInput="datepicker"
				className="col s6"
				icon="event_busy"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaFinalAnalisis
				id="end_date_analysis"
				name="endDateAnalysis"
				text="Fecha y Hora Final de Analisis"
				classNameInput="datepicker"
				className="col s6"
				icon="event_available"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaElabInforme
				id="report_date"
				name="reportDate"
				text="Fecha Elaboración de Informe"
				classNameInput="datepicker"
				className="col s6"
				icon="date_range"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaPactadaEntrega
				id="agreed_delivery_date"
				name="agreedDeliveryDate"
				text="Fecha Pactada de Entrega"
				classNameInput="datepicker"
				className="col s6"
				icon="insert_invitation"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaEntrega
				id="delivery_date"
				name="deliveryDate"
				text="Fecha de Entrega"
				classNameInput="datepicker"
				className="col s6"
				icon="event_available"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaToma
				id="take_sample_date"
				name="takeSampleDate"
				text="Fecha y Hora de Toma"
				classNameInput="datepicker"
				className="col s6"
				icon="event_note"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
		</div>
	</div>
);

export default Fields;
