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
        $('.timepicker').timepicker({
            autoClose: true,
            twelveHour: false,
            showClearBtn: true,
        });
        $('.datepicker').datepicker({
            format: "dd/mm/yyyy",
            autoClose: true,
            showClearBtn: true,
            disableWeekends: true,
            minDate: new Date(),
            maxDate: new Date(dateMax),
            onSelect: this.saveDates
        });
    }
    saveDates = (e) => {
        const { sample } = this.state;
        console.log(inputName)
        console.log("load Dates2  ", moment(e).format('DD/MM/YYYY'))
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
