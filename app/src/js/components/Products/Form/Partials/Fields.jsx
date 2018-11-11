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
			id="name_product"
			name="name"
			text="Nombre Producto"
			autoFocus={true}
			icon="assignment_ind"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>

		<Area
			id="area_product"
			name="area"
			text="Area"
			icon="insert_drive_file"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>
		<Parametro
			id="parameter"
			name="parameter"
			text="Parametro"
			icon="description"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>
		<Resultado
			id="result"
			name="result"
			text="Resultado"
			icon="assessment"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>
		<LimiteMin
			id="limit_min"
			name="limitMin"
			text="Limite Min"
			icon="remove"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>
		<LimiteMax
			id="limit_max"
			name="limitMax"
			text="Limite Max"
			icon="add"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>
		<Metodo
			id="method"
			name="method"
			text="Metodo"
			icon="art_track"
			classNameIcon="prefix"
			onChange={props.loadProduct}
		/>

	</div>
);

export default Fields;
