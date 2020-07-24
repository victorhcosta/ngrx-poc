import { ActionReducer } from '@ngrx/store';
import { IState } from 'src/app/models/state';

function persist(reducer: ActionReducer<any>, storage: Storage): ActionReducer<any> {
	return function (state: IState, action) {
		const previousState = JSON.parse(storage.getItem('store'));

		if (previousState) state = previousState;

		const result = reducer(state, action);
		storage.setItem('store', JSON.stringify(result));

		return result;
	};
};

export const persistInLocalStorage = (reducer: ActionReducer<any>) => persist(reducer, localStorage);

export const persistInSessionStorage = (reducer: ActionReducer<any>) => persist(reducer, sessionStorage);
