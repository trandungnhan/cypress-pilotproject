describe('Verify Welcome message', () => {
    
    it('Verify Welcome message', () => {
        cy.visit("https://magento.softwaretestingboard.com/")        
        cy.get(".panel .not-logged-in").should('have.text', "Default welcome msg!")

    })
});