import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@ria/trading/feature-trade-center').then((m) => m.TradingFeatureTradeCenterModule)
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })]
})
export class AppRoutingModule {}
