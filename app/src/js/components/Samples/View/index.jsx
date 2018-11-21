import React, { Component } from 'react'
import { connect } from 'react-redux'

import { sampleActions } from "../../../actions/sample.actions";

import Grid from './Grid';

import Progress from '../../Common/Utils/Progress';

export class ViewSample extends Component {

    componentWillMount() {
        this.props.dispatch(sampleActions.getAllSample());
    }

    render() {
        const { samples } = this.props;

        if (samples.isLoading) { return (<Progress type="linear" />) }
        if (!samples.samples) { return (<Progress type="linear" />) }

        return (
            <div>
               <Grid samples={samples.samples} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    samples: state.sample,
})

export default connect(mapStateToProps)(ViewSample)
