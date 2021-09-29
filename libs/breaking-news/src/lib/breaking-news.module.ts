import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { BreakingNewsComponent } from './breaking-news-component/breaking-news.component';
import { SharedMaterialModule } from '@shared/material';

@NgModule({
  imports: [CommonModule, MatCardModule, SharedMaterialModule, HttpClientModule, FlexLayoutModule],
  declarations: [BreakingNewsComponent],
  exports: [BreakingNewsComponent]
})
export class BreakingNewsModule {}
