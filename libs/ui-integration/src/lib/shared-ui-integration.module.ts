import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIntegrationComponent } from './ui-integration/ui-integration.component';
import { SafePipe } from './ui-integration/safe-pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [UiIntegrationComponent, SafePipe]
})
export class SharedUiIntegrationModule {}
export { UiIntegrationComponent } from './ui-integration/ui-integration.component';
