import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import { IGitHubOrg, IGitHubRepo } from 'src/app/models/github';
import { selectorCounter } from 'src/app/store/ducks/counter.duck';
import { selectorRepos, selectorOrgs, gitHuActions } from 'src/app/store/ducks/github.duck';
// import { selectorCounter } from 'src/app/store/selectors/counter.selectors';
// import { gitHuActions } from 'src/app/store/actions/github.actions';
// import { selectorRepos, selectorOrgs } from 'src/app/store/selectors/github.selectors';

@Component({
	selector: 'app-github',
	templateUrl: './github.component.html',
	styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit, OnDestroy {
	repos: IGitHubRepo[] = [];
	orgs: IGitHubOrg[] = [];
	repoForm: FormGroup;
	count: number;

	private _unsubscribe$ = new Subject<void>();

	constructor(
		private readonly _formBuilder: FormBuilder,
		private readonly _store: Store,
	) {}

	ngOnInit() {
		this._createRepoForm();

		this._store.pipe(select(selectorCounter), takeUntil(this._unsubscribe$))
			.subscribe(countInStore => this.count = countInStore);

		this._store.pipe(select(selectorRepos), takeUntil(this._unsubscribe$))
			.subscribe(repos => {
				this.repos = repos;
			});

		this._store.pipe(select(selectorOrgs), takeUntil(this._unsubscribe$))
			.subscribe(orgs => this.orgs = orgs);
	}

	ngOnDestroy() {
		this._unsubscribe$.next();
		this._unsubscribe$.complete();
	}

	searchReposByUser() {
		const user = this.repoForm.get('userOwner').value;
		this._store.dispatch(gitHuActions.loadRepos({ username: user }));
	}

	searchOrgsByUser() {
		const user = this.repoForm.get('userOwner').value;
		this._store.dispatch(gitHuActions.loadOrgs({ username: user }));
	}

	private _createRepoForm() {
		this.repoForm = this._formBuilder.group({
			userOwner: ['', Validators.required],
		});
	}

}
