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

import { GithubEffects } from 'projects/common/src/public-api';

// import { countReducer } from './store/reducers/counter.reducer';
// import { gitHubReducer } from './store/reducers/github.reducer';
import { persistInLocalStorage, persistInSessionStorage } from './store/meta/persist.store';
import { countReducer } from './store/ducks/counter.duck';
import { gitHubReducer } from './store/ducks/github.duck';

const metaReducers: MetaReducer<any>[] = [persistInLocalStorage];

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
