import { takeLatest, put } from 'redux-saga/effects';

import sunburstData from 'data/data.json';
import glassesData from 'data/glasses.json';

import {
  LOAD_DATA_REQUEST,
} from './constants';

import {
  loadDataSuccess,
  loadDataFailure,
} from './actions';

const color = () => `#${Math.random().toString(16).slice(2, 8)}`;

const labelStyle = {
  fill: '#000',
  fontSize: 15,
};

function* loadSunburst() {
  try {
    const sunburst = {
      ...sunburstData,
      children: sunburstData.children && sunburstData.children.map((c1) => ({
        ...c1,
        color: color(),
        size: c1.title.length * 10,
        label: c1.title,
        dontRotateLabel: true,
        labelStyle: {
          ...labelStyle,
          fontWeight: 'bold',
        },
        children: c1.children && c1.children.map((c2) => ({
          ...c2,
          color: color(),
          size: c2.title.length * 10,
          label: c2.title,
          dontRotateLabel: true,
          labelStyle: {
            ...labelStyle,
            fontSize: 15,
          },
          children: c2.children && c2.children.map((c3) => ({
            ...c3,
            color: color(),
            size: c3.title.length * 10,
            label: c3.title,
            dontRotateLabel: true,
            labelStyle: {
              ...labelStyle,
              fontSize: 14,
            },
            children: c3.children && c3.children.map((c4) => ({
              ...c4,
              color: color(),
              size: c4.title.length * 10,
              label: c4.title,
              labelStyle: {
                ...labelStyle,
                fontSize: 12,
              },
              children: c4.children && c4.children.map((c5) => ({
                ...c5,
                color: color(),
                size: c5.title.length * 10,
                label: c5.title,
                labelStyle: {
                  ...labelStyle,
                  fontSize: 10,
                },
              })),
            })),
          })),
        })),
      })),
    };

    const glasses = glassesData; // .reduce((acc, ele) => ({ ...acc, [ele.beer]: ele.glass }), {});

    yield put(loadDataSuccess({ sunburst, glasses }));
  } catch (error) {
    console.error(error);
    yield put(loadDataFailure(error.message));
  }
}

export default function* sunburstRequest() {
  yield takeLatest(LOAD_DATA_REQUEST, loadSunburst);
}
