describe("User can see list of projects", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#projects-tab").click();
    });

    it ("is expected to display the first project", () => {
        cy.get("#project-1").within(() => {
            cy.get(".image").should("exist")
            cy.get(".header").should("contain", "My First Website")
            cy.get(".description").should("contain", "This was my first project")

        })
    })

    it ("is expected to display the second project", () => {
        cy.get("#project-2").within(() => {
            cy.get(".image").should("exist")
            cy.get(".header").should("contain", "FizzBuzz")
            cy.get(".description").should("contain", "Would you mind if I rub your curly brackets?")
        })
    })
    it ("is expected to display the third project", () => {
        cy.get("#project-1").within(() => {
            cy.get(".image").should("exist")
            cy.get(".header").should("contain", "My third project")
            cy.get(".description").should("contain", "This was nice")
        )
    })
})

