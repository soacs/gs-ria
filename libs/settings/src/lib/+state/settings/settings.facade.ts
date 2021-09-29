import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { SettingsState } from '@api-interfaces';
import * as SettingsActions from './settings.actions';
import * as SettingsSelectors from './settings.selectors';

@Injectable()
export class SettingsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(SettingsSelectors.getSettingsLoaded));
  allSettings$ = this.store.pipe(select(SettingsSelectors.getAllSettings));
  selectedSettings$ = this.store.pipe(select(SettingsSelectors.getAllSettings));
  rootState$ = this.store.pipe(select(SettingsSelectors.getRootState));
  getState$ = this.store.pipe(select(SettingsSelectors.getState));
  getTheme$ = this.store.pipe(select(SettingsSelectors.getTheme));
  getBrand$ = this.store.pipe(select(SettingsSelectors.getBrand));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init(settings: SettingsState) {
    this.store.dispatch(SettingsActions.init({ settings }));
  }
}
