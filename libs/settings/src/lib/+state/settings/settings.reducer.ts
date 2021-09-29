import { createReducer, on } from '@ngrx/store';

import * as SettingsActions from './settings.actions';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { RiaAppState } from '@api-interfaces';

export const SETTINGS_FEATURE_KEY = 'settings';
export interface SettingsFeature {
  brand: string;
  theme: string;
  themes: string[];
  brands: string[];
}
export interface State extends RiaAppState {
  [SETTINGS_FEATURE_KEY]: SettingsFeature;
}

export const initialState = {
  brand: '',
  theme: '',
  themes: [],
  brands: []
};

export const settingsReducer = createReducer(
  initialState,
  on(SettingsActions.init, (state, { settings: settingsState }) => ({ ...state, ...settingsState })),
  on(SettingsActions.loadSettingsSuccess, (state, { settings: settingsState }) => ({ ...state, ...settingsState })),
  on(SettingsActions.loadSettingsOnBrandChange, (state, { settings: settingsState }) => ({
    ...state,
    ...settingsState
  })),
  on(SettingsActions.changeBrand, (state, { brand }) => ({ ...state, brand })),
  on(SettingsActions.changeTheme, (state, { theme }) => ({ ...state, theme })),
  on(SettingsActions.loadSettingsFailure, (state, { error }) => ({ ...state, error }))
);
