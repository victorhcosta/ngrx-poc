import {
	createAction,
	props,
	createReducer,
	on,
	createSelector,
	createFeatureSelector
} from '@ngrx/store';

import { IAction } from '../../models/action';

import { IState } from '../../models/state';

const increment = createAction('Increment', props<{ payload: number }>());

const decrement = createAction('Decrement', props<{ payload: number }>());

const reset = createAction('Reset');

export const counterAction = { increment, decrement, reset };

export const countInitialState = 0;

export const countReducer = createReducer(
	countInitialState,
	on(counterAction.increment, (state, action: IAction) => state + action.payload),
	on(counterAction.decrement, (state, action: IAction) => state - action.payload),
	on(counterAction.reset, () => countInitialState),
);

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
