import * as React from 'react';
import { HorizontalGridLines, XYPlot, XAxis, YAxis, LineSeries, MarkSeries, LineMarkSeries } from 'react-vis';

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

// When can address why typescript@next reports error got `any` expected `string`
// is fixed restore `$ExpectType string` to type of name
const d = [{ x: 1, y: 10, name: 'Name' }];

const seriesInferred01 = () => (
    <MarkSeries
        data={d}
        onValueClick={({ name }) => {
            // $ExpectType string
            return name;
        }}
    />
);
const seriesInferred02 = () => <LineMarkSeries data={d} onValueClick={({ name }) => name} />;

// $ExpectError
const handlerField01 = () => <MarkSeries data={d} onValueClick={({ xyz }) => 'x'} />;

// $ExpectError
const dataField01 = () => <MarkSeries data={[{ x: 1 }]} />;
