import { TestBed, tick as _tick, fakeAsync } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BackendApiIntegrationService, ExtendSessionService } from '@shared/aws-integration';
import { of, asyncScheduler, timer, Subscription } from 'rxjs';
let backendApiIntegrationService: BackendApiIntegrationService;
let extendSessionService: ExtendSessionService;

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpMock;

  const userProfileData = { accessToken: 'eyJhbGciOiJSUzI1NiIsInR5', isLoggedIn: true };

  const localStorageMock = (() => {
    let store = {};

    return {
      getItem: ((key) => {
        return store[key] || null;
      }),
      setItem: ((key, value) => {
        store[key] = value;
      }),
      removeItem: ((key) => {
        delete store[key];
      }),
      clear: (() => {
        store = {};
      })
    };
  })();

  Object.defineProperty(window, 'sessionStorage', {
    value: localStorageMock
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: 'config', useValue: { apiGatewayBaseUrl: 'https://api.sbxaws.foliofn.com' } },
        {
          provide: BackendApiIntegrationService,
          useValue: {
            getApis: jest.fn(),
            postApis: jest.fn()
          }
        },
        {
          provide: ExtendSessionService,
          useValue: {
            extendSession: jest.fn()
          }
        }
      ]
    });
    service = TestBed.inject(AuthenticationService);
    backendApiIntegrationService = TestBed.inject(BackendApiIntegrationService);
    extendSessionService = TestBed.inject(ExtendSessionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
  });

  it('should test the getUserProfile', (done) => {
    jest.spyOn(backendApiIntegrationService, 'getApis').mockReturnValue(of(userProfileData));
    service.getUserProfile().subscribe((result) => {
      expect(result).toBeTruthy();
      done();
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('needs implicit local Login', () => {
    expect(service.login()).toBeTruthy();
  });

  it('user profile value should be retrieved', () => {
    expect(service.userProfileValue).toBeDefined();
  });

  it('should call the setSessionStorage() method', () => {
    const mockContent = {
      accessToken: 'efgsh.dskjdfdf.fskjdfkdfgh',
      refreshToken: 'fewfer.reffre.feferfeve',
      expires: '43100'
    };
    const setItemSpy = jest.spyOn(window.sessionStorage, 'setItem');
    window.sessionStorage.setItem('accessToken', 'efgsh.dskjdfdf.fskjdfkdfgh');
    service.setSessionStorage(mockContent);
    expect(setItemSpy).toBeCalled();
  });

  it('should call the updateAccessTokenAfterRefresh() method', () => {
    const mockContent = {
      accessToken: 'efgsh.dskjdfdf.fskjdfkdfgh',
      refreshToken: 'fewfer.reffre.feferfeve',
      expires: '43100'
    };
    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    window.sessionStorage.setItem('accessToken', 'efgsh.dskjdfdf.fskjdfkdfgh');
    const actualValue = service.getSessionStorage().accessToken;
    service.updateAccessTokenAfterRefresh();
    expect(actualValue).toEqual('efgsh.dskjdfdf.fskjdfkdfgh');
    service.setSessionStorage(mockContent);
    expect(getItemSpy).toBeCalledWith('accessToken');
  });

});
