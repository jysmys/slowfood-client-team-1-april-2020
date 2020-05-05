describe('User can see menu', () => {
  it('user can see menu page', () => {
    cy.visit('http://localhost:3001/')

    cy.get('th#starters').should('be.visible')
    cy.get('div#main_course').should('be.visible')
    cy.get('button#add').should('be.visible')
    cy.get('button#minus').should('be.visible')
    cy.get('div#subtotal').should('be.visible')
    cy.get('button#plus').should('be.visible')

  })
} )