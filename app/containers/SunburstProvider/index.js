import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { Sunburst } from 'react-vis';

import {
  loadSunburstGraphRequest,
} from './actions';

import {
  makeSelectGraphData,
} from './selectors';

import reducer from './reducer';
import saga from './saga';

class SunburstGraph extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    onLoad: PropTypes.func,
  };

  constructor() {
    super();

    this.state = {
      currentBeer: '',
    };
  }

  componentWillMount() {
    this.props.onLoad();
  }

  hover = (value) => { this.setState({ currentBeer: value.title }); }

  render() {
    return (
      <div>
        <p>Now you are looking at: <b>{this.state.currentBeer}</b> </p>
        <Sunburst
          hideRootNode
          colorType="literal"
          data={this.props.data}
          height={512}
          width={512}
          onValueMouseOver={this.hover}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectGraphData(),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(loadSunburstGraphRequest()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'sunburst', reducer });
const withSaga = injectSaga({ key: 'sunburst', saga });

export default compose(withSaga, withReducer, withConnect)(SunburstGraph);
