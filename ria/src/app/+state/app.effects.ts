import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AppActions from './app.actions';
import { SettingsFacade } from '@ria/settings';

@Injectable()
export class AppEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.init),
      fetch({
        run: (action) => {
          // if possible merge into single action
          this.settingsFacade.init(action.settings);
          // this should come from the login module/ security module (ex: okta)
          return AppActions.loadAppSuccess({
            app: {
              userProfile: action.initInfo && action.initInfo.userProfile
            }
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return AppActions.loadAppFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions, private settingsFacade: SettingsFacade) {}
}
