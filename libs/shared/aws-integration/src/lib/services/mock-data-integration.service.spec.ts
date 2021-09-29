import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockDataIntegrationService } from './mock-data-integration.service';

describe('MockDataIntegrationService', () => {
  let service: MockDataIntegrationService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: 'config', useValue: { apiGatewayBaseUrl: 'https://api.sbxaws.foliofn.com' } }]
    });
    service = TestBed.inject(MockDataIntegrationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test the getAllocationsMockData', () => {
    const mockContent = {
      blockTradeStatus: 'Dispute',
      allocated: '0',
      accounts: '0',
      side: 'BUY',
      tradeOrderReference: 5301,
      productIdentifier: 'XS2010030596',
      broker: 'SPGS',
      tradeDate: '4/19/2021',
      settleDate: '4/21/2021',
      orderQuantity: '20,00,000',
      orderPrice: '112',
      securityType: 'FI',
      description: 'CARNIVAL CORP 10.125% 02/01/26 SR:REGS'
    };
    service.getAllocationsMockData().subscribe((allocationData) => {
      expect(allocationData).toEqual(mockContent);
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/get-mock-data/allocations-data');

    req.flush(mockContent);
    httpMock.verify();
  });

  it('should test the getAllocationsDetailsMockData', () => {
    service.getAllocationsDetailMockData('blockTradeId').subscribe((allocationData) => {
      expect(allocationData).toBeTruthy();
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/get-mock-data/allocations-detail-data');

    req.flush({});
    httpMock.verify();
  });

  it('should test the getMarketMockData', () => {
    service.getMarketMockData().subscribe((allocationData) => {
      expect(allocationData).toBeTruthy();
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/get-mock-data/market-data');

    req.flush({});
    httpMock.verify();
  });

  it('should test the getOptionChainMockData', () => {
    service.getOptionChainMockData().subscribe((optionChainData) => {
      expect(optionChainData).toBeTruthy();
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/get-mock-data/option-chain-data');

    req.flush({});
    httpMock.verify();
  });

  it('should test the getTradeViewMockData', () => {
    service.getTradeViewMockData().subscribe((tradeViewData) => {
      expect(tradeViewData).toBeTruthy();
    });

    const req = httpMock.expectOne('https://api.sbxaws.foliofn.com/get-mock-data/trade-view-small-data');

    req.flush({});
    httpMock.verify();
  });
});
