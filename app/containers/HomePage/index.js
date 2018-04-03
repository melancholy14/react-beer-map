/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {
  XYPlot,
  VerticalBarSeries,
  LineSeries,
  MarkSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Hint,
} from 'react-vis';

import '../../../node_modules/react-vis/dist/style.css';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      value: {},
    };
  }

  onValueClick = (value) => console.log(value);

  render() {
    const series1 = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }];

    const series2 = [
      { x: 0, y: 16 },
      { x: 1, y: 2 },
      { x: 2, y: 5 },
      { x: 3, y: 2 },
      { x: 4, y: 7 },
      { x: 5, y: 0 },
      { x: 6, y: 12 },
      { x: 7, y: 25 },
      { x: 8, y: 9 },
      { x: 9, y: 3 }];

    return (
      <div className="App">
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            data={series1}
          />
          <VerticalBarSeries
            data={series2}
          />
        </XYPlot>
        <XYPlot
          height={300}
          width={300}
          colorDomain={[0, 1]}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries
            data={series1}
            color={0}
          />
          <LineSeries
            data={series2}
            color={1}
          />
          <MarkSeries
            data={series1}
            color="#cdcdcd"
            onValueClick={(value) => this.setState({ value })}
          >
            <Hint value={this.state.value} />
          </MarkSeries>
          <MarkSeries
            data={series2}
            color="#ab0000"
            onValueClick={this.onValueClick}
          />
        </XYPlot>
      </div>
    );
  }
}
