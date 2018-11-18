import React from 'react';

import Codigo from '../../../../Common/Input';
import Version from '../../../../Common/Input';
import Referencia from '../../../../Common/Input';
import Analista from '../../../../Common/Input';
import Coordinador from '../../../../Common/Input';

const Fields = (props) => (
	<div className="row">
		<div className="container">
			<Codigo
				id="code"
				name="code"
				text="Codigo"
				className="col s4"
				autoFocus={true}
				icon="line_style"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Version
				id="version"
				name="version"
				text="Version"
				className="col s4"
				icon="cloud_done"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Referencia
				id="reference"
				name="reference"
				text="Referencia"
				className="col s4"
				icon="mood"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Analista
				id="analyst"
				name="analyst"
				text="Analista"
				className="col s6"
				icon="person"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
			<Coordinador
				id="coordinator"
				name="coordinator"
				text="Coordinador"
				className="col s6"
				icon="person"
				classNameIcon="prefix"
				onChange={props.loadSample}
			/>
		</div>
	</div>
);

export default Fields;
