import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RiaAppState } from '@api-interfaces';
import { APP_FEATURE_KEY, AppPartialState } from './app.reducer';

// Lookup the 'App' feature state managed by NgRx
export const getAppState = createFeatureSelector<AppPartialState, RiaAppState>(APP_FEATURE_KEY);

export const getAppLoaded = createSelector(getAppState, (state: RiaAppState) => state);

export const getAppError = createSelector(getAppState, (state: RiaAppState) => state);
