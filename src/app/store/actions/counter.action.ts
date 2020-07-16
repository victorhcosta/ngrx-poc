import { createAction, props } from '@ngrx/store';

import { IAction } from 'src/app/models/action';

const increment = createAction('Increment', props<{ payload: number }>());

const decrement = createAction('Decrement', props<{ payload: number }>());

const reset = createAction('Reset');

export const counterAction = { increment, decrement, reset };

export enum CountAction {
	Increment = 'Increment',
	Decrement = 'Decrement',
	Reset = 'Reset',
}
