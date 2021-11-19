/* eslint-disable no-undef */
describe('User can access My CV tab', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  describe('to My CV tab and it', () => {
    beforeEach(() => {
      cy.get('#cv-tab').click()
    })
    it('displays CV header', () => {
      cy.get('#cv-header').should('contain', 'CV')
    })
    it('displays component name in url', () => {
      cy.url().should('contain', 'CV')
    })
  })
})
