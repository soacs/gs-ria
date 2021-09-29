import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthGuard } from './auth.guard';
import { BackendApiIntegrationService } from '@shared/aws-integration';
import { AuthenticationService } from '@shared/security';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  const backendApiIntegrationService = {
    getApis: jest.fn(),
    postApis: jest.fn()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      //providers: [{provide: AuthenticationService }, {provide: BackendApiIntegrationService, useValue: backendApiIntegrationService }]
      providers: [{ provide: 'config', useValue: { apiGatewayBaseUrl: 'https://api.sbxaws.foliofn.com' } }]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
