import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AppActions from './app.actions';
import * as AppSelectors from './app.selectors';

@Injectable()
export class AppFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(AppSelectors.getAppLoaded));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init(initInfo, settings) {
    this.store.dispatch(AppActions.init({ initInfo, settings }));
  }
}
