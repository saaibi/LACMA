import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import Form from './Form';

let inputName = '';

class Sample extends Component {
    state = {
        sample: {

        }
    }

    componentDidMount() {
        const dateMax = moment(Date.now()).add(1, 'months').format();
        $('.datepicker').datepicker({
            format: "dd/mm/yyyy",
            autoClose: true,
            disableWeekends: true,
            showClearBtn: true,
            setDefaultDate: true,
            minDate: new Date(),
            maxDate: new Date(dateMax),
            onSelect: this.saveDates
        });
    }
    saveDates = (e) => {
        const { sample } = this.state;
        console.log(inputName)
        console.log("load Dates2  ", e)
    }

    loadDates = (e) => {
        const { name } = e.target;
        inputName = name;
    }

    createSample = (e) => {
        console.log("Create Sample")
    }

    loadSample = (e) => {
        const { sample } = this.state;
        const { name, value } = e.target;
        console.log("load Sample  ", name, value)
        this.setState({
            sample: {
                ...sample,
                [name]: value
            }
        })
    }



    render() {
        return (
            <Form
                createSample={this.createSample}
                loadSample={this.loadSample}
                loadDates={this.loadDates}
            />
        );
    }
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(Sample)
