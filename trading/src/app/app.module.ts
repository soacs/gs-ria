import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedMaterialModule } from '@shared/material';
import { AppComponent } from './app.component';
import { TradingFeatureTradeCenterModule } from '@ria/trading/feature-trade-center';
import { TradingFeatureAppLoadModule } from '@ria/trading/feature-app-load';
import { SharedAwsIntegrationModule } from '@shared/aws-integration';
import { SharedLoaderModule } from '@shared/loader';
import { environment } from '../environments/environment';

console.log('Starting Trading App');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    SharedMaterialModule,
    TradingFeatureTradeCenterModule.forRoot({
      s3Url: environment.s3Url,
      vendors: environment.vendors
    }),
    SharedLoaderModule,
    TradingFeatureAppLoadModule,
    SharedAwsIntegrationModule.forRoot({
      apiGatewayBaseUrl: environment.baseUrl,
      apiGatewayInternalBaseUrl: environment.baseUrlInternal
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
