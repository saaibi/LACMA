import React, { Component } from 'react'
import { connect } from 'react-redux'

import Screen from './Screen'

class HomePage extends Component {

    componentDidMount() {
        $('.sidenav').sidenav({
            edge: 'left',
        });
    }

    render() {
        return (
            <div className="container home-component">
                <Screen />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const connectedHome = connect(mapStateToProps)(HomePage);
export { connectedHome as HomePage };