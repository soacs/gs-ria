import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsChartModule } from 'highcharts-angular';
import { StockTimeSeriesChartComponent } from './stock-time-series-chart.component';
import { HighChartsChartService } from '../highcharts-service/highcharts-service';

describe('StockTimeSeriesChartComponent', () => {
  let component: StockTimeSeriesChartComponent;
  let fixture: ComponentFixture<StockTimeSeriesChartComponent>;
  let chartService: HighChartsChartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockTimeSeriesChartComponent],
      providers: [HighChartsChartService],
      imports: [HighchartsChartModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTimeSeriesChartComponent);
    chartService = TestBed.inject(HighChartsChartService);
    component = fixture.componentInstance;
    component.chartOptions = {};
    component.chartData = [];
    component.theme = 'dark-blue';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have chartOptions', () => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    expect((component as any)._chartOptions).toBeTruthy();
  });

  it('should have chartData', () => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    expect((component as any)._chartData).toBeTruthy();
  });

  it('shoud show message if chartData is not provided', () => {
    component.chartData = undefined;
    fixture.detectChanges();
    const componentElm = fixture.debugElement.nativeElement;
    const errorMessageElm = componentElm.querySelector('.error-no-data');

    expect(errorMessageElm).toBeTruthy();
  });

  it('should render the chart', () => {
    component.chartData = jest
      .fn()
      .mockImplementation(() => [{ name: 'MSFT', type: 'line', data: [[1147651200000, 376.2]] }])();
    fixture.detectChanges();
    const componentElm = fixture.debugElement.nativeElement;
    const chartElm = componentElm.querySelector('highcharts-chart');
    expect(chartElm).toBeTruthy();
  });

  it('should call updateChartOptions on chartData and chartOptions update', () => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const updateChartOptionsSpy = spyOn<any>(component, 'updateChartOptions');
    component.chartData = jest
      .fn()
      .mockImplementation(() => [{ name: 'GOOG', type: 'line', data: [[1147651200000, 376.2]] }])();
    component.chartOptions = jest.fn().mockImplementation(() => ({ rangeSelector: { selected: 2 } }))();
    fixture.detectChanges();

    expect(updateChartOptionsSpy).toBeCalledTimes(2);
  });

  it('should call setHighChartsTheme', () => {
    const setHighChartsThemeSpy = spyOn(chartService, 'setHighChartsTheme').and.returnValue(undefined);
    component.theme = jest.fn().mockImplementation(() => 'avocado')();
    fixture.detectChanges();

    expect(setHighChartsThemeSpy).toHaveBeenCalled();
  });
});
