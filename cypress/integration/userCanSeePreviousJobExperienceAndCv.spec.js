/* eslint-disable no-undef */
describe('User can access My Cv tab', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  describe('to My Cv tab and it', () => {
    beforeEach(() => {
      cy.get('#cv-tab').click()
    })
    it('displays Cv header', () => {
      cy.get('#cv-header').should('contain', 'Cv')
    })
    it('displays component name in url', () => {
      cy.url().should('contain', 'Cv')
    })
  })
})
