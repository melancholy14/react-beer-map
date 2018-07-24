import { createSelector } from 'reselect';

const selectSunburst = (state) => state.get('sunburst');

export const makeSelectGraphData = () => createSelector(
  selectSunburst,
  (state) => state.get('data'),
);
