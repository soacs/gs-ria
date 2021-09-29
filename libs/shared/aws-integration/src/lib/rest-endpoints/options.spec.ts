import { TestBed } from '@angular/core/testing';
import { options } from './options';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  });

  it('should call the marketData', () => {
    const assetClass = 'SPY';
    expect(options.marketData.get(assetClass)).toBe(`/quotes/v2?symbols=SPY&source=cache-fallback&feedType=REALTIME&fundamentals=true`)
  });

  it('should call the optionChainMarketData', () => {
    const underlying = 'SPY';
    expect(options.optionChainMarketData.get(underlying)).toBe(`/v1/marketdata/query/SPY`)
  });

  it('should call the clientNameTypeahead', () => {
    const clientNameStr = 'Abd';
    const advisorId = 'RA123456';
    expect(options.clientNameTypeahead.get(clientNameStr, advisorId)).toBe(`/ria/v2/clients/RA123456?clientName=Abd&optionsEligible=true`)
  });

  it('should call the calculate', () => {
    expect(options.calculate.post()).toBe('/ria/v2/trades/orders/options/calculate')
  });

  it('should call the previewOrder', () => {
    expect(options.previewOrder.post()).toBe(`/ria/v2/trades/orders/options/preview`)
  });

  it('should call the placeOrder', () => {
    const underlying = 'SPY';
    expect(options.placeOrder.post(underlying)).toBe(`/ria/v2/trades/orders/options`)
  });

  it('should test the getHoldings', () => {
    const assetClass='options';
    const subaccountId='RA1234';
    const ticker='SPY'
    expect(options.holdings.get(assetClass, subaccountId, ticker)).toBe('/ria/v2/subaccounts/RA1234/options/positions?ticker=SPY');
  });

  it('should test the getOpenOrders', () => {
    const assetClass='options';
    const subaccountId='RA1234';
    const ticker='SPY'
    expect(options.openOrders.get(assetClass, subaccountId, ticker)).toBe('/ria/v2/subaccounts/RA1234/options/open-orders?ticker=SPY');
  });

  it('should test the getAvialbleCash', () => {
    const subaccountId='RA1234';
    expect(options.availableCash.get(subaccountId)).toBe('/foliofn/accounts/v1/RA1234/balances');
  });


});