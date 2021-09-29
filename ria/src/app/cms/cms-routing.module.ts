import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { LogoViewerComponent } from './components/logo-viewer/logo-viewer.component';

const routes: Route[] = [
  {
    component: LogoViewerComponent,
    path: ''
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CmsRoutingModule {}
