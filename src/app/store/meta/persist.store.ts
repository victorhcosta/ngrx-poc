import { ActionReducer } from '@ngrx/store';
import { IState } from 'src/app/models/state';

export function persist(reducer: ActionReducer<any>): ActionReducer<any> {
	return function (state: IState, action) {
		const previousState = JSON.parse(sessionStorage.getItem('store'));

		if (previousState) state = previousState;

		const result = reducer(state, action);
		sessionStorage.setItem('store', JSON.stringify(result));

		return result;
	};
}
