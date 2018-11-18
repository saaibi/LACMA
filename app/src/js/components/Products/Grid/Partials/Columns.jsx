import React from 'react';

const Columns = ({ actions }) => (
	<thead>
		<tr>
			<th>Nombre de Producto</th>
			<th>Area</th>
			<th>Parametro</th>
			<th>Resultado</th>
			<th>Limite Min</th>
			<th>Limite Max</th>
			<th>Metodo</th>
			{actions && (<th>Actions</th>)}
		</tr>
	</thead>
);

export default Columns;
