import { TestBed } from '@angular/core/testing';

import * as HighStock from 'highcharts/highstock';
import * as HighCharts from 'highcharts/highcharts';
import * as theme_avocado from 'highcharts/themes/avocado';
import * as theme_darkBlue from 'highcharts/themes/dark-blue';
import * as theme_darkGreen from 'highcharts/themes/dark-green';
import * as theme_darkUnica from 'highcharts/themes/dark-unica';
import * as theme_gray from 'highcharts/themes/gray';
import * as theme_grid from 'highcharts/themes/grid';
import * as theme_gridLight from 'highcharts/themes/grid-light';
import * as theme_high_contrast_dark from 'highcharts/themes/high-contrast-dark';
import * as theme_high_contrast_light from 'highcharts/themes/high-contrast-light';
import * as theme_sandSignika from 'highcharts/themes/sand-signika';
import * as theme_skies from 'highcharts/themes/skies';
import * as theme_sunset from 'highcharts/themes/sunset';

import { HighChartsChartService } from './highcharts-service';

describe('HighChartsChartService', () => {
  let service: HighChartsChartService;
  const themeNameFn = [
    { themeName: 'avocado', themeFunction: theme_avocado },
    { themeName: 'dark-blue', themeFunction: theme_darkBlue },
    { themeName: 'dark-green', themeFunction: theme_darkGreen },
    { themeName: 'dark-unica', themeFunction: theme_darkUnica },
    { themeName: 'gray', themeFunction: theme_gray },
    { themeName: 'grid', themeFunction: theme_grid },
    { themeName: 'grid-light', themeFunction: theme_gridLight },
    { themeName: 'high-contrast-dark', themeFunction: theme_high_contrast_dark },
    { themeName: 'high-contrast-light', themeFunction: theme_high_contrast_light },
    { themeName: 'sand-signika', themeFunction: theme_sandSignika },
    { themeName: 'skies', themeFunction: theme_skies },
    { themeName: 'sunset', themeFunction: theme_sunset }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighChartsChartService]
    });
    service = TestBed.inject(HighChartsChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call theme function associated wiht theme name for HighCharts', () => {
    for (const theme of themeNameFn) {
      const themeFnSpy = jest.spyOn(theme.themeFunction, 'default');
      service.setHighChartsTheme(theme.themeName, HighCharts);
      expect(themeFnSpy).toHaveBeenCalled();
    }
  });

  it('should call theme function associated wiht theme name for HighStock', () => {
    for (const theme of themeNameFn) {
      const themeFnSpy = jest.spyOn(theme.themeFunction, 'default');
      service.setHighChartsTheme(theme.themeName, HighStock);
      expect(themeFnSpy).toHaveBeenCalled();
    }
  });

  it('should set theme options in local theme map', () => {
    service.setHighChartsTheme('avocado', HighCharts);
    expect(service['localThemeMap']['avocado']).toBeTruthy();
  });

  it('should use local theme map if applying same theme again', () => {
    const setOptionsFnSpy = jest.spyOn(HighCharts, 'setOptions');
    service.setHighChartsTheme('avocado', HighCharts);
    service.setHighChartsTheme('avocado', HighCharts);
    expect(setOptionsFnSpy).toHaveBeenCalled();
  });
});
