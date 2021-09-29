import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@material/mwc-button';

import { object } from '@storybook/addon-knobs';
import { HighchartsChartModule } from 'highcharts-angular';
import * as HighCharts from 'highcharts/highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(HighCharts);
import HC_exporting_data from 'highcharts/modules/export-data';
HC_exporting_data(HighCharts);

import { HighChartsChartService } from '../highcharts-service/highcharts-service';
import { HoldingsPieChartComponent } from './holdings-pie-chart.component';

const getDummyDataForChart = () => [
  {
    name: 'Stocks',
    data: [
      {
        name: 'AAPL',
        y: 11.41
      },
      {
        name: 'GOOG',
        y: 11.84
      },
      {
        name: 'TSLA',
        y: 10.85
      },
      {
        name: 'MSFT',
        y: 40.67
      },
      {
        name: 'FCBK',
        y: 4.18
      },
      {
        name: 'AMZN',
        y: 1.64
      },
      {
        name: 'BKSH',
        y: 1.6
      },
      {
        name: 'TWTR',
        y: 1.2
      },
      {
        name: 'SPCX',
        y: 2.61
      }
    ]
  }
];

const chartOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false
  },
  title: {
    text: 'Stock Holdings'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer'
    }
  }
};

export default {
  title: 'HoldingsPieChartComponent'
};

const getStoryObject = (props) => ({
  moduleMetadata: {
    imports: [HighchartsChartModule],
    providers: [HighChartsChartService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  },
  component: HoldingsPieChartComponent,
  props
});

export const withNoInputs = () => ({
  ...getStoryObject({})
});

export const withOnlyChartOptions = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', chartOptions)
  })
});

export const withOnlyChartData = () => ({
  ...getStoryObject({
    chartData: object('chartData', getDummyDataForChart())
  })
});

export const withChartDataAndChartOptions = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', chartOptions),
    chartData: object('chartData', getDummyDataForChart())
  })
});

export const withInnerSizeORDonut = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', {
      ...chartOptions,
      plotOptions: {
        pie: {
          innerSize: '50%'
        }
      },
      title: {
        text: 'Stock Holdings',
        align: 'center',
        verticalAlign: 'middle',
        y: 30
      }
    }),
    // For Donut shape, series data need to have innerSize property.
    chartData: object('chartData', getDummyDataForChart())
  })
});

export const withStartEndAngleORHalfDonut = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', {
      ...chartOptions,
      plotOptions: {
        pie: {
          innerSize: '50%',
          startAngle: -90,
          endAngle: 90
        }
      },
      title: {
        text: 'Stock Holdings',
        align: 'center',
        verticalAlign: 'middle'
      }
    }),
    chartData: object('chartData', getDummyDataForChart())
  })
});

export const withDisabledDataLabels = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', {
      ...chartOptions,
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false
          }
        }
      }
    }),
    chartData: object('chartData', getDummyDataForChart())
  })
});

export const withDisabledExporting = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', {
      ...chartOptions,
      exporting: {
        enabled: false
      }
    }),
    chartData: object('chartData', getDummyDataForChart())
  })
});

export const withDisabledCredits = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', {
      ...chartOptions,
      credits: {
        enabled: false
      }
    }),
    chartData: object('chartData', getDummyDataForChart())
  })
});
