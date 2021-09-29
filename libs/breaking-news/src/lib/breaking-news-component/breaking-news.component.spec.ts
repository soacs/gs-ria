import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { BreakingNewsComponent } from './breaking-news.component';
import { ContentstackService } from '@shared/aws-integration';
import { of } from 'rxjs';

describe('BreakingNewsComponent', () => {
  let component: BreakingNewsComponent;
  let fixture: ComponentFixture<BreakingNewsComponent>;
  let contentStackService: ContentstackService;
  const mockResponse = [
    { brand: 'goldman', articletext: 'news article test', title: 'title test', arialabel: 'mock test aria label' }
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreakingNewsComponent],
      imports: [HttpClientTestingModule, LoggerTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ContentstackService, { provide: 'config', useValue: { baseUrl: 'dev' } }]
    }).compileComponents();

    contentStackService = TestBed.inject(ContentstackService);

    jest.spyOn(contentStackService, 'getEntry').mockReturnValue(of(mockResponse));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingNewsComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the callContentStackAPI and fetch data from the service', async () => {
    await fixture.detectChanges();
    expect(component.testNewsAPIData).toStrictEqual(mockResponse);
  });
});
