import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';

@NgModule({
  declarations: [GithubComponent],
  imports: [
	CommonModule,
	ReactiveFormsModule,
	GithubRoutingModule,
	MatTabsModule,
	MatCardModule,
  ]
})
export class GithubModule { }
