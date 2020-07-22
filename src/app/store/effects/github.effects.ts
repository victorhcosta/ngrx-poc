import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { mergeMap, map, catchError, take } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { gitHuActions } from 'src/app/store/actions/github.actions';
import { GithubService } from 'src/app/services/github.service';

@Injectable()
export class GithubEffects {
	constructor(
		private readonly _actions$: Actions,
		private readonly _gitHubService: GithubService,
	) {}

	loadReposByUsername = createEffect(() =>
		this._actions$.pipe(
			ofType(gitHuActions.loadRepos),
			mergeMap(action =>
				this._gitHubService.getReposByUser(action.username).pipe(
					take(1),
					map(repos => ({ type: gitHuActions.loadReposSuccess.type, payload: repos })),
					catchError((error: HttpErrorResponse) => of({ type: gitHuActions.loadReposFailure.type, error: error.error })),
				),
			),
		),
	);

	loadOrgsByUserName = createEffect(() => this._actions$.pipe(
		ofType(gitHuActions.loadOrgs),
		mergeMap(action =>
			this._gitHubService.getOrgsByUser(action.username).pipe(
				take(1),
				map(orgs => ({ type: gitHuActions.loadOrgsSuccess.type, payload: orgs })),
				catchError((error: HttpErrorResponse) => of({ type: gitHuActions.loadReposFailure.type, error: error.error })),
			)
		)
	))

}
