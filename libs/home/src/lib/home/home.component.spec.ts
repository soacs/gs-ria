import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { ContentstackService, FeatureFlagsService } from '@shared/aws-integration';
import { SettingsFacade } from '@ria/settings';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let featureFlagsService: FeatureFlagsService;
  let contentstackService: ContentstackService;

  const mockConfigResponse = [
    {
      brand: 'goldman',
      intro: {
        background: {
          url: `https://images.contentstack.io/v3/assets/blt2c225a562032c5e3/
            blte82b1df179e7ca51/5ff4c70be7fdff751b7951aa/hector-j-rivas-1FxMET2U5dU-unsplash.jpg`
        },
        text: `Efficiently unleash cross-media information without cross-media value. 
          Quickly maximize timely deliverables.`,
        title: 'Ready-made for Your Business'
      },
      sections: [
        {
          heading: 'Angel Investors',
          content: `Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. 
            Override the digital divide with additional clickthroughs.`,
          image: {
            url: `https://images.contentstack.io/v3/assets/blt2c225a562032c5e3/blt04fc5175c3190c37/
              5ff4875ea00f8977b723657d/christine-roy-ir5MHI6rPg0-unsplash.jpg`
          }
        }
      ],
      title: 'goldman'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ContentstackService, useValue: { getEntry: jest.fn() } },
        { provide: 'config', useValue: { baseUrl: 'dev' } },
        { provide: FeatureFlagsService, useValue: { getFeatureFlags: jest.fn() } },
        { provide: SettingsFacade, useValue: { getBrand$: of('goldman') } }
      ]
    }).compileComponents();

    featureFlagsService = TestBed.inject(FeatureFlagsService);
    contentstackService = TestBed.inject(ContentstackService);
  });

  beforeEach(() => {
    jest.spyOn(featureFlagsService, 'getFeatureFlags').mockImplementation(() => of({}));
    jest.spyOn(contentstackService, 'getEntry').mockImplementation(() => of(mockConfigResponse));
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should callContentStackAPI and fetch data from the service', async () => {
    await fixture.detectChanges();
    expect(component.centerConfig).toBeTruthy();
    expect(component.centerConfig.title).toBe('goldman');
  });

  it('should unsubsribe on destory', () => {
    const subscriptionSpy = jest.spyOn(component.getHomeContentFromBrand$, 'unsubscribe');
    component.ngOnDestroy();
    expect(subscriptionSpy).toBeCalled();
  });
});
