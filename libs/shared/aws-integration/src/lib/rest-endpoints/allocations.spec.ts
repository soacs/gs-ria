import { TestBed } from '@angular/core/testing';
import { allocations } from './allocations';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  });

  it('should call the clientNameTypeahead', () => {
    const clientNameStr = 'Abd';
    const advisorId = 'RA123456';
    expect(allocations.clientNameTypeahead.get(clientNameStr, advisorId)).toBe(`/ria/v2/clients/RA123456?clientName=Abd&optionsEligible=false`)
  });

  it('should call the accountNumberTypeahead', () => {
    const accountNumberStr = '23455345';
    const advisorId = 'RA123456';
    expect(allocations.accountNumberTypeahead.get(accountNumberStr, advisorId)).toBe(`/ria/v2/clients/RA123456?accountNumber=23455345&optionsEligible=false`)
  });

  it('should call the folioNumberTypeahead', () => {
    const accountNumberStr = '23455345';
    const advisorId = 'RA123456';
    expect(allocations.folioNumberTypeahead.get(accountNumberStr, advisorId)).toBe(`/ria/v2/clients/RA123456?folioNumber=23455345&optionsEligible=false`)
  });

  it('should call the blockAllocationTrades', () => {
    const blockTradeId = 'RA123456';
    expect(allocations.blockAllocationTrades.get(blockTradeId)).toBe(`/ria/v2/trades/RA123456`)
  });

  it('should call the getBlockTrades', () => {
    const advisorId = 'RA123456';
    expect(allocations.getBlockTrades.get(advisorId)).toBe(`/ria/v2/trades/advisor/RA123456`)
  });

  it('should call the submitAllocationDetails', () => {
    const advisorId = 'RA123456';
    const blockTradeId = '765437324';
    expect(allocations.submitAllocationDetails.post(blockTradeId, advisorId)).toBe(`/ria/v2/trades/765437324/advisor/RA123456`)
  });
});