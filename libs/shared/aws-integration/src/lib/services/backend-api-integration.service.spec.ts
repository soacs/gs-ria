import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { BackendApiIntegrationService } from './backend-api-integration.service';

describe('BackendApiIntegrationService', () => {
  let service: BackendApiIntegrationService;
  let httpMock;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [{ provide: 'config', useValue: { apiGatewayBaseUrl: 'https://api.sbxaws.foliofn.com',  apiGatewayInternalBaseUrl: 'https://apigw-int.dapaws.foliofn.com'} }]
      }).compileComponents();
      service = TestBed.inject(BackendApiIntegrationService);
      httpMock = TestBed.inject(HttpTestingController);
    })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should submit uploadAllocations', (done) => {
    service.uploadAllocations({}, '/upload-allocations').subscribe((allocations) => {
      expect(allocations).toEqual({});
      done();
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/upload-allocations');

    req.flush({});
    httpMock.verify();
  });

  it('should get data for getapis', (done) => {
    service.getApis('/get-allocations').subscribe((allocations) => {
      expect(allocations).toEqual({});
      done();
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/integration/get-allocations');

    req.flush({});
    httpMock.verify();
  });

  it('should get data for getapis for internal calls', (done) => {
    service.getApis('/get-allocations', true).subscribe((allocations) => {
      expect(allocations).toEqual({});
      done();
    });

    const req = httpMock.expectOne('https://apigw-int.dapaws.foliofn.com/integration-int/get-allocations');

    req.flush({});
    httpMock.verify();
  });

  it('should post data for postapis', (done) => {
    service.postApis({}, '/post-allocations').subscribe((allocations) => {
      expect(allocations).toEqual({});
      done();
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/integration/post-allocations');

    req.flush({});
    httpMock.verify();
  });

  it('should get data for postapis for internal calls', (done) => {
    service.postApis({}, '/post-allocations', true).subscribe((allocations) => {
      expect(allocations).toEqual({});
      done();
    });

    const req = httpMock.expectOne('https://apigw-int.dapaws.foliofn.com/integration-int/post-allocations');

    req.flush({});
    httpMock.verify();
  });

  it('should get data for marketData', (done) => {
    service.getFolioMarketData('/quotes/v1?symbols=spy&source=cache-fallback&feedType=REALTIME').subscribe((marketData) => {
      expect(marketData).toEqual({});
      done();
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/market-data/quotes/v1?symbols=spy&source=cache-fallback&feedType=REALTIME');

    req.flush({});
    httpMock.verify();
  });

  it('should get data for redirectApis', (done) => {
    service.redirectApis('/vendors/sso?vendorId=bondnav').subscribe((redirectData) => {
      expect(redirectData).toEqual({});
      done();
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/vendors/sso?vendorId=bondnav');

    req.flush({});
    httpMock.verify();
  });

  it('should delete order', (done) => {
    service.deleteApis('/ria/v2/orders/671').subscribe((cancelOrder) => {
      expect(cancelOrder).toEqual({});
      done();
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/integration/ria/v2/orders/671');

    req.flush({});
    httpMock.verify();

  });
});
