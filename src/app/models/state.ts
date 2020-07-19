import { IGitHub } from './github';

export interface IState {
	count?: number;
	gitHub?: IGitHub;
}
