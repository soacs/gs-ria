import { getGreeting } from '../support/app.po';

describe('trading', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    const content = () => cy.get('trading-trade-center');
    content().should('have.length', 1);
  });
});
