import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FeatureFlagsService } from './feature-flags.service';

describe('FeatureFlagsService', () => {
  let service: FeatureFlagsService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: 'config', useValue: { apiGatewayBaseUrl: 'https://api.sbxaws.foliofn.com' } }]
    });
    service = TestBed.inject(FeatureFlagsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test the getFeatureFlags', () => {
    const mockContent = {
      flags: { breakingNews: true, timeSeriesQuote: true }
    };
    service.getFeatureFlags('Anonymous').subscribe((flags) => {
      expect(flags).toEqual(mockContent);
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/get-feature-flags?user=Anonymous');

    req.flush(mockContent);
    httpMock.verify();
  });
});
