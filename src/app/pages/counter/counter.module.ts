import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';

@NgModule({
	declarations: [CounterComponent],
	imports: [
		CommonModule,
		CounterRoutingModule,
		FormsModule
	],
})
export class CounterModule {}
