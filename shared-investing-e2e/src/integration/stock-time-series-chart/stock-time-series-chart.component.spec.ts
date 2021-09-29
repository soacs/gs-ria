describe('shared-investing - Chart with no inputs', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=stocktimeserieschartcomponent--with-no-inputs&knob-chartOptions&knob-chartData&knob-theme'
    )
  );

  it('should show message for no data', () => {
    cy.get('.error-no-data').should('exist');
  });
});

describe('shared-investing - Chart with only chartOptions', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=stocktimeserieschartcomponent--with-only-chart-options&knob-chartOptions&knob-chartData&knob-theme'
    )
  );

  it('should show message for no data', () => {
    cy.get('.error-no-data').should('exist');
  });
});

describe('shared-investing - Chart with only chartData', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=stocktimeserieschartcomponent--with-only-chart-data&knob-chartOptions&knob-chartData&knob-theme'
    )
  );

  it('should render the chart component', () => {
    cy.get('highcharts-chart').should('exist');
  });
});

describe('shared-investing - Chart chartData and chartOptions', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=stocktimeserieschartcomponent--with-chart-data-and-chart-options&knob-chartOptions&knob-chartData&knob-theme'
    )
  );

  it('should render the chart component', () => {
    cy.get('highcharts-chart').should('exist');
  });
});

describe('shared-investing - Chart with no range selectors', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=stocktimeserieschartcomponent--with-no-range-selectors&knob-chartOptions&knob-chartData&knob-theme'
    )
  );

  it('should not render the chart range selectors', () => {
    cy.get('.highcharts-range-selector-group').should('not.exist');
  });
});

describe('shared-investing - Chart with range selectors buttons & no range selector inputs', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=stocktimeserieschartcomponent--with-no-date-filters&knob-chartOptions&knob-chartData&knob-theme'
    )
  );

  it('should render the chart range selector buttons', () => {
    cy.get('.highcharts-range-selector-buttons').should('exist');
  });

  it('should not render the chart range selector date inputs', () => {
    cy.get('.highcharts-input-group').should('not.exist');
  });
});

describe('shared-investing - Chart with disabled exporting', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=stocktimeserieschartcomponent--with-disabled-exporting&knob-chartOptions&knob-chartData&knob-theme'
    )
  );

  it('should not render the chart export button', () => {
    cy.get('.highcharts-exporting-group').should('not.exist');
  });
});

describe('shared-investing - Chart with disabled credits', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=stocktimeserieschartcomponent--with-disabled-credits&knob-chartData&knob-theme')
  );

  it('should not render the chart credits', () => {
    cy.get('.highcharts-credits').should('not.exist');
  });
});

describe('shared-investing - Chart with no navigator', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=stocktimeserieschartcomponent--with-disabled-navigator&knob-chartData&knob-theme')
  );

  it('should not render the chart navigator', () => {
    cy.get('.highcharts-navigator').should('not.exist');
  });
});

// describe('shared-investing - Chart with no tooltip', () => {
//     beforeEach(() => cy.visit('/iframe.html?id=stocktimeserieschartcomponent--with-no-tooltip&knob-chartData&knob-theme'));

//     it('should not render the chart tooltip', () => {
//         cy.get(
//             '.highcharts-series.highcharts-series-0.highcharts-line-series.highcharts-color-0'
//         ).first().trigger('mouseover', {force: true}).then(() => {
//             cy.get('.highcharts-label.highcharts-tooltip-header.highcharts-tooltip-box').should('not.exist');
//         });
//     });
// });
