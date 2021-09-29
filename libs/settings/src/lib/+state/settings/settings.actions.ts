/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { SettingsState } from '@api-interfaces';
import { createAction, props } from '@ngrx/store';
import { SettingsEntity } from './settings.models';

export const init = createAction('[Settings] Init', props<{ settings: SettingsState }>());

export const loadSettingsOnBrandChange = createAction(
  '[Settings/API] Load Settings on brand change',
  props<{ settings: SettingsEntity }>()
);

export const loadSettingsSuccess = createAction(
  '[Settings/API] Load Settings Success',
  props<{ settings: SettingsEntity }>()
);

export const changeBrand = createAction('[Settings/API] Changed brand', props<{ brand: string }>());

export const changeTheme = createAction('[Settings/API] Changed Theme', props<{ theme: string }>());

export const themeChangedSuccess = createAction('[Settings/API] Changed Theme Successfully');

export const loadThemes = createAction('[Settings/API] Themes loaded', props<{ brand: string }>());

export const loadSettingsFailure = createAction('[Settings/API] Load Settings Failure', props<{ error }>());
