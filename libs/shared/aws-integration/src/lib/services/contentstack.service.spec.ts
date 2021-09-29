import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { ContentstackService } from './contentstack.service';

describe('ContentstackService', () => {
  let service: ContentstackService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LoggerTestingModule],
      providers: [{ provide: 'config', useValue: { apiGatewayBaseUrl: 'https://api.sbxaws.foliofn.com' } }]
    });
    service = TestBed.inject(ContentstackService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', async () => {
    const mockContent = {
      logo: 'Good looking logo'
    };

    service.getEntry('transamerica', 'logo', 'dev').subscribe((logo) => {
      expect(logo).toEqual(mockContent);
    });

    const req = httpMock.expectOne(
      'https://api.sbxaws.foliofn.com/contentstack/get-contentstack-entry?brand=transamerica&contentType=logo&environment=dev'
    );

    req.flush(mockContent);
    httpMock.verify();
  });
});
