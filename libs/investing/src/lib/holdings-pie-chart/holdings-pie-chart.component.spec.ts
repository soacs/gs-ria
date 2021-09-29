import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighchartsChartModule } from 'highcharts-angular';

import { HighChartsChartService } from '../highcharts-service/highcharts-service';
import { HoldingsPieChartComponent } from './holdings-pie-chart.component';

describe('HoldingsPieChartComponent', () => {
  let component: HoldingsPieChartComponent;
  let fixture: ComponentFixture<HoldingsPieChartComponent>;
  let chartService: HighChartsChartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoldingsPieChartComponent],
      imports: [HighchartsChartModule],
      providers: [HighChartsChartService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingsPieChartComponent);
    chartService = TestBed.inject(HighChartsChartService);
    component = fixture.componentInstance;
    component.chartOptions = {};
    component.chartData = [];
    component.showOpenChartButton = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show button', () => {
    component.showOpenChartButton = true;
    fixture.detectChanges();
    const componentElm = fixture.debugElement.nativeElement;
    const mwcButtonElm = componentElm.querySelector('mwc-button');

    expect(mwcButtonElm).toBeTruthy();
  });

  it('should make showOpenChartButton to false', () => {
    component.showOpenChartButton = true;
    fixture.detectChanges();
    const componentElm = fixture.debugElement.nativeElement;
    const mwcButtonElm = componentElm.querySelector('mwc-button');
    mwcButtonElm.click();

    expect(component.showOpenChartButton).toBe(false);
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
    component.chartData = jest.fn().mockImplementation(() => [{ name: 'Stocks', data: [{ name: 'AAPL', y: 100 }] }])();
    fixture.detectChanges();
    const componentElm = fixture.debugElement.nativeElement;
    const chartElm = componentElm.querySelector('highcharts-chart');
    expect(chartElm).toBeTruthy();
  });

  it('should call updateChartOptions on chartData and chartOptions update', () => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const updateChartOptionsSpy = spyOn<any>(component, 'updateChartOptions');
    component.chartData = jest.fn().mockImplementation(() => [{ name: 'Stocks', data: [{ name: 'AAPL', y: 100 }] }])();
    component.chartOptions = jest.fn().mockImplementation(() => ({ title: { text: 'Stock Holdings' } }))();
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
