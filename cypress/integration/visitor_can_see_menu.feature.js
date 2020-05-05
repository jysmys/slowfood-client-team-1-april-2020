describe('User can see menu', () => {
  it('user can see starters', () => {
    cy.visit('http://localhost:3001/')

    cy.get('th#starters').should('be.visible')
    cy.get('button#add').should('be.visible')
    cy.get('button#minus').should('be.visible')
    cy.get('td#numberOfItems').should('be.visible')
    cy.get('button#plus').should('be.visible')

  })
  it('user can see main course', () => {
    cy.visit('http://localhost:3001/')

    cy.get('th#mains').should('be.visible')
    cy.get('button#add').should('be.visible')
    cy.get('button#minus').should('be.visible')
    cy.get('td#numberOfItems').should('be.visible')
    cy.get('button#plus').should('be.visible')

  })

  it('user can see dessert', () => {
    cy.visit('http://localhost:3001/')

    cy.get('th#dessert').should('be.visible')
    cy.get('button#add').should('be.visible')
    cy.get('button#minus').should('be.visible')
    cy.get('td#numberOfItems').should('be.visible')
    cy.get('button#plus').should('be.visible')
  })
  it('user can see beverage', () => {
    cy.visit('http://localhost:3001/')

    cy.get('th#beverage').should('be.visible')
    cy.get('button#add').should('be.visible')
    cy.get('button#minus').should('be.visible')
    cy.get('td#numberOfItems').should('be.visible')
    cy.get('button#plus').should('be.visible')
  })
} )

