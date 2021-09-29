import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BondNavComponent } from './components/bond-nav/bond-nav.component';
import { BondsRoutingModule } from './bonds-routing.module';

@NgModule({
  imports: [CommonModule, BondsRoutingModule],
  declarations: [BondNavComponent]
})
export class BondsModule {}
