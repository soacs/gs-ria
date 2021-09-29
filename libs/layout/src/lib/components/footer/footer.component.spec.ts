import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { FooterComponent } from './footer.component';
import { ContentstackService } from '@shared/aws-integration';
import { of } from 'rxjs';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let contentStackService: ContentstackService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [HttpClientTestingModule, LoggerTestingModule],
      providers: [
        { ContentstackService, useValue: { getEntry: jest.fn() } }, // eslint-disable-line @typescript-eslint/naming-convention
        { provide: 'config', useValue: { baseUrl: 'dev' } }
      ]
    }).compileComponents();

    contentStackService = TestBed.inject(ContentstackService);

    jest.spyOn(contentStackService, 'getEntry').mockReturnValue(
      of({
        brand: 'goldman',
        disclaimer: '©2020 by Folio Financial, Inc., a Goldman Sachs Company.'
      })
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the callContentStackAPI', () => {
    const spy = jest.spyOn(component, 'callContentStackAPI');
    component.ngOnChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should use the callContentStackAPI and fetch data from the service', (done) => {
    contentStackService.getEntry('goldman', 'footer', 'dev').subscribe((res) => {
      expect(component.footerConfig).toStrictEqual(res[0]);
      done();
    });

    fixture.detectChanges();
  });
});
