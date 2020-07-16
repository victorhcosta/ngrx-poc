import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IState } from '../../models/state';

const selectCounter = (state: IState) => state.count;

export const selectorCounter = createSelector(
	selectCounter,
	counter => counter,
);

export const selectorCounterAsString = createSelector(
	selectCounter,
	counter => counter.toString(),
);

export const selectorCounterFeature = createFeatureSelector('count');
