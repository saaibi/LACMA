import React from 'react';
import { Collapsible } from 'react-materialize';

import CollapsibleItem from '../../../Common/Collapsible/CollapsibleItems';
import FieldsInit from './Fields/FieldsInit';
import FieldsFechas from './Fields/FieldsFechas';
import FieldsDetails from './Fields/FieldsDetails';

const Collapsibles = (props) => {
    return (
        <Collapsible popout defaultActiveKey={0}>
            <CollapsibleItem
                header="Registro y Lectura de Muestras "
                icon='assignment'
                content={<FieldsInit loadSample={props.loadSample} />}
            />
            <CollapsibleItem
                header="Fechas"
                icon='credit_card'
                content={<FieldsFechas loadSample={props.loadSample} />}
            />
            <CollapsibleItem
                header="Detail"
                icon='credit_card'
                content={<FieldsDetails loadSample={props.loadSample} />}
            />
            <CollapsibleItem
                header="Datos y Cálculos "
                icon='credit_card'
                content="¡¡¡¡¡ Ready !!!!"
            />
        </Collapsible>
    );
};
export default Collapsibles;
