
export const trades = {

  blockTradeBlotter: {
    get: (blockTradeId: string) => `/ria/v2/trades/${blockTradeId}`// TBD
  },

 getTradeBlotterBlockTrades: {
   get: (advisorId: string) => `/ria/v2/trades/advisor/${advisorId}`
 },

  getTradeBlotterBlockTradesInDateRange: {
    get: (advisorId: string, startDate: string, endDate: string) => `/ria/v2/trades/advisor/${advisorId}?StartDate=${startDate}&EndDate=${endDate}`
  },

  deleteOrder: {
    cancel: (blockTradeId, side, symbol) => `/ria/v2/orders/${blockTradeId}` // TBD
  }
};
