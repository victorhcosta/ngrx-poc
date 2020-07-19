import { createAction, props } from '@ngrx/store';

const increment = createAction('Increment', props<{ payload: number }>());

const decrement = createAction('Decrement', props<{ payload: number }>());

const reset = createAction('Reset');

export const counterAction = { increment, decrement, reset };
