import React from 'react';

import Collapsibles from './Collapsibles';
import Pay from './Pay';
import Cards from '../../../Common/Cards';
import image from '../../../../../../public/images/yuna.jpg'

const ICONS = { floating: "add", activatorReveal: "more_vert", closeReveal: "close" }

const Card = (props) => (
    <Cards
        cardTitle={`${props.client.company}`}
        classNameImage=" waves-effect waves-block waves-light"
        cardContent={<Collapsibles {...props} />}
        cardContentReveal={<Pay {...props} />}
        cardContentIcon={props.client.company}
        cardTitleReleveal="Details Client"
        icons={ICONS}
        cardImage={image}
    />
);

export default Card;
