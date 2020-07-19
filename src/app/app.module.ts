import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { countReducer } from './store/reducers/counter.reducer';
import { GithubEffects } from './store/effects/github.effects';
import { gitHubReducer } from './store/reducers/github.reducer';
import { persist } from './store/meta/persist.store';

const metaReducers: MetaReducer<any>[] = [persist];

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		StoreModule.forRoot({
			count: countReducer,
			gitHub: gitHubReducer,
		}, { metaReducers }),
		StoreDevtoolsModule.instrument({
			maxAge: 30,
			logOnly: environment.production,
		}),
		EffectsModule.forRoot([GithubEffects]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
