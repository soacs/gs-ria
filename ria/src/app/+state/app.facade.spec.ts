import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { AppFacade } from './app.facade';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppFacade', () => {
  let facade: AppFacade;
  let store: Store;
  const initialState = {
    userProfile: {}
  };

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [RouterTestingModule, HttpClientTestingModule, LoggerTestingModule],
        providers: [provideMockStore({ initialState }), AppFacade]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(AppFacade);
      store = TestBed.inject(Store);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('should initilize facade', () => {
      const storeDispathSpy = jest.spyOn(store, 'dispatch');
      facade.init({}, {});

      expect(storeDispathSpy).toHaveBeenCalled();
    });
  });
});
