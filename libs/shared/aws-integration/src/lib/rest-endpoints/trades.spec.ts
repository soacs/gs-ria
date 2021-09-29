import { TestBed } from '@angular/core/testing';
import { trades } from './trades';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  });

  it('should call the blockTradeBlotter', () => {
    const blockTradeId = 'RA12345';
    expect(trades.blockTradeBlotter.get(blockTradeId)).toBe(`/ria/v2/trades/RA12345`);
  });

  it('should call the getTradeBlotterBlockTrades', () => {
    const advisorId = 'RA12345';
    expect(trades.getTradeBlotterBlockTrades.get(advisorId)).toBe(`/ria/v2/trades/advisor/RA12345`);
  });

  it('should call the getTradeBlotterBlockTradesInDateRange', () => {
    const advisorId = 'RA12345';
    const startDate = '2021/09/20';
    const endDate = '2021/09/22';
    expect(trades.getTradeBlotterBlockTradesInDateRange.get(advisorId, startDate, endDate)).toContain(`/ria/v2/trades/advisor/RA12345`);
  });

  it('should call the deleteOrder', () => {
    const blockTradeId = 'RA12345';
    const productIdTypeDesc = 'CUSIP';
    const transactionTypeDesc = 'SELL';
    expect(trades.deleteOrder.cancel(blockTradeId, transactionTypeDesc, productIdTypeDesc)).toBe(`/ria/v2/orders/RA12345`);
  });


});
