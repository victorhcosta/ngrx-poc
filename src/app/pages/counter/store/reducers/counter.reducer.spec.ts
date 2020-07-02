import { async, TestBed, fakeAsync } from '@angular/core/testing';

import { StoreModule, Store } from '@ngrx/store';

import { countInitialState, countReducer } from './counter.reducer';
import { Increment, Decrement, Reset } from '../actions/counter.action';
import { IState } from 'src/app/models/state';

describe('Counter reducer', () => {
	let store: Store;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				StoreModule.forRoot({ count: countReducer }),
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.inject(Store);
	});

	it('should create', fakeAsync(() => {
		expect(store).toBeTruthy();
	}));

	describe('Unit', () => {
		it('deve incrementar', () => {
			store.dispatch(Increment(15));
			store.subscribe((store: IState) => {
				expect(store.count).toBe(15);
			});
		});

		it('deve decrementar', () => {
			store.dispatch(Decrement(20));
			store.subscribe((store: IState) => {
				expect(store.count).toBe(-20);
			});
		});

		it('deve reiniciar a store para o estado inicial', () => {
			store.dispatch(Increment(2));
			store.subscribe((store: IState) => {
				expect(store.count).toBe(2);
			});

			store.dispatch(Reset());
			store.subscribe((store: IState) => {
				expect(store.count).toBe(countInitialState);
			});
		});

	});

});
