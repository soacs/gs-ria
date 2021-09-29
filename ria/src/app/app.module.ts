import { NgModule, APP_INITIALIZER } from '@angular/core';
import { LazyElementsModule } from '@angular-extensions/elements';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SharedAwsIntegrationModule } from '@shared/aws-integration';
import { LayoutModule } from '@ria/layouts';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromApp from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { AppFacade } from './+state/app.facade';
import { NxModule } from '@nrwl/angular';
import * as fromSettings from '@ria/settings';
import { SettingsFacade, SettingsModule } from '@ria/settings';
import { AppInitService } from './services/app-init.service';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

export const initializeApp = (appInitService: AppInitService, appFacade: AppFacade) => {
  return () => {
    return appInitService.init().then((userProfile) => {
      return appInitService.appSettings('goldman').then((settings) => {
        appFacade.init(userProfile, settings);
      });
    });
  };
};
@NgModule({
  declarations: [AppComponent],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService, AppFacade], multi: true },
    AppFacade,
    SettingsFacade
  ],
  imports: [
    BrowserModule,
    LazyElementsModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule,
    SharedAwsIntegrationModule.forRoot({
      apiGatewayBaseUrl: environment.baseUrl
    }),
    StoreModule.forRoot(
      { app: fromApp.appReducer },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    NxModule.forRoot(),
    SettingsModule,
    StoreModule.forFeature(fromSettings.SETTINGS_FEATURE_KEY, fromSettings.settingsReducer),
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
