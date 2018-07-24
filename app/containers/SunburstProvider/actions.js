import {
  LOAD_SUNBURST_GRAPH_REQUEST,
  LOAD_SUNBURST_GRAPH_SUCCESS,
  LOAD_SUNBURST_GRAPH_FAILURE,
} from './constants';

export function loadSunburstGraphRequest() {
  return {
    type: LOAD_SUNBURST_GRAPH_REQUEST,
  };
}

export function loadSunburstGraphSuccess(data) {
  return {
    type: LOAD_SUNBURST_GRAPH_SUCCESS,
    data,
  };
}

export function loadSunburstGraphFailure(message) {
  return {
    type: LOAD_SUNBURST_GRAPH_FAILURE,
    message,
  };
}
