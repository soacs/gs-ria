import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

import { CS_API_URL } from '../interfaces/aws-api-interfaces';
import { SharedAwsIntegrationModuleConfig } from '../interfaces/aws-api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentstackService {
  constructor(
    private httpClient: HttpClient,
    @Inject('config') private config: SharedAwsIntegrationModuleConfig,
    private logger: NGXLogger
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getEntry(brand: string, contentType: string, env: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('brand', brand);
    params = params.append('contentType', contentType);
    params = params.append('environment', env);
    return this.httpClient.get(`${this.config.apiGatewayBaseUrl}${CS_API_URL}`, { params }).pipe(
      retry(1), // Retry a failed API call
    );
  }
}
