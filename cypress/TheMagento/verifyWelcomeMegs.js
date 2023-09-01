describe('TC1 - Verify Welcome message', () => {
    
    it('shoule be able to verify Welcome message', () => {
        cy.visit("https://magento.softwaretestingboard.com/")        
        cy.get(".panel .not-logged-in").should('have.text', "Default welcome msg!")

    })
});