import { waitForAsync, TestBed } from '@angular/core/testing';

import { ContentstackService } from './services/contentstack.service';
import { SharedAwsIntegrationModule } from './shared-aws-integration.module';

describe('SharedAwsIntegrationModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SharedAwsIntegrationModule.forRoot({
          apiGatewayBaseUrl: '',
          apiGatewayInternalBaseUrl: ''
        })]
      }).compileComponents();
    })
  );

  it('should have a module definition', () => {
    expect(SharedAwsIntegrationModule).toBeDefined();
  });

  it('should not have contentstack service provider', () => {
    expect(() => TestBed.inject(ContentstackService)).toThrowError(/No provider for/);
  });
});
