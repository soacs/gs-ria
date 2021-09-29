import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { LogoViewerComponent } from './components/logo-viewer/logo-viewer.component';
import { SharedAwsIntegrationModule } from '@shared/aws-integration';

@NgModule({
  declarations: [LogoViewerComponent],
  imports: [CommonModule, CmsRoutingModule, SharedAwsIntegrationModule]
})
export class CmsModule {}
