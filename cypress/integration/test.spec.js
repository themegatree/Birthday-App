describe("Birthday: ", function() {
    it("Can we add name", function() {
        cy.visit("/")
        cy.get("#title").should("Contain", "Hello there!")
        cy.get("#name-input").type("Shivam")
        cy.get("#submit-button").click()
        cy.get("#name-output").should("contain", "Shivam")
        })
})