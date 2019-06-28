import * as React from 'react';
import { HorizontalGridLines, XYPlot, XAxis, YAxis, LineSeries, MarkSeries } from 'react-vis';

export class CustomLineSeries extends React.Component {
    render() {
        return (
            <XYPlot width={300} height={300}>
                <HorizontalGridLines />
                <LineSeries data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]} />
                <XAxis />
                <YAxis />
            </XYPlot>
        );
    }
}

export class DataPointTypeInferenceToHandler extends React.Component {
    render() {
        return 'dummy';
    }

    renderMarkSeriesInferredType() {
        return (
            <MarkSeries
                data={[{ x: 1, y: 10, name: 'Name' }]}
                onValueClick={({ x, y, name }) => {
                    return name;
                }}
            />
        );
    }

    narkSeriesErrorInferredType() {
        return (
            <MarkSeries
                data={[{ x: 1, y: 10, name: 'Name' }]}
                // $ExpectError
                onValueClick={({ x, y, banana }) => {
                    return 'dummy';
                }}
            />
        );
    }

    // $ExpectError
    markSeriesMissingFieldInData = () => <MarkSeries data={[{ x: 1 }]} />;
}
