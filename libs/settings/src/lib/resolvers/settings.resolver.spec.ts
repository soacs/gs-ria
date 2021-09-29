import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { SettingsFacade } from '../+state/settings/settings.facade';
import { provideMockStore } from '@ngrx/store/testing';
import { SettingsResolver } from './settings.resolver';

describe('SettingsResolver', () => {
  let resolver: SettingsResolver;
  let store: Store;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: SettingsFacade,
          useValue: {
            getBrand$: jest.fn().mockImplementation(() => of('goldman'))()
          }
        }
      ]
    });
    resolver = TestBed.inject(SettingsResolver);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should be created', async (done) => {
    const spyOnStoreDispath = jest.spyOn(store, 'dispatch');
    resolver.resolve().subscribe(() => {
      expect(spyOnStoreDispath).toBeCalled();
      done();
    });
  });
});
