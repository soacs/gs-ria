import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { SettingsFacade } from '../../+state/settings/settings.facade';

import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      providers: [
        provideMockStore({}),
        {
          provide: SettingsFacade,
          useValue: {
            getState$: jest.fn().mockImplementation(() =>
              of({
                brand: 'goldman',
                theme: 'dark-theme'
              })
            )()
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set theme on setTheme', () => {
    const spyOnStoreDispath = jest.spyOn(store, 'dispatch');
    component.onThemeSelect('yellow-theme');
    expect(spyOnStoreDispath).toBeCalled();
  });

  it('should set brand on setBrand', () => {
    const spyOnStoreDispath = jest.spyOn(store, 'dispatch');
    component.onBrandSelect('branded-theme');
    expect(spyOnStoreDispath).toBeCalled();
  });
});
