import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as SettingsActions from '../+state/settings/settings.actions';
import { switchMap, take } from 'rxjs/operators';
import { SettingsFacade } from '../+state/settings/settings.facade';

@Injectable({
  providedIn: 'root'
})
export class SettingsResolver implements Resolve<boolean> {
  constructor(private store: Store, private settingsFacade: SettingsFacade) {}
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  resolve(): Observable<any> {
    return this.settingsFacade.getBrand$.pipe(
      switchMap((brand) => {
        this.store.dispatch(SettingsActions.loadThemes({ brand }));
        return brand;
      }),
      take(1) // take 1 here will complete the observable so that the router can continue
    );
  }
}
