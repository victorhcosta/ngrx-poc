import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { Increment, Decrement, Reset } from './store/actions/counter.action';
import {
	selectorCounter, selectorCounterFeature, selectorCounterAsString,
} from './store/selectors/counter.selectors';
import { IState } from 'src/app/models/state';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
	number: string;
	count$: Observable<number>;

	constructor(private _store: Store) {}

	ngOnInit() {
		this.count$ = this._store.pipe(select(selectorCounter));
	}

	increment() {
		const number = parseFloat(this.number);
		if (number) this._store.dispatch(Increment(number));
		this.number = '';
	}

	decrement() {
		const number = parseFloat(this.number);
		if (number) this._store.dispatch(Decrement(number));
		this.number = '';
	}

	reset() {
		this._store.dispatch(Reset());
	}
}
