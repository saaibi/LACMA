import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import { sampleActions } from "../../../actions/sample.actions";

import Form from './Form';

import initialState from '../../../utils/sample-state';

let inputName = '';

class Sample extends Component {
    state = {
        sample: initialState
    }

    componentDidMount() {
        this.datepickerSample();
    }

    componentDidUpdate() {
        this.datepickerSample();
    }

    saveDates = (e) => {
        const { sample } = this.state;
        console.log(inputName)
        console.log(e)
        console.log("load Dates2  ", moment(e).format())
        this.setState({
            sample: {
                ...sample,
                [inputName]: moment(e).format()
            }
        })
    }

    loadDates = (e) => {
        inputName = e.target.name;
    }

    createSample = (e) => {
        e.preventDefault();
		this.props.dispatch(sampleActions.createSample(this.state.sample));
    }

    loadSample = (e) => {
        const { sample } = this.state;
        const { name, value } = e.target;
        this.setState({
            sample: {
                ...sample,
                [name]: value
            }
        })
    }

    datepickerSample = (e) => {
        // let today = new Date().toISOString().split("T")[0];
        const dateMax = moment(Date.now()).add(1, 'months').format();
        $('.timepicker').timepicker({
            autoClose: true,
            twelveHour: false,
            showClearBtn: true,
            defaultTime: '',
            onSelect: (hour, minute) => {
                console.log(hour)
                console.log(minute)
            }
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

    render() {
        return (
            <Form
                createSample={this.createSample}
                loadSample={this.loadSample}
                loadDates={this.loadDates}
                loadProduct={this.loadProduct}
            />
        );
    }
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(Sample)
