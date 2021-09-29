import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { AppEffects } from './app.effects';
import * as AppActions from './app.actions';
import { SettingsFacade } from '@ria/settings';

describe('AppEffects', () => {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  let actions: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [AppEffects, SettingsFacade, DataPersistence, provideMockActions(() => actions), provideMockStore()]
    });

    effects = TestBed.inject(AppEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: AppActions.init({
          initInfo: {
            userProfile: {
              role: 'Advisor',
              name: 'Joe'
            }
          },
          settings: {
            brand: '',
            theme: '',
            brands: [],
            themes: []
          }
        })
      });

      const expected = hot('-a-|', {
        a: AppActions.loadAppSuccess({
          app: {
            userProfile: {
              role: 'Advisor',
              name: 'Joe'
            }
          }
        })
      });

      expect(effects.init$).toBeObservable(expected);
    });

    /*     it('should error out', () => {
      actions = hot('-a-#', {
        a: AppActions.init({
          initInfo: {
            userProfile: {
              role: 'Advisor',
              name: 'Joe'
            }
          },
          settings: {
            brand: '',
            theme: '',
            brands: [],
            themes: []
          }
        })
      });

      expect(effects.init$).toBeObservable();
    }); */
  });
});
