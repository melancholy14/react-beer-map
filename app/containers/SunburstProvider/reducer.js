import { fromJS } from 'immutable';

import {
  LOAD_SUNBURST_GRAPH_SUCCESS,
  LOAD_SUNBURST_GRAPH_FAILURE,
} from './constants';

const initState = fromJS({
  data: {},
});

export default function sunburstReducer(state = initState, action) {
  switch (action.type) {
    case LOAD_SUNBURST_GRAPH_SUCCESS:
      return state.set('data', action.data);
    case LOAD_SUNBURST_GRAPH_FAILURE:
      return state.set('message', action.message);
    default:
      return state;
  }
}
