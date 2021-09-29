import { NgModule, ModuleWithProviders, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedAwsIntegrationModuleConfig } from './interfaces/aws-api-interfaces';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  exports: []
})
export class SharedAwsIntegrationModule {
  public static forRoot(config: SharedAwsIntegrationModuleConfig): ModuleWithProviders<SharedAwsIntegrationModule> {
    return {
      ngModule: SharedAwsIntegrationModule,
      providers: [{ provide: 'config', useValue: config }]
    };
  }
}
