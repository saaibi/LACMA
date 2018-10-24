import React from 'react';
import { Collapsible } from 'react-materialize';

import CollapsibleItem from '../../../Common/Collapsible/CollapsibleItems';
import Fields from './Fields';

const Collapsibles = (props) => {
    return (
        <Collapsible popout defaultActiveKey={0}>
            <CollapsibleItem header='Detail Client' icon='assignment' content={<Fields loadSample={props.loadSample} />} />
            <CollapsibleItem header="Secod" icon='credit_card' content="hola" />
            <CollapsibleItem header="Secod" icon='credit_card' content="hola" />
        </Collapsible>
    );
};
export default Collapsibles;
