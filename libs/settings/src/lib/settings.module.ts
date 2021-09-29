import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from '@shared/material';
import { SettingsRoutingModule } from './settings-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './+state/settings/settings.effects';
import { SettingsFacade } from './+state/settings/settings.facade';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    SettingsRoutingModule,
    SharedMaterialModule,
    EffectsModule.forFeature([SettingsEffects])
  ],
  declarations: [SettingsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SettingsFacade]
})
export class SettingsModule {}
