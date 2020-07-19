import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IState } from 'src/app/models/state';

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
