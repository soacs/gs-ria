import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SettingsFacade } from '../../+state/settings/settings.facade';
import * as SettingsActions from '../../+state/settings/settings.actions';

@Component({
  selector: 'ria-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  brand: string;
  brands = [];
  themes = [];
  theme: string;
  getThemeInfoFromBrand$: Subscription;

  constructor(private settingsFacade: SettingsFacade, private store: Store) {}

  ngOnInit(): void {
    this.getThemeInfoFromBrand$ = this.settingsFacade.getState$.subscribe((settings) => {
      this.brand = settings.brand;
      this.themes = settings.themes;
      this.theme = settings.theme;
      this.brands = settings.brands;
    });
  }

  onBrandSelect(currentBrand) {
    this.store.dispatch(SettingsActions.changeBrand({ brand: currentBrand.value }));
  }

  onThemeSelect(currentTheme) {
    this.store.dispatch(SettingsActions.changeTheme({ theme: currentTheme.value }));
  }

  ngOnDestroy() {
    this.getThemeInfoFromBrand$.unsubscribe();
  }
}
