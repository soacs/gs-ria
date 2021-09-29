import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import '@material/mwc-button';

import { StockTimeSeriesChartComponent } from './stock-time-series-chart/stock-time-series-chart.component';
import { HoldingsPieChartComponent } from './holdings-pie-chart/holdings-pie-chart.component';
import { HighChartsChartService } from './highcharts-service/highcharts-service';

@NgModule({
  imports: [CommonModule, HighchartsChartModule],
  declarations: [StockTimeSeriesChartComponent, HoldingsPieChartComponent],
  exports: [StockTimeSeriesChartComponent, HoldingsPieChartComponent],
  providers: [HighChartsChartService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedInvestingModule {}

export { StockTimeSeriesChartComponent } from './stock-time-series-chart/stock-time-series-chart.component';
export { HoldingsPieChartComponent } from './holdings-pie-chart/holdings-pie-chart.component';
