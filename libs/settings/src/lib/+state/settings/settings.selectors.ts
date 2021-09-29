/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { RiaAppState } from '@api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsFeature, SETTINGS_FEATURE_KEY } from './settings.reducer';

// Lookup the 'Settings' feature state managed by NgRx
export const getSettingsState = createFeatureSelector<SettingsFeature>(SETTINGS_FEATURE_KEY);

export const getRootState = createFeatureSelector<RiaAppState>('app');

export const getState = createSelector(
  getRootState,
  getSettingsState,
  (rootState: RiaAppState, state: SettingsFeature) => {
    return {
      ...rootState,
      ...state
    };
  }
);

export const selectSettings = createSelector(getSettingsState, (state: SettingsFeature) => state.themes);

export const getSettingsLoaded = createSelector(getSettingsState, (state: SettingsFeature) => state);

export const getSettingsError = createSelector(getSettingsState, (state: SettingsFeature) => state);

export const getAllSettings = createSelector(getSettingsState, (state: SettingsFeature) => state);

export const getSettings = createSelector(getSettingsState, (state: SettingsFeature) => state);

export const getSelectedId = createSelector(getSettingsState, (state: SettingsFeature) => state.themes);

export const getBrand = createSelector(getSettingsState, (state: SettingsFeature) => state.brand);

export const getTheme = createSelector(getSettingsState, (state: SettingsFeature) => state.theme);
