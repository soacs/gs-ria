export const options = {
    marketData: {
      get: (assetClass: string) =>
        `/quotes/v2?symbols=${assetClass}&source=cache-fallback&feedType=REALTIME&fundamentals=true`
    },
    optionChainMarketData: {
      get: (underlying: string) =>
        `/v1/marketdata/query/${underlying}`
    },
    clientNameTypeahead: {
      get: (clientNameStr: string, advisorId: string) =>
        `/ria/v2/clients/${advisorId}?clientName=${clientNameStr}&optionsEligible=true`
    },
    calculate: {
      post: () => '/ria/v2/trades/orders/options/calculate'
    },
    previewOrder: {
      post: () =>
        `/ria/v2/trades/orders/options/preview`
    },
    placeOrder: {
      post: (underlying: string) =>
        `/ria/v2/trades/orders/options`
    },
    holdings: {
      get: (assetClass: string, subaccountId: string, ticker: string) =>
        `/ria/v2/subaccounts/${subaccountId}/${assetClass}/positions?ticker=${ticker}`
    },
    openOrders: {
      get: (assetClass: string, subaccountId: string, ticker: string) =>
        `/ria/v2/subaccounts/${subaccountId}/${assetClass}/open-orders?ticker=${ticker}`
    },
    availableCash: {
      get: (subaccountId) =>
        `/foliofn/accounts/v1/${subaccountId}/balances`
    }
  };