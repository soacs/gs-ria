import { Component, ElementRef, Inject, Input, Optional } from '@angular/core';

import * as HighStock from 'highcharts/highstock';
import { investingElementsConfigToken, InvestingElementsConfigTokenType } from '../elements-config';
import { HighChartsChartService } from '../highcharts-service/highcharts-service';

@Component({
  selector: 'ria-stock-time-series-chart',
  templateUrl: './stock-time-series-chart.component.html'
})
export class StockTimeSeriesChartComponent {
  public highStock: typeof HighStock;
  public chartOptionsForChart: HighStock.Options;

  private _chartOptions: HighStock.Options;
  private _chartData: HighStock.SeriesOptionsType[];

  @Input() set chartOptions(options: HighStock.Options) {
    this._chartOptions = options;
    this.updateChartOptions();
  }
  @Input() set chartData(data: HighStock.SeriesOptionsType[]) {
    this._chartData = data;
    this.updateChartOptions();
  }
  @Input() set theme(theme: string) {
    this.highChartsChartService.setHighChartsTheme(theme, this.highStock);
  }

  constructor(
    private highChartsChartService: HighChartsChartService,
    @Optional() @Inject(investingElementsConfigToken) public elementsCfg: InvestingElementsConfigTokenType,
    public elRef: ElementRef
  ) {
    this.highStock = HighStock;
    console.log(`
      Element: ${this.elRef?.nativeElement?.tagName?.toLocaleLowerCase()}
      Version: ${this.elementsCfg?.version}
      Package Name: ${this.elementsCfg?.name}
    `);
  }

  private updateChartOptions(): void {
    this.chartOptionsForChart = {
      ...this._chartOptions,
      series: this._chartData
    };
  }
}
