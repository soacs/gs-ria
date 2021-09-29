import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { SettingsFacade } from './settings.facade';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('SettingsFacade', () => {
  const initialState = {
    userProfile: {}
  };
  let facade: SettingsFacade;
  let store: Store;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [LoggerTestingModule, HttpClientTestingModule, LoggerTestingModule],
        providers: [provideMockStore({ initialState }), SettingsFacade]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(SettingsFacade);
      store = TestBed.inject(Store);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('should initilize facade', () => {
      const storeDispathSpy = jest.spyOn(store, 'dispatch');
      facade.init({
        brand: '',
        theme: '',
        brands: [],
        themes: []
      });

      expect(storeDispathSpy).toBeCalled();
    });
  });
});
