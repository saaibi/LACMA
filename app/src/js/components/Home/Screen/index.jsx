import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../Common/Cards'

import samples from '../../../../../public/images/samples.jpg'
import clients from '../../../../../public/images/clients.jpg'
import products from '../../../../../public/images/products.jpg'
import results from '../../../../../public/images/results.jpg'
import users from '../../../../../public/images/users.jpg'
import other from '../../../../../public/images/unnamed.gif'

const ICONS = { floating: "add", activatorReveal: "more_vert", closeReveal: "close" }

const Screen = ({ }) => {
    return (
        <div className="row">
              <Card
                className="col s12 m6 l4"
                cardTitle="Resultados"
                classNameImage=" waves-effect waves-block waves-light"
                cardContent="Modulo Resultados"
                cardContentReveal=".........."
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles Resultados"
                icons={ICONS}
                cardImage={results}
            />

              <Card
                className="col s12 m6 l4"
                cardTitle="Clientes"
                classNameImage=" waves-effect waves-block waves-light"
                cardContent="Modulo Clientes"
                cardContentReveal=".........."
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles Clientes"
                icons={ICONS}
                cardImage={clients}
            />

            <Card
                className="col s12 m6 l4"
                cardTitle="Productos"
                classNameImage=" waves-effect waves-block waves-light"
                cardContent="Modulo Productos"
                cardContentReveal=".........."
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles Productos"
                icons={ICONS}
                cardImage={products}
            />
            
             <Card
                className="col s12 m6 l4"
                cardTitle="Muestras"
                classNameImage=" waves-effect waves-block waves-light"
                cardContent="Modulo Crear o Ver Muestras"
                cardContentReveal=".........."
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles Muestras"
                icons={ICONS}
                cardImage={samples}
            />

             <Card
                className="col s12 m6 l4"
                cardTitle="Usuarios"
                classNameImage=" waves-effect waves-block waves-light"
                cardContent="Modulo Usuarios"
                cardContentReveal=".........."
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles Usuarios"
                icons={ICONS}
                cardImage={users}
            />

            <Card
                className="col s12 m6 l4"
                classNameImage="waves-effect waves-block waves-light"
                cardContent="Lacma"
                cardContentReveal=".........."
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles LACMA"
                icons={ICONS}
                cardImage={other}
            />
        </div>
    )
}

Screen.propTypes = {

}

export default Screen
