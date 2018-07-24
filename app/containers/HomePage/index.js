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

import data from 'data/data.json';

export default class HomePage extends React.PureComponent {

  state = {
    currentBeer: 'BEER',
  };

  hover = (value) => { this.setState({ currentBeer: value.title }); }

  render() {
    return (
      <div className="App">
        <h1>BEER MAP</h1>
        <p>Now you are looking at: <b>{this.state.currentBeer}</b> </p>
        <Sunburst
          hideRootNode
          colorType="literal"
          data={data}
          height={768}
          width={768}
          onValueMouseOver={this.hover}
        />
      </div>
    );
  }
}
