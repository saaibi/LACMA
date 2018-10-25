import React from 'react';
import { Collapsible } from 'react-materialize';

import CollapsibleItem from '../../../Common/Collapsible/CollapsibleItems';
import FieldsInit from './Fields/FieldsInit';
import FieldsFechas from './Fields/FieldsFechas';
import FieldsDetails from './Fields/FieldsDetails';
import SelectProduct from './Fields/SelectProduct';

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
                icon='insert_invitation'
                content={<FieldsFechas loadSample={props.loadSample} />}
            />
            <CollapsibleItem
                header="Detail"
                icon='chrome_reader_mode'
                content={<FieldsDetails loadSample={props.loadSample} />}
            />
            <CollapsibleItem
                header="Selección de Producto"
                icon='card_travel'
                content={<SelectProduct loadSample={props.loadSample} />}
            />
            <CollapsibleItem
                header="Datos y Cálculos "
                icon='dialpad'
                content="¡¡¡¡¡ Ready !!!!"
            />
        </Collapsible>
    );
};
export default Collapsibles;
