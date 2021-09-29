import { text, object } from '@storybook/addon-knobs';
import { HighchartsChartModule } from 'highcharts-angular';
import * as HighStock from 'highcharts/highstock';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(HighStock);
import HC_exporting_data from 'highcharts/modules/export-data';
HC_exporting_data(HighStock);

import { StockTimeSeriesChartComponent } from './stock-time-series-chart.component';
import { HighChartsChartService } from '../highcharts-service/highcharts-service';

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getDummyDataForChart = () => {
  const minMaxArr = [
    {
      min: 1,
      max: 5
    },
    {
      min: 100,
      max: 200
    },
    {
      min: 1000,
      max: 5000
    }
  ];
  const data = [];
  const stocks = ['AAPL', 'MSFT', 'GOOG'];
  const minMax = minMaxArr;
  for (let i = 0; i < stocks.length; i++) {
    const topLevelArray = [];

    for (let j = 15; j < 3000; j++) {
      const price = randomIntFromInterval(minMax[i].min, minMax[i].max);
      topLevelArray.push([new Date(2000, 0, j).getTime(), price]);
    }
    data.push({
      data: topLevelArray,
      name: stocks[i]
    });
  }
  return data;
};

const chartOptions = {
  rangeSelector: {
    selected: 3
  },
  title: {
    text: 'Stock Time Series Comparison Chart'
  },
  subtitle: {
    text: 'MSFT, AAPL, GOOG'
  },
  xAxis: {
    minPadding: 0,
    maxPadding: 0
  },
  yAxis: {
    labels: {
      // disabled the object-shorthand rule here, as the formatter function is going to be invoked in the
      // HighCharts context and not in this class's context.
      // eslint-disable-next-line object-shorthand
      formatter: function () {
        return (this.value > 0 ? ' + ' : '') + this.value + '%';
      }
    },
    plotLines: [
      {
        value: 0,
        width: 2,
        color: 'silver'
      }
    ]
  },
  plotOptions: {
    series: {
      compare: 'percent',
      showInNavigator: true
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
    valueDecimals: 2,
    split: true
  }
};

export default {
  title: 'StockTimeSeriesChartComponent'
};

const getStoryObject = (props) => ({
  moduleMetadata: {
    imports: [HighchartsChartModule],
    providers: [HighChartsChartService]
  },
  component: StockTimeSeriesChartComponent,
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

export const withDifferentTheme = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', chartOptions),
    chartData: object('chartData', getDummyDataForChart()),
    theme: text('theme', 'dark-blue')
  })
});

export const withNoRangeSelectors = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', {
      ...chartOptions,
      rangeSelector: {
        enabled: false
      }
    }),
    chartData: object('chartData', getDummyDataForChart())
  })
});

export const withNoDateFilters = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', {
      ...chartOptions,
      rangeSelector: {
        inputEnabled: false
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

export const withDisabledNavigator = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', {
      ...chartOptions,
      navigator: {
        enabled: false
      }
    }),
    chartData: object('chartData', getDummyDataForChart())
  })
});

export const withNoTooltip = () => ({
  ...getStoryObject({
    chartOptions: object('chartOptions', {
      ...chartOptions,
      tooltip: {
        enabled: false
      }
    }),
    chartData: object('chartData', getDummyDataForChart())
  })
});
