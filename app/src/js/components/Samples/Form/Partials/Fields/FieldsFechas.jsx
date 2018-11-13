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
				id="fecha_recibo"
				name="fechaRecibo"
				text="Fecha y Hora de Recibo"
				classNameInput="datepicker"
				className="col s6"
				icon="event_note"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaInicioAnalisis
				id="fecha_inicio_analisis"
				name="fechaInicioAnalisis"
				text="Fecha y Hora Inicio Análisis"
				classNameInput="datepicker"
				className="col s6"
				icon="event_busy"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaFinalAnalisis
				id="fecha_final_analisis"
				name="fechaFinalAnalisis"
				text="Fecha y Hora Final de Analisis"
				classNameInput="datepicker"
				className="col s6"
				icon="event_available"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaElabInforme
				id="fecha_elab_informe"
				name="fechaElabInforme"
				text="Fecha Elaboración de Informe"
				classNameInput="datepicker"
				className="col s6"
				icon="date_range"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaPactadaEntrega
				id="fecha_pactada_entrega"
				name="fechaPactadaEntrega"
				text="Fecha Pactada de Entrega"
				classNameInput="datepicker"
				className="col s6"
				icon="insert_invitation"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaEntrega
				id="fecha_entrega"
				name="fechaEntrega"
				text="Fecha de Entrega"
				classNameInput="datepicker"
				className="col s6"
				icon="event_available"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaToma
				id="fecha_toma"
				name="fechaToma"
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
