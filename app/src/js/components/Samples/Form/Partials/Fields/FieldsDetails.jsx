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
				id="tipo_muestra"
				name="TipoMuestra"
				text="Tipo de Muestra"
				className="col s6"
				autoFocus={true}
				icon="library_books"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<ResponsableTomaMuestra
				id="responsable_toma_muestra"
				name="ResponsableTomaMuestra"
				text="Responsable Toma de Muestra"
				className="col s6"
				icon="perm_identity"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<CantidadMuestra
				id="cantidad_muestra"
				name="CantidadMuestra"
				text="Cantidad de Muestra"
				className="col s6"
				icon="sort"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Lote
				id="lote"
				name="Lote"
				text="Lote"
				className="col s6"
				icon="line_style"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<FechaFabricacion
				id="fecha_fabricacion"
				name="FechaFabricacion"
				text="Fecha de Fabricacion"
				className="col s6"
				icon="event"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<FechaVencimiento
				id="fecha_vencimiento"
				name="FechaVencimiento"
				text="Fecha de Vencimineto"
				className="col s6"
				icon="event_busy"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<TipoEnvaEmpa
				id="tipo_enva_empa"
				name="TipoEnvaEmpa"
				text="Tipo de Envase-Empaque"
				className="col s6"
				icon="inbox"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Color
				id="color_muestra"
				name="Color"
				text="Color"
				className="col s6"
				icon="format_color_fill"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Olor
				id="olor_muestra"
				name="Olor"
				text="Olor"
				className="col s6"
				icon="record_voice_over"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Aspecto
				id="aspecto_muestra"
				name="Aspecto"
				text="Aspecto"
				className="col s6"
				icon="receipt"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<CaracOrganolepticas
				id="carac_organolepticas"
				name="CaracOrganolepticas"
				text="Características Organolépticas"
				className="col s6"
				icon="gradient"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<CondicionesLlegada
				id="condiciones_llegada"
				name="CondicionesLlegada"
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
