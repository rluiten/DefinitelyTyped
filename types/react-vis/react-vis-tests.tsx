import * as React from 'react';
import { HorizontalGridLines, XYPlot, XAxis, YAxis, LineSeries } from 'react-vis';

import ContinuousColorLegend from './legends/continuous-color-legend';

class CustomLineSeries extends React.Component {
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
