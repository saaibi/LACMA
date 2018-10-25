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
				className="col s6"
				autoFocus={true}
				icon="event_note"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<FechaInicioAnalisis
				id="Fecha_inicio_analisis"
				name="FechaInicioAnalisis"
				text="Fecha y Hora Inicio Análisis"
				className="col s6"
				icon="event_busy"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<FechaFinalAnalisis
				id="Fecha_final_analisis"
				name="FechaFinalAnalisis"
				text="Fecha y Hora Final de Analisis"
				className="col s6"
				icon="event_available"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<FechaElabInforme
				id="Fecha_elab_informe"
				name="FechaElabInforme"
				text="Fecha Elaboración de Informe"
				className="col s6"
				icon="date_range"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<FechaPactadaEntrega
				id="Fecha_pactada_entrega"
				name="FechaPactadaEntrega"
				text="Fecha Pactada de Entrega"
				className="col s6"
				icon="insert_invitation"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<FechaEntrega
				id="Fecha_entrega"
				name="FechaEntrega"
				text="Fecha de Entrega"
				className="col s6"
				icon="event_available"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<FechaToma
				id="Fecha_toma"
				name="FechaToma"
				text="Fecha y Hora de Toma"
				className="col s6"
				icon="event_note"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
		</div>
	</div>
);

export default Fields;
