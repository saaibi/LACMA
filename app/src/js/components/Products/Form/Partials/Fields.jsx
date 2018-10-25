import React from 'react';

import NombreProducto from '../../../Common/Input';
import Area from '../../../Common/Input';
import Parametro from '../../../Common/Input';
import Resultado from '../../../Common/Input';
import LimiteMin from '../../../Common/Input';
import LimiteMax from '../../../Common/Input';
import Metodo from '../../../Common/Input';

const Fields = (props) => (
	<div>
		<NombreProducto
			id="nombre_producto"
			name="NombreProducto"
			text="Nombre Producto"
			autoFocus={true}
			icon="assignment_ind"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>

		<Area
			id="area"
			name="Area"
			text="Area"
			icon="insert_drive_file"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>
		<Parametro
			id="parametro"
			name="Parametro"
			text="Parametro"
			icon="description"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>
		<Resultado
			id="resultado"
			name="Resultado"
			text="Resultado"
			icon="assessment"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>
		<LimiteMin
			id="limite_min"
			name="LimiteMin"
			text="Limite Min"
			icon="remove"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>
		<LimiteMax
			id="limite_max"
			name="LimiteMax"
			text="Limite Max"
			icon="add"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>
		<Metodo
			id="metodo"
			name="Metodo"
			text="Metodo"
			icon="art_track"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>

	</div>
);

export default Fields;
