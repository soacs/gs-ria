import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import * as SettingsActions from './settings.actions';
import { ThemeService } from '../../services/theme.service';
import { map } from 'rxjs/operators';

@Injectable()
export class SettingsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          this.themeService.setTheme(action.settings.theme);
          return SettingsActions.themeChangedSuccess();
        },
        onError: (action, error) => {
          return SettingsActions.loadSettingsFailure({ error });
        }
      })
    )
  );

  loadThemes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.loadThemes),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.themeService.getThemesInfo(action.brand).pipe(
            map((response) => {
              return SettingsActions.loadSettingsSuccess({
                settings: {
                  themes: response.themes
                }
              });
            })
          );
        },

        onError: (action, error) => {
          return SettingsActions.loadSettingsFailure({ error });
        }
      })
    )
  );

  changeTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.changeTheme),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          this.themeService.setTheme(action.theme);
          return SettingsActions.themeChangedSuccess();
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SettingsActions.loadSettingsFailure({ error });
        }
      })
    )
  );

  changeBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.changeBrand),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.themeService.getThemesInfo(action.brand).pipe(
            map((response) => {
              this.themeService.setTheme(response.theme);
              return SettingsActions.loadSettingsOnBrandChange({ settings: response });
            })
          );
        },

        onError: (action, error) => {
          return SettingsActions.loadSettingsFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions, private themeService: ThemeService) {}
}
