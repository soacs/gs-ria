import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GET_MOCK_DATA,
  ALLOCATIONS_MOCK_DATA,
  TRADE_VIEW_MOCK_SMALL_DATA,
  ALLOCATIONS_DETAIL_MOCK_DATA,
  SharedAwsIntegrationModuleConfig,
  MARKET_MOCK,
  OPTION_CHAIN_MOCK
} from '../interfaces/aws-api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class MockDataIntegrationService {
  constructor(private httpClient: HttpClient, @Inject('config') private config: SharedAwsIntegrationModuleConfig) {}

  getAllocationsMockData(): Observable<any> {
    return this.httpClient.get(`${this.config.apiGatewayBaseUrl}${GET_MOCK_DATA}${ALLOCATIONS_MOCK_DATA}`);
  }

  getAllocationsDetailMockData(blockTradeId: string): Observable<any> {
    return this.httpClient.get(`${this.config.apiGatewayBaseUrl}${GET_MOCK_DATA}${ALLOCATIONS_DETAIL_MOCK_DATA}`);
  }

  getMarketMockData(): Observable<any> {
    return this.httpClient.get(`${this.config.apiGatewayBaseUrl}${GET_MOCK_DATA}${MARKET_MOCK}`);
  }

  getOptionChainMockData(): Observable<any> {
    return this.httpClient.get(`${this.config.apiGatewayBaseUrl}${GET_MOCK_DATA}${OPTION_CHAIN_MOCK}`);
  }

  getTradeViewMockData(): Observable<any> {
    return this.httpClient.get(`${this.config.apiGatewayBaseUrl}${GET_MOCK_DATA}${TRADE_VIEW_MOCK_SMALL_DATA}`);
  }
}
