import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { StyleManagerService } from './style-manager.service';
import { ThemeService } from './theme.service';
import { ContentstackService } from '@shared/aws-integration';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LoggerTestingModule],
      providers: [
        StyleManagerService,
        { ContentstackService, useValue: { getEntry: jest.fn() } }, // eslint-disable-line @typescript-eslint/naming-convention
        { provide: 'config', useValue: { apiGatewayBaseUrl: 'https://api.sbxaws.foliofn.com' } }
      ]
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
