describe('shared-investing - Holdings Chart with no inputs', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=holdingspiechartcomponent--with-no-inputs&knob-chartOptions&knob-chartData')
  );

  it('should show message for no data', () => {
    cy.get('mwc-button').click();
    cy.get('.error-no-data').should('exist');
  });
});

describe('shared-investing - Holdings Chart with only chartOptions', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=holdingspiechartcomponent--with-only-chart-options&knob-chartOptions&knob-chartData')
  );

  it('should show message for no data', () => {
    cy.get('mwc-button').click();
    cy.get('.error-no-data').should('exist');
  });
});

describe('shared-investing - Holdings Chart with only chartData', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=holdingspiechartcomponent--with-only-chart-data&knob-chartOptions&knob-chartData')
  );

  it('should render the chart component', () => {
    cy.get('mwc-button').click();
    cy.get('highcharts-chart').should('exist');
  });
});

describe('shared-investing - Holdings Chart chartData and chartOptions', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=holdingspiechartcomponent--with-chart-data-and-chart-options&knob-chartOptions&knob-chartData'
    )
  );

  it('should render the chart component', () => {
    cy.get('mwc-button').click();
    cy.get('highcharts-chart').should('exist');
  });
});

describe('shared-investing - Holdings Chart with disabled exporting', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=holdingspiechartcomponent--with-disabled-exporting&knob-chartOptions&knob-chartData')
  );

  it('should not render the chart export button', () => {
    cy.get('mwc-button').click();
    cy.get('.highcharts-exporting-group').should('not.exist');
  });
});

describe('shared-investing - Holdings Chart with disabled credits', () => {
  beforeEach(() => cy.visit('/iframe.html?id=holdingspiechartcomponent--with-disabled-credits&knob-chartData'));

  it('should not render the chart credits', () => {
    cy.get('mwc-button').click();
    cy.get('.highcharts-credits').should('not.exist');
  });
});
