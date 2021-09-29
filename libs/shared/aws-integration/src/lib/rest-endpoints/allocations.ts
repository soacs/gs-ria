export const allocations = {
  clientNameTypeahead: {
    get: (clientNameStr: string, advisorId: string) =>
      `/ria/v2/clients/${advisorId}?clientName=${clientNameStr}&optionsEligible=false`
  },
  accountNumberTypeahead: {
    get: (accountNumberStr: string, advisorId: string) =>
      `/ria/v2/clients/${advisorId}?accountNumber=${accountNumberStr}&optionsEligible=false`
  },
  folioNumberTypeahead: {
    get: (accountNumberStr: string, advisorId: string) =>
      `/ria/v2/clients/${advisorId}?folioNumber=${accountNumberStr}&optionsEligible=false`
  },
  blockAllocationTrades: {
    get: (blockTradeId: string) => `/ria/v2/trades/${blockTradeId}`
  },
  submitAllocationDetails: {
    post: (blockTradeId: string, advisorId: string) => `/ria/v2/trades/${blockTradeId}/advisor/${advisorId}`
  },
  getBlockTrades: {
    get: (advisorId: string) => `/ria/v2/trades/advisor/${advisorId}`
  }
};
