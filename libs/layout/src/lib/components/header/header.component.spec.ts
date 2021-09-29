import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';
import { ContentstackService } from '@shared/aws-integration';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let contentstackService: ContentstackService;
  let getEntrySpy;
  const mockConfigResponse = [
    {
      logo: {
        filename: 'gs-header-logo.svg',
        title: 'gs-header-logo.svg',
        url:
          'https://images.contentstack.io/v3/assets/blt2c225a562032c5e3/blt4dd8dea9e679ef84/5fe4bc8302fd0c7d345f2cf6/gs-header-logo.svg'
      },
      brand: 'goldman',
      menuItems: [
        {
          menuItem: {
            text: 'Login',
            icon: 'input',
            route: '/login'
          }
        }
      ],
      title: 'Goldman Sachs'
    }
  ];

  const contentStackServiceMock = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getEntry: (brand, contentType, environment) => of(mockConfigResponse)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ContentstackService, useValue: contentStackServiceMock },
        { provide: 'config', useValue: { baseUrl: 'dev' } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    contentstackService = TestBed.inject<ContentstackService>(ContentstackService);
    getEntrySpy = jest.spyOn(contentstackService, 'getEntry').mockReturnValue(of([{ menuItems: [{}] }]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the callContentStackAPI', () => {
    const spy = jest.spyOn(component, 'callContentStackAPI');
    component.ngOnChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should use the callContentStackAPI and fetch data from the contentstackService', () => {
    expect(getEntrySpy).toBeCalled();
  });
});
