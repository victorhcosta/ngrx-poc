import { createAction, props, createSelector } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

import { IAction } from 'src/app/models/action';
import { IGitHub } from 'src/app/models/github';
import { IGitHubRepo, IGitHubOrg } from 'src/app/models/github';
import { IState } from 'src/app/models/state';

const loadRepos = createAction('[GitHub] Load Repos', props<{ username: string }>());
const loadReposSuccess = createAction('[GitHub] Load Repos Success', props<{ repos: IGitHubRepo[] }>());
const loadReposFailure = createAction('[GitHub] Load Repos Failure', props<{ error: string }>());

const loadOrgs = createAction('[GitHub] Load Orgs', props<{ username: string }>());
const loadOrgsSuccess = createAction('[GitHub] Load Orgs Success', props<{ orgs: IGitHubOrg[] }>());
const loadOrgsFailure = createAction('[GitHub] Load Orgs Failure', props<{ error: string }>());

export const gitHuActions = {
	loadRepos,
	loadReposSuccess,
	loadReposFailure,
	loadOrgs,
	loadOrgsSuccess,
	loadOrgsFailure,
};

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

const selectGitHub = (state: IState) => state.gitHub;

export const selectorRepos = createSelector(
	selectGitHub,
	state => state.repos
);

export const selectorOrgs = createSelector(
	selectGitHub,
	state => state.orgs
);

export const selectorReposQuantity = createSelector(
	selectGitHub,
	state => state.repos.length
);

export const selectorOrgsQuantity = createSelector(
	selectGitHub,
	state => state.orgs.length
);
