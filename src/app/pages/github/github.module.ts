import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';

@NgModule({
  declarations: [GithubComponent],
  imports: [
	CommonModule,
	ReactiveFormsModule,
	GithubRoutingModule,
	MatTabsModule,
  ]
})
export class GithubModule { }
