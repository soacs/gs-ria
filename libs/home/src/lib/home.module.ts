import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BreakingNewsModule } from '@ria/breaking-news';
import { SharedMaterialModule } from '@shared/material';

@NgModule({
  imports: [CommonModule, RouterModule, BreakingNewsModule, FlexLayoutModule, SharedMaterialModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
