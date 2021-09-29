import { createAction, props } from '@ngrx/store';
import { RiaAppState, SettingsState } from '@api-interfaces';

export const init = createAction('[App Page] Init', props<{ initInfo: RiaAppState; settings: SettingsState }>());

export const loadAppSuccess = createAction('[App/API] Load App Success', props<{ app: RiaAppState }>());

export const loadAppFailure = createAction('[App/API] Load App Failure', props<{ error }>());
