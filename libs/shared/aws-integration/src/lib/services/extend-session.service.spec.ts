import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { ExtendSessionService } from './extend-session.service';
describe('ExtendSessionService', () => {
  let service: ExtendSessionService;
  let httpMock;
  const grantType = 'refresh_token';
  const refreshToken = 'efgsh.dskjdfdf.fskjdfkdf';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LoggerTestingModule],
      providers: [{ provide: 'config', useValue: { apiGatewayBaseUrl: 'https://api.sbxaws.foliofn.com' } }]
    });
    service = TestBed.inject(ExtendSessionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the extend session api and verify the response', async () => {
    const mockContent = {
      accessToken: 'efgsh.dskjdfdf.fskjdfkdfgh',
      refreshToken: 'fewfer.reffre.feferfeve',
      expires: '43100'
    };

    service.extendSession(refreshToken, grantType).subscribe((data) => {
      expect(data).toEqual(mockContent);
    });

    const req = httpMock.expectOne(
      `https://api.sbxaws.foliofn.com/oauth/extend-session?grant_type=refresh_token&refresh_token=efgsh.dskjdfdf.fskjdfkdf`
    );

    req.flush(mockContent);
    httpMock.verify();
  });
});
