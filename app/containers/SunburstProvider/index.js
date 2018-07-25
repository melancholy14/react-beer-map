import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { Sunburst } from 'react-vis';

import styled from 'styled-components';

import {
  loadDataRequest,
} from './actions';

import {
  makeSelectGraphData,
} from './selectors';

import reducer from './reducer';
import saga from './saga';

const width = 900;
const height = 700;

const SunburstDiv = styled.div`
  position: relative;
  padding: 2.5rem;

  & > .title {
    position: absolute;
    width: 15rem;
    line-height: 2.5rem;
    top: ${(height / 2) + 45}px;
    left: ${width / 2}px;
    transform: translate(-50%, -50%);
    font-size: xx-large;
    font-family: fantasy;
    font-weight: bolder;
  }

  .rv-sunburst {
    position: absolute;
    left: 0;
    display: inline-block;
  }

  .info {
    height: ${height}px;
    display: inline-block;
    position: absolute;
    left: ${width}px;

    .glass {
      border: 1px solid #ab0000;
      min-width: 20rem;

      h2:last-child {
        font-family: cursive;
      }
    }
  }
`;

class Data extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    onLoad: PropTypes.func,
  };

  constructor() {
    super();

    this.state = {
      currentBeer: 'BEER',
    };
  }

  componentWillMount() {
    this.props.onLoad();
  }

  hover = (value) => { this.setState({ currentBeer: value.title }); }

  render() {
    const {
      data: {
        sunburst = {},
        glasses = [],
      } = {},
    } = this.props;

    const {
      currentBeer,
    } = this.state;

    return (
      <SunburstDiv>
        <div className="title">{currentBeer}</div>
        <Sunburst
          hideRootNode
          colorType="literal"
          data={sunburst}
          height={height}
          width={width}
          onValueMouseOver={this.hover}
        />
        <div className="info">
          <div className="glass">
            <h2>GLASS</h2>
            <h2>{(glasses.find(({ beer }) => beer === currentBeer) || { glass: 'Not specific' }).glass}</h2>
          </div>
        </div>
      </SunburstDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectGraphData(),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(loadDataRequest()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'sunburst', reducer });
const withSaga = injectSaga({ key: 'sunburst', saga });

export default compose(withSaga, withReducer, withConnect)(Data);
