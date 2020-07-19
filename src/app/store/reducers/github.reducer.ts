import { createReducer, on } from '@ngrx/store';

import {
	ToastrService,
	DefaultGlobalConfig,
	Overlay
} from 'ngx-toastr';

import { gitHuActions } from '../actions/github.actions';
import { IAction } from 'src/app/models/action';
import { IGitHub } from 'src/app/models/github';

export const gitHubInitialState: IGitHub = {
	repos: [],
	orgs: []
};

export const gitHubReducer = createReducer(
	gitHubInitialState,
	on(gitHuActions.loadRepos, (state) => ({ ...state, repos: [] })),
	on(gitHuActions.loadReposSuccess, (state, action: IAction) => ({ ...state, repos: action.payload })),
	on(gitHuActions.loadOrgs, (state) => ({ ...state, orgs: [] })),
	on(gitHuActions.loadOrgsSuccess, (state, action: IAction) => ({ ...state, orgs: action.payload })),
);
