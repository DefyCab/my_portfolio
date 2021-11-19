/* eslint-disable no-undef */
describe('User can see list of job experience and previous education')
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('#cv-tab').click()
  })

  it('is expected to display job experience', () => {
    cy.get("#cvhistory-1").within (() => {
        cy.get('.header').should('contain', 'My job experience')
        cy.get('.image').should('exist')
        cy.get('descriptiom').should('contain', 'A brief history of a working man')
    })
    it('is expected to display the first project', () => {
        cy.get('#cvhistory-2').within(() => {
            cy.get('.header').should('contain', 'My Education')
            cy.get('.image').should('exist')
            cy.get('.description').should('contain', 'The reniassance man project')
        })
      })
})  
        