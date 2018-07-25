import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
} from './constants';

export function loadDataRequest() {
  return {
    type: LOAD_DATA_REQUEST,
  };
}

export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    data,
  };
}

export function loadDataFailure(message) {
  return {
    type: LOAD_DATA_FAILURE,
    message,
  };
}
