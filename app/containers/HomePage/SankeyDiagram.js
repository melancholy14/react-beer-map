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
  Sankey,
} from 'react-vis';

import '../../../node_modules/react-vis/dist/style.css';

export default class SankeyDiagram extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      value: {},
    };
  }

  onValueClick = (value) => console.log(value);

  render() {
    const nodes = [
      { name: 'ALE' },
      { name: 'BEER' },
      { name: 'LAGER' },
    ];

    const links = [
      { source: 0, target: 1, value: 8 },
      { source: 1, target: 2, value: 5 },
      { source: 0, target: 2, value: 3 }];

    return (
      <Sankey
        nodes={nodes}
        links={links}
        width={300}
        height={300}
        style={{
          labels: { stroke: '#ab0000' },
          links: { stroke: '#cdcdcd' },
          rects: { stroke: '#000' },
        }}
        onValueClick={this.onValueClick}
      />
    );
  }
}
