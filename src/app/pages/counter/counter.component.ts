import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import { selectorCounter } from 'src/app/store/selectors/counter.selectors';
import { counterAction } from 'src/app/store/actions/counter.action';
import { IState } from 'src/app/models/state';
import { selectorOrgsQuantity, selectorReposQuantity } from 'src/app/store/selectors/github.selectors';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, OnDestroy {
	number: string;
	count$: Observable<number>;
	totalRepos: number;
	totalOrgs: number;

	private _unsubscribe$ = new Subject<void>();

	constructor(private readonly _store: Store) {}

	ngOnInit() {
		this.count$ = this._store.pipe(select(selectorCounter));

		this._store.pipe(select(selectorReposQuantity), takeUntil(this._unsubscribe$))
			.subscribe(totalRepos => this.totalRepos = totalRepos);

		this._store.pipe(select(selectorOrgsQuantity), takeUntil(this._unsubscribe$))
			.subscribe(totalOrgs => this.totalOrgs = totalOrgs);
	}

	ngOnDestroy() {
		this._unsubscribe$.next();
		this._unsubscribe$.complete();
	}

	increment() {
		const number = parseFloat(this.number);
		if (number) this._store.dispatch(counterAction.increment({ payload: number }));
		this.number = '';
	}

	decrement() {
		const number = parseFloat(this.number);
		if (number) this._store.dispatch(counterAction.decrement({ payload: number }));
		this.number = '';
	}

	reset() {
		this._store.dispatch(counterAction.reset());
	}
}
