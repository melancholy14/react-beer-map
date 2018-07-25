import { fromJS } from 'immutable';

import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
} from './constants';

const initState = fromJS({
  data: {},
});

export default function sunburstReducer(state = initState, action) {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return state.set('data', action.data);
    case LOAD_DATA_FAILURE:
      return state.set('message', action.message);
    default:
      return state;
  }
}
