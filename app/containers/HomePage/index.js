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
import { Sunburst } from 'react-vis';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const data = {
      title: 'analytics',
      color: '#12939A',
      children: [{
        title: 'cluster',
        children: [
          { title: 'AgglomerativeCluster', color: '#12939A', size: 3938 },
          { title: 'CommunityStructure', color: '#12A49A', size: 3812 },
          { title: 'HierarchicalCluster', color: '#12B59A', size: 6714 },
          { title: 'MergeEdge', color: '#12C69A', size: 743 },
        ],
      },
      {
        title: 'graph',
        children: [
          { title: 'BetweennessCentrality', color: '#23939A', size: 3534 },
          { title: 'LinkDistance', color: '#34939A', size: 5731 },
          { title: 'MaxFlowMinCut', color: '#45939A', size: 7840 },
          { title: 'ShortestPaths', color: '#56939A', size: 5914 },
          { title: 'SpanningTree', color: '#67939A', size: 3416 },
        ],
      },
      {
        title: 'optimization',
        children: [
          { title: 'AspectRatioBanker', color: '#1293AB', size: 7074 },
        ],
      }],
    };

    return (
      <div className="App">
        <h1>Let us know about beers :)</h1>
        <Sunburst
          hideRootNode
          colorType="literal"
          data={data}
          height={300}
          width={350}
        />
      </div>
    );
  }
}
