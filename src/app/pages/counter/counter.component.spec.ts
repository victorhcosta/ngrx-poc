import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { StoreModule, Store } from '@ngrx/store';

import { CounterComponent } from './counter.component';
import { countReducer } from './store/reducers/counter.reducer';

describe('CounterComponent', () => {
	let component: CounterComponent;
	let fixture: ComponentFixture<CounterComponent>;
	let store: Store;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CounterComponent],
			imports: [
				FormsModule,
				StoreModule.forRoot({ count: countReducer })
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		store = TestBed.inject(Store);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should use store', () => {
		component.count$.subscribe(count => {
			expect(count).toBe(0);
		});
	});

	it('should to increment', () => {
		component.number = '3';
		component.increment();
		component.count$.subscribe(count => {
			expect(count).toBe(3);
		});
	});

	it('should to decrement', () => {
		component.number = '3';
		component.decrement();
		component.count$.subscribe(count => {
			expect(count).toBe(-3);
		});
	});

	it('should to reset', () => {
		component.number = '20';
		component.increment();
		component.count$.subscribe(count => {
			expect(count).toBe(20);
		});

		component.reset();
		component.count$.subscribe(count => {
			expect(count).toBe(0);
		});
	});
});
