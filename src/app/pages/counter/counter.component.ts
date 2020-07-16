import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { selectorCounter } from 'src/app/store/selectors/counter.selectors';
import { counterAction } from 'src/app/store/actions/counter.action';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
	number: string;
	count$: Observable<number>;
	userName: string;

	constructor(private readonly _store: Store) {}

	ngOnInit() {
		this.count$ = this._store.pipe(select(selectorCounter));
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
