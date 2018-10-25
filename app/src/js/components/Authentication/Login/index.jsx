import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class AppLogin extends Component {
    state = {

    }

    render() {
        return (
            <div className="container">
                <h1>Login!!!</h1>
                <Link to="/register" className="waves-effect waves-light blue lighten-1 btn">Register</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})
const connectedAppLogin = connect(mapStateToProps)(AppLogin);
export { connectedAppLogin as AppLogin }; 