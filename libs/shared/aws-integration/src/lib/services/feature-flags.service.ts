import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LD_API_URL } from '../interfaces/aws-api-interfaces';
import { SharedAwsIntegrationModuleConfig } from '../interfaces/aws-api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagsService {
  constructor(private httpClient: HttpClient, @Inject('config') private config: SharedAwsIntegrationModuleConfig) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getFeatureFlags(user: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('user', user);
    return this.httpClient.get(`${this.config.apiGatewayBaseUrl}${LD_API_URL}`, { params });
  }
}
