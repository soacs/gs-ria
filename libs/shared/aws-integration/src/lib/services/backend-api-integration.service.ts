import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_INTEGRATION, API_INTEGRATION_INTERNAL, FOLIO_MARKET_DATA, SharedAwsIntegrationModuleConfig } from '../interfaces/aws-api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class BackendApiIntegrationService {
  constructor(private httpClient: HttpClient, @Inject('config') private config: SharedAwsIntegrationModuleConfig) {}
  /* eslint-disable @typescript-eslint/no-explicit-any */
  redirectApis(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.config.apiGatewayBaseUrl}${endpoint}`);
  }

  getApis(endpoint: string, internal?: boolean): Observable<any> {
    const INTEGRATION = internal === true
      ? `${this.config.apiGatewayInternalBaseUrl}${API_INTEGRATION_INTERNAL}`
      : `${this.config.apiGatewayBaseUrl}${API_INTEGRATION}`
    return this.httpClient.get(`${INTEGRATION}${endpoint}`);
  }

  postApis(payload, endpoint: string, internal?: boolean): Observable<any> {
    const INTEGRATION = internal === true
      ? `${this.config.apiGatewayInternalBaseUrl}${API_INTEGRATION_INTERNAL}`
      : `${this.config.apiGatewayBaseUrl}${API_INTEGRATION}`
    return this.httpClient.post(`${INTEGRATION}${endpoint}`, payload);
  }

  deleteApis(endpoint: string): Observable<any> {
    return this.httpClient.delete(`${this.config.apiGatewayBaseUrl}${API_INTEGRATION}${endpoint}`);
  }

  uploadAllocations(payload, endpoint: string): Observable<any> {
    return this.httpClient.post(`${this.config.apiGatewayBaseUrl}${endpoint}`, payload);
  }

  getFolioMarketData(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.config.apiGatewayBaseUrl}${FOLIO_MARKET_DATA}${endpoint}`);
  }
}
