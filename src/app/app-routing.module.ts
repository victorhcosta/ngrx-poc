import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'contador'
	},
	{
		path: 'contador',
		loadChildren: () => import('./pages/counter/counter.module').then(m => m.CounterModule),
	},
	{
		path: 'github',
		loadChildren: () => import('./pages/github/github.module').then(m => m.GithubModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
