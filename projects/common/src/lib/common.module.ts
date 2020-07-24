import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { GithubEffects } from './github.effects';
import { countReducer } from '../../../../src/app/store/reducers/counter.reducer';
import { gitHubReducer } from '../../../../src/app/store/reducers/github.reducer';

@NgModule({
	declarations: [],
	imports: [
		StoreModule.forRoot({
			countCommon: countReducer,
			gitHubCommon: gitHubReducer,
		}),
		EffectsModule.forRoot([GithubEffects]),
	],
	providers: [
		Store
	]
})
export class CommonModule {}
