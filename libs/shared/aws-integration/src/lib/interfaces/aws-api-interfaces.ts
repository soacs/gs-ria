export const CS_API_URL = '/contentstack/get-contentstack-entry';
export const LD_API_URL = '/get-feature-flags';
export const API_INTEGRATION = '/integration';
export const API_INTEGRATION_INTERNAL = '/integration-int';
export const GET_MOCK_DATA = '/get-mock-data'
export const ALLOCATIONS_MOCK_DATA = '/allocations-data'
export const TRADE_VIEW_MOCK_DATA = '/trade-view-data'
export const TRADE_VIEW_MOCK_SMALL_DATA = '/trade-view-small-data'
export const TRADE_VIEW_MOCK_CHILDREN_DATA = '/trade-view-children-data'
export const ALLOCATIONS_DETAIL_MOCK_DATA = '/allocations-detail-data'
export const EXTEND_SESSION = '/oauth/extend-session';
export const MARKET_MOCK = '/market-data';
export const OPTION_CHAIN_MOCK = '/option-chain-data';
export const FOLIO_MARKET_DATA = '/market-data';

export interface SharedAwsIntegrationModuleConfig {
  apiGatewayBaseUrl: string;
  apiGatewayInternalBaseUrl: string;
}
