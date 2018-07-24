import { takeLatest, put } from 'redux-saga/effects';

import data from 'data/data.json';

import {
  LOAD_SUNBURST_GRAPH_REQUEST,
} from './constants';

import {
  loadSunburstGraphSuccess,
  loadSunburstGraphFailure,
} from './actions';

const color = () => `#${Math.random().toString(16).slice(2, 8)}`;

function* loadSunburst() {
  try {
    const coloredData = {
      ...data,
      color: color(),
      children: data.children.map((c1) => ({
        ...c1,
        color: color(),
        children: c1.children.map((c2) => ({
          ...c2,
          color: color(),
          children: c2.children.map((c3) => ({
            ...c3,
            color: color(),
          })),
        })),
      })),
    };

    yield put(loadSunburstGraphSuccess(coloredData));
  } catch (error) {
    console.error(error);
    yield put(loadSunburstGraphFailure(error.message));
  }
}

export default function* sunburstRequest() {
  yield takeLatest(LOAD_SUNBURST_GRAPH_REQUEST, loadSunburst);
}
