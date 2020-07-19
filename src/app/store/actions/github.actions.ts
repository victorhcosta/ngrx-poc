import { createAction, props } from '@ngrx/store';
import { IGitHubRepo, IGitHubOrg } from 'src/app/models/github';

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
