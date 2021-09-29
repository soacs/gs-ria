import { Injectable } from '@angular/core';

import * as HighStock from 'highcharts/highstock';
import * as HighCharts from 'highcharts/highcharts';

// Following are HighCharts export functions imports.
// Export functions can be called with HighCharts input to enable export functionality to the chart.
import HC_exporting from 'highcharts/modules/exporting';
import HC_exporting_data from 'highcharts/modules/export-data';

// Following are HighCharts theme functions imports.
// These are inluded in HighCharts bundle.
// Selected theme function can be called with HighCharts input to render specific theme for the chart.
import theme_avocado from 'highcharts/themes/avocado';
import theme_darkBlue from 'highcharts/themes/dark-blue';
import theme_darkGreen from 'highcharts/themes/dark-green';
import theme_darkUnica from 'highcharts/themes/dark-unica';
import theme_gray from 'highcharts/themes/gray';
import theme_grid from 'highcharts/themes/grid';
import theme_gridLight from 'highcharts/themes/grid-light';
import theme_high_contrast_dark from 'highcharts/themes/high-contrast-dark';
import theme_high_contrast_light from 'highcharts/themes/high-contrast-light';
import theme_sandSignika from 'highcharts/themes/sand-signika';
import theme_skies from 'highcharts/themes/skies';
import theme_sunset from 'highcharts/themes/sunset';

@Injectable()
export class HighChartsChartService {
  private highChartsDefaultOptions: HighCharts.Options;
  private highStockDefaultOptions: HighStock.Options;
  private localThemeMap: {
    [theme: string]: HighCharts.Options | HighStock.Options;
  } = {};

  constructor() {
    this.initHighChartsExport();
    this.highChartsDefaultOptions = Object.assign(true, {}, HighCharts.getOptions(), {});
    this.highStockDefaultOptions = Object.assign(true, {}, HighStock.getOptions(), {});
  }

  // chartPkg can be HiCharts or HighStock. Type is not available.
  public setHighChartsTheme(theme: string, chartPkg): void {
    this.resetOptions();
    if (this.localThemeMap[theme]) {
      chartPkg.setOptions(this.localThemeMap[theme]);
      return;
    }
    switch (theme) {
      case 'avocado':
        theme_avocado(chartPkg);
        break;
      case 'dark-blue':
        theme_darkBlue(chartPkg);
        break;
      case 'dark-green':
        theme_darkGreen(chartPkg);
        break;
      case 'dark-unica':
        theme_darkUnica(chartPkg);
        break;
      case 'gray':
        theme_gray(chartPkg);
        break;
      case 'grid':
        theme_grid(chartPkg);
        break;
      case 'grid-light':
        theme_gridLight(chartPkg);
        break;
      case 'high-contrast-dark':
        theme_high_contrast_dark(chartPkg);
        break;
      case 'high-contrast-light':
        theme_high_contrast_light(chartPkg);
        break;
      case 'sand-signika':
        theme_sandSignika(chartPkg);
        break;
      case 'skies':
        theme_skies(chartPkg);
        break;
      case 'sunset':
        theme_sunset(chartPkg);
        break;
    }
    this.localThemeMap[theme] = Object.assign(true, {}, chartPkg.getOptions(), {});
  }

  public initHighChartsExport(): void {
    HC_exporting(HighStock);
    HC_exporting_data(HighStock);

    HC_exporting(HighCharts);
    HC_exporting_data(HighCharts);
  }

  private resetOptions(): void {
    this.resetOptionsObj(HighCharts.getOptions());
    HighCharts.setOptions(this.highChartsDefaultOptions);

    this.resetOptionsObj(HighStock.getOptions());
    HighStock.setOptions(this.highStockDefaultOptions);
  }

  private resetOptionsObj(hcOptions: HighCharts.Options | HighStock.Options): void {
    for (const prop in hcOptions) {
      if (typeof hcOptions[prop] !== 'function') {
        delete hcOptions[prop];
      }
    }
  }
}
