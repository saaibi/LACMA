import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactResizeDetector from 'react-resize-detector';

import { sampleActions } from "../../../actions/sample.actions";
import { screenSize, scrollToTop, getElementSize } from "../../../utils/dom-utils";

import Grid from './Grid';

import Progress from '../../Common/Utils/Progress';

export class ViewSample extends Component {

    state = {
        range: 0,
        width: 0
    }

    componentWillMount() {
        this.props.dispatch(sampleActions.getAllSample());
    }

    componentDidUpdate() {
        const { samples } = this.props;
        if (samples.samples && !samples.isLoading) {
            const widthTable = getElementSize("tableGrid").width;
            this.grid.style.width = `${widthTable}px`;
        }
    }

    componentDidMount() {
        const width = screenSize().width;
        this.setState({ range: 0, width })
    }

    onRange = (e) => {
        const { name, value } = e.target
        const widthTable = getElementSize("tableGrid").width;
        const rangeGrid = getElementSize("rangeGrid").width;
        this.grid.style.transform = `translateX(${(value * -1)}px)`;
        this.setState({ range: value, width: widthTable - rangeGrid })
    }

    onResize = () => {
        const width = screenSize().width;
        this.setState({ width })
    }

    render() {
        const { samples } = this.props;
        const { range, width } = this.state;

        if (samples.isLoading) { return (<Progress type="linear" />) }
        if (!samples.samples) { return (<Progress type="linear" />) }

        return (
            <div className="border-primary overflow-x-hidden">
                <div
                    id="divGrid"
                    className="carousels"
                    ref={(node) => { this.grid = node }}
                >
                    <Grid samples={samples.samples} className="responsive-table" />
                </div>
                {width > '992' ? <p className="range-field">
                    <input type="range" id="rangeGrid" name="range" value={range} min="0" max={width} onChange={(e) => this.onRange(e)} />
                </p> : ''}
                <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    samples: state.sample,
})

export default connect(mapStateToProps)(ViewSample)
