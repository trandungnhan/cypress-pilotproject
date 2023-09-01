describe('TC2 - Verify Search Pants', () => {

    it('Should be able to search pants', () => {
        
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("input[id='search']").type("pants")
        cy.get("button[title='Search']").should('be.enabled').click({force:true});
        
        cy.get("span[class='base']").should('have.text', "Search results for: 'pants'")

        
        
    })
    
});