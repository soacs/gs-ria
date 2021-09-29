describe('ria', () => {
  beforeEach(() => cy.visit('/'));

  it('should contain a single mat side nav component', () => {
    const content = () => cy.get('.mat-sidenav-content');
    content().should('have.length', 1);
  });
});
