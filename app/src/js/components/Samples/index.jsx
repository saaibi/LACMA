import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Form from './Form';

class Sample extends Component {
    state = {

    }

    createSample = (params) => {
        console.log("Create Sample")
    }

    loadSample = (params) => {
        console.log("load Sample")
    }

    render() {
        return (
            <div className="row">
                <Form createSample={this.createSample} loadSample={this.loadSample} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Sample)
