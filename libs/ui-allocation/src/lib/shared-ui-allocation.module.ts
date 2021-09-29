import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiAllocationComponent } from './ui-allocation/ui-allocation.component';

@NgModule({
  imports: [CommonModule],
  exports: [UiAllocationComponent],
  declarations: [UiAllocationComponent]
})
export class SharedUiAllocationModule {}

export { UiAllocationComponent } from './ui-allocation/ui-allocation.component';
