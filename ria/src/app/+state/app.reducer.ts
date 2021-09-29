import { createReducer, on } from '@ngrx/store';

import * as AppActions from './app.actions';
import { RiaAppState } from '@api-interfaces';

export const APP_FEATURE_KEY = 'app';

export const initialState: RiaAppState = {
  userProfile: {}
};
export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: RiaAppState;
}
export const appReducer = createReducer(
  initialState,
  on(AppActions.loadAppSuccess, (state, { app }) => app),
  on(AppActions.loadAppFailure, (state, { error }) => ({ ...state, error }))
);
