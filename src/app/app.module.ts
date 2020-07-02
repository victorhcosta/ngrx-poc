import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { countReducer, countInitialState } from './pages/counter/store/reducers/counter.reducer';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		StoreModule.forRoot({
			count: countReducer
		}),
		StoreDevtoolsModule.instrument({
			maxAge: 30,
			logOnly: environment.production,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
