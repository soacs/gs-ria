import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { EXTEND_SESSION } from '../interfaces/aws-api-interfaces';
import { SharedAwsIntegrationModuleConfig } from '../interfaces/aws-api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExtendSessionService {
  constructor(private httpClient: HttpClient,
    @Inject('config') private config: SharedAwsIntegrationModuleConfig) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extendSession(refreshToken: string, grantType: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('grant_type', grantType);
    params = params.set('refresh_token', refreshToken);
    return this.httpClient.post(`${this.config.apiGatewayBaseUrl}${EXTEND_SESSION}?${params.toString()}`, {});
  }
}