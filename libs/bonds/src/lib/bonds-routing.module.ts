import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BondNavComponent } from './components/bond-nav/bond-nav.component';

const routes: Route[] = [
  {
    component: BondNavComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondsRoutingModule {}
