import React from 'react';

import TipoMuestra from '../../../../Common/Input';
import ResponsableTomaMuestra from '../../../../Common/Input';
import CantidadMuestra from '../../../../Common/Input';
import Lote from '../../../../Common/Input';
import FechaFabricacion from '../../../../Common/Input';
import FechaVencimiento from '../../../../Common/Input';
import TipoEnvaEmpa from '../../../../Common/Input';
import Color from '../../../../Common/Input';
import Olor from '../../../../Common/Input';
import Aspecto from '../../../../Common/Input';
import CaracOrganolepticas from '../../../../Common/Input';
import CondicionesLlegada from '../../../../Common/Input';

const Fields = (props) => (
	<div className="row">
		<div className="container">
			<TipoMuestra
				id="type_sample"
				name="typeSample"
				text="Tipo de Muestra"
				className="col s12 m6"
				autoFocus={true}
				icon="library_books"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<ResponsableTomaMuestra
				id="responsible_sample"
				name="responsibleSample"
				text="Responsable Toma de Muestra"
				className="col s12 m6"
				icon="perm_identity"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<CantidadMuestra
				id="quantity"
				name="quantity"
				text="Cantidad de Muestra"
				className="col s12 m6"
				icon="sort"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Lote
				id="lote"
				name="lote"
				text="Lote"
				className="col s12 m6"
				icon="line_style"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<FechaFabricacion
				id="manufacturingDate"
				name="manufacturingDate"
				text="Fecha de Fabricacion"
				classNameInput="datepicker"
				className="col s12 m6"
				icon="event"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<FechaVencimiento
				id="expirationDate"
				name="expirationDate"
				text="Fecha de Vencimineto"
				classNameInput="datepicker"
				className="col s12 m6"
				icon="event_busy"
				classNameIcon="prefix"
				onBlur={props.loadDates}
			/>
			<TipoEnvaEmpa
				id="type_container"
				name="typeContainer"
				text="Tipo de Envase-Empaque"
				className="col s12 m6"
				icon="inbox"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Color
				id="color"
				name="color"
				text="Color"
				className="col s12 m6"
				icon="format_color_fill"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Olor
				id="smell"
				name="smell"
				text="Olor"
				className="col s12 m6"
				icon="record_voice_over"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Aspecto
				id="appearance"
				name="appearance"
				text="Aspecto"
				className="col s12 m6"
				icon="receipt"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<CaracOrganolepticas
				id="characteristicsOrganoleptic"
				name="characteristicsOrganoleptic"
				text="Características Organolépticas"
				className="col s12 m12"
				icon="gradient"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<CondicionesLlegada
				id="temperature"
				name="temperature"
				text="Condiciones de Llegada al laboratorio Temperatura ºC"
				className="col s12"
				icon="done"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
		</div>
	</div>
);

export default Fields;
