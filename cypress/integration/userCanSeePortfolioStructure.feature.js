/* eslint-disable no-undef */
describe('Portfolio interface', () => {
  it('succesfully renders', () => {
    cy.visit('http://localhost:3000')
    cy.get('#header').should('contain', 'My Portfolio')
    cy.get('#footer').should('contain', 'Made with React 17.0.2')
    cy.get('#hello').should('contain', 'Hello and welcome to my portfolio')
  })
})
