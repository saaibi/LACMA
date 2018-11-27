import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../Common/Cards'
import ContentReveal from './Partials/ContentReveal'

import samples from '../../../../../public/images/samples.jpg'
import clients from '../../../../../public/images/clients.jpg'
import products from '../../../../../public/images/products.jpg'
import results from '../../../../../public/images/results.jpg'
import users from '../../../../../public/images/users.jpg'
import other from '../../../../../public/images/unnamed.gif'

const Screen = ({ }) => {
    return (
        <div className="row">
            <Card
                className="col s12 m6 l4"
                cardTitle="Resultados"
                classNameImage=" waves-effect waves-block waves-light"
                cardContent="Modulo Resultados"
                cardContentReveal={
                    <ContentReveal
                        items={[{ name: 'Ver Resultados', path: 'results' },
                        { name: 'Crear Resultados', path: 'resultados' }]}
                    />
                }
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles Resultados"
                cardImage={results}
            />

            <Card
                className="col s12 m6 l4"
                cardTitle="Clientes"
                classNameImage=" waves-effect waves-block waves-light"
                cardContent="Modulo Clientes"
                cardContentReveal={
                    <ContentReveal
                        items={[{ name: 'Ver Clientes', path: 'clients' },
                        { name: 'Crear Clientes', path: 'clients' }]}
                    />
                }
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles Clientes"
                cardImage={clients}
            />

            <Card
                className="col s12 m6 l4"
                cardTitle="Productos"
                classNameImage=" waves-effect waves-block waves-light"
                cardContent="Modulo Productos"
                cardContentReveal={
                    <ContentReveal
                        items={[{ name: 'Ver Productos', path: 'products' },
                        { name: 'Crear Productos', path: 'products' }]}
                    />
                }
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles Productos"
                cardImage={products}
            />

            <Card
                className="col s12 m6 l4"
                cardTitle="Muestras"
                classNameImage=" waves-effect waves-block waves-light"
                cardContent="Modulo Crear o Ver Muestras"
                cardContentReveal={
                    <ContentReveal
                        items={[{ name: 'Ver Muestras', path: 'viewsamples' },
                        { name: 'Crear Muestras', path: 'samples' }]}
                    />
                }
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles Muestras"
                cardImage={samples}
            />

            <Card
                className="col s12 m6 l4"
                cardTitle="Usuarios"
                classNameImage=" waves-effect waves-block waves-light"
                cardContent="Modulo Usuarios"
                cardContentReveal={
                    <ContentReveal
                        items={[{ name: 'Ver Usuarios', path: 'users' },
                        { name: 'Crear Usuarios', path: 'users' }]}
                    />
                }
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles Usuarios"
                cardImage={users}
            />

            <Card
                className="col s12 m6 l4"
                classNameImage="waves-effect waves-block waves-light"
                cardContent="Lacma"
                cardContentReveal={
                    <ContentReveal
                        items={[{ name: 'LACMA', path: 'lacma' }]}
                    />
                }
                cardContentIcon="Opciones"
                cardTitleReleveal="Detalles LACMA"
                cardImage={other}
            />
        </div>
    )
}

Screen.propTypes = {

}

export default Screen
