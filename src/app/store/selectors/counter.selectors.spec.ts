import { async, TestBed } from '@angular/core/testing';

import { StoreModule, Store, select } from '@ngrx/store';

import { countReducer } from '../reducers/counter.reducer';
import { selectorCounter, selectorCounterFeature, selectorCounterAsString } from './counter.selectors';

describe('Counter selector', () => {
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

	it('should create', () => {
		expect(store).toBeTruthy();
	});

	describe('Unit', () => {
		it('selectorCounter deve retornar 0', () => {
			store.pipe(select(selectorCounter)).subscribe(count => expect(count).toBe(0));
		});

		it('selectorCounterFeature deve retornar', () => {
			store.pipe(select(selectorCounterFeature)).subscribe(count => expect(count).toBe(0));
		});

		it('selectorCounterAsString deve retornar counter como uma string', () => {
			store.pipe(select(selectorCounterAsString)).subscribe(count => expect(count).toBe('0'));
		});

	});

});
