import { TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { throwError } from 'rxjs';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SettingsEffects } from './settings.effects';
import * as SettingsActions from './settings.actions';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ThemeService } from '../../services/theme.service';

describe('SettingsEffects', () => {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  let actions: Observable<any>;
  let effects: SettingsEffects;
  let themeService: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), HttpClientTestingModule],
      providers: [
        SettingsEffects,
        { provide: ThemeService, useValue: { setTheme: jest.fn(), getThemesInfo: jest.fn() } },
        { provide: 'config', useValue: { apiGatewayBaseUrl: 'https://api.sbxaws.foliofn.com' } },
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.inject(SettingsEffects);
    themeService = TestBed.inject(ThemeService);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = of({
        type: SettingsActions.init({
          settings: {
            brand: '',
            theme: '',
            brands: [],
            themes: []
          }
        })
      });

      expect(effects.init$).toBeDefined();
    });

    it('should do theme change', () => {
      const themeSpy = jest.spyOn(themeService, 'setTheme');
      actions = hot('-a-|', {
        a: SettingsActions.init({
          settings: {
            brand: '',
            theme: '',
            brands: [],
            themes: []
          }
        })
      });

      const expected = hot('-a-|', {
        a: SettingsActions.themeChangedSuccess()
      });

      expect(effects.init$).toBeObservable(expected);
      expect(themeSpy).toBeCalled();
    });

    it('should do load themes', () => {
      const themeSpy = jest.spyOn(themeService, 'getThemesInfo').mockReturnValue(
        of({
          themes: []
        })
      );
      actions = hot('-a-|', {
        a: SettingsActions.loadThemes({
          brand: 'goldman'
        })
      });

      const expected = hot('-a-|', {
        a: SettingsActions.loadSettingsSuccess({
          settings: {
            themes: []
          }
        })
      });

      expect(effects.loadThemes$).toBeObservable(expected);
      expect(themeSpy).toBeCalled();
    });

    it('should do not load themes on error', () => {
      const themeSpy = jest.spyOn(themeService, 'getThemesInfo').mockReturnValue(throwError({ error: 'failled call' }));
      actions = hot('-a-|', {
        a: SettingsActions.loadThemes({
          brand: 'goldman'
        })
      });

      const expected = hot('-a-|', {
        a: SettingsActions.loadSettingsFailure({
          error: {
            error: 'failled call'
          }
        })
      });

      expect(effects.loadThemes$).toBeObservable(expected);
      expect(themeSpy).toBeCalled();
    });

    it('should change brand', () => {
      const themeSpy = jest.spyOn(themeService, 'getThemesInfo').mockReturnValue(
        of({
          themes: []
        })
      );
      actions = hot('-a-|', {
        a: SettingsActions.changeBrand({
          brand: 'goldman'
        })
      });

      const expected = hot('-a-|', {
        a: SettingsActions.loadSettingsOnBrandChange({
          settings: {
            themes: []
          }
        })
      });

      expect(effects.changeBrand$).toBeObservable(expected);
      expect(themeSpy).toBeCalled();
    });

    it('should do not change brand themes on error', () => {
      const themeSpy = jest.spyOn(themeService, 'getThemesInfo').mockReturnValue(throwError({ error: 'failled call' }));
      actions = hot('-a-|', {
        a: SettingsActions.changeBrand({
          brand: 'goldman'
        })
      });

      const expected = hot('-a-|', {
        a: SettingsActions.loadSettingsFailure({
          error: {
            error: 'failled call'
          }
        })
      });

      expect(effects.changeBrand$).toBeObservable(expected);
      expect(themeSpy).toBeCalled();
    });

    it('should change theme', () => {
      const themeSpy = jest.spyOn(themeService, 'setTheme');

      actions = hot('-a-|', {
        a: SettingsActions.changeTheme({
          theme: 'dark-theme'
        })
      });

      const expected = hot('-a-|', {
        a: SettingsActions.themeChangedSuccess()
      });

      expect(effects.changeTheme$).toBeObservable(expected);
      expect(themeSpy).toBeCalled();
    });

    /*     it('should do not change theme on error', () => {
      const themeSpy = jest.spyOn(themeService, 'setTheme');
      // .mockImplementation(() => throwError({ error: 'failled call' }));
      actions = hot('-a-#', {
        a: SettingsActions.changeTheme({
          theme: 'dark-theme'
        })
      });

      const expected = hot('-a-#', {
        a: SettingsActions.loadSettingsFailure({
          error: {
            error: 'failled call'
          }
        })
      });

      expect(effects.loadThemes$).toBeObservable(expected);
      expect(themeSpy).toBeCalled();
    }); */
  });
});
