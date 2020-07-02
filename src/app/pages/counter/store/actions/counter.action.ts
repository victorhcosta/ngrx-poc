import { IAction } from '../../../../models/action';

export enum CountAction {
	Increment = 'Increment',
	Decrement = 'Decrement',
	Reset = 'Reset',
};

export const Increment = (quantity: number) => <IAction>{ type: CountAction.Increment, payload: quantity };

export const Decrement = (quantity: number) => <IAction>{ type: CountAction.Decrement, payload: quantity };

export const Reset = () => <IAction>{ type: CountAction.Reset };
