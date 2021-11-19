/* eslint-disable no-undef */
describe('User can see list of job experience and previous education')
beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#cv-tab').click()
  })

  it('is expected to display job experience', () => {
    cy.get("#cv_history-1").within (() => {
        cy.get('.header').should('contain', 'My job experience')
        cy.get('.image').should('exist')
        cy.get('descriptiom').should('contain', 'Brief job history')
    
    
    }
    } 