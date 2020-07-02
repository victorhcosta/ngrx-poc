import { IAction } from 'src/app/models/action';
import { CountAction } from '../actions/counter.action';

export const countInitialState = 0;

export function countReducer(state = countInitialState, action: IAction) {
	switch (action.type) {
		case CountAction.Increment: {
			state = state + action.payload;
			return state;
		};
		case CountAction.Decrement: {
			let editedState = state;
			editedState = editedState - action.payload;
			return editedState;
		};
		case CountAction.Reset: {
			let editedState = state;
			editedState = countInitialState;
			return editedState;
		}
		default: {
			return state;
		};
	}
};
