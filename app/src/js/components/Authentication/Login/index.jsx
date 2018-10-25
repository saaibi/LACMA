import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AppLogin extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <h1>Login!!!</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})
const connectedAppLogin = connect(mapStateToProps)(AppLogin);
export { connectedAppLogin as AppLogin }; 