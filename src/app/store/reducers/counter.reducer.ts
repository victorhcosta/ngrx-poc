import { createReducer, on } from '@ngrx/store';

import { IAction } from '../../models/action';
import { counterAction } from '../actions/counter.action';

export const countInitialState = 0;

export const countReducer = createReducer(
	countInitialState,
	on(counterAction.increment, (state, action: IAction) => state + action.payload),
	on(counterAction.decrement, (state, action: IAction) => state - action.payload),
	on(counterAction.reset, () => countInitialState),
);
