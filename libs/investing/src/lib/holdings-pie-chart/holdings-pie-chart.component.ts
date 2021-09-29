import { Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import * as HighCharts from 'highcharts/highcharts';
import { investingElementsConfigToken, InvestingElementsConfigTokenType } from '../elements-config';
import { HighChartsChartService } from '../highcharts-service/highcharts-service';

@Component({
  selector: 'ria-holdings-pie-chart',
  templateUrl: './holdings-pie-chart.component.html'
})
export class HoldingsPieChartComponent {
  @Input() public showOpenChartButton: boolean;
  public highCharts: typeof HighCharts;
  public chartOptionsForChart: HighCharts.Options;

  private _chartOptions: HighCharts.Options;
  private _chartData: HighCharts.SeriesOptionsType[];

  @Input() public set chartOptions(options: HighCharts.Options) {
    this._chartOptions = options;
    this.updateChartOptions();
  }
  @Input() public set chartData(data: HighCharts.SeriesOptionsType[]) {
    this._chartData = data;
    this.updateChartOptions();
  }
  @Input() set theme(theme: string) {
    this.highChartsChartService.setHighChartsTheme(theme, this.highCharts);
  }

  constructor(
    private highChartsChartService: HighChartsChartService,
    @Optional() @Inject(investingElementsConfigToken) public elementsCfg: InvestingElementsConfigTokenType,
    public elRef: ElementRef
  ) {
    this.highCharts = HighCharts;
    console.log(`
      Element: ${this.elRef?.nativeElement?.tagName?.toLocaleLowerCase()}
      Version: ${this.elementsCfg?.version}
      Package Name: ${this.elementsCfg?.name}
    `);
  }

  private updateChartOptions(): void {
    this.chartOptionsForChart = {
      ...this._chartOptions,
      chart: {
        type: 'pie'
      },
      series: this._chartData
    };
  }
}
