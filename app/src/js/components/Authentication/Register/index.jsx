import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AppRegister extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <h1>Register!!!</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const connectedAppRegister = connect(mapStateToProps)(AppRegister)
export { connectedAppRegister as AppRegister }
