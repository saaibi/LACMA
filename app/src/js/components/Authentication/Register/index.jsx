import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form';
import AppHeader from '../../AppHeader';

class AppRegister extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        },
        submitted: false
    }
    handleChange = (event) => {

    }
    handleSubmit = (event) => {

    }

    render() {
        return (
            <div className="container">
                <AppHeader name="REGISTRO" />
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const connectedAppRegister = connect(mapStateToProps)(AppRegister)
export { connectedAppRegister as AppRegister }
