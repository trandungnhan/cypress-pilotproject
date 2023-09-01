describe('Verify number of product', () => {
    
    it('Verify number of product', () => {
        cy.visit("https://magento.softwaretestingboard.com/")

        // Use enter Key to overcome the issue that sometimes search button is disabled
        cy.get("input[id='search']").type("pants{enter}")

        //cy.get("button[title='Search']").should('be.visible').click({force:true});
        
        cy.get("span[class='base']").should('have.text', "Search results for: 'pants'")

        //cy.get("[class='products list items product-items'] li:first-child").trigger('mouseover')
        cy.get("[class='products list items product-items'] li:first-child").scrollIntoView().trigger('mouseover')

        cy.get("[class='products list items product-items'] li:nth-of-type(1) [option-label='32']").click()
        cy.get("[class='products list items product-items'] li:nth-of-type(1) [option-label='Black']").click()

        // add time sleep
        //cy.wait(2000)
        cy.get("[class='products list items product-items'] li:nth-of-type(1) [title='Add to Cart']").should('be.visible').click({force:true});

        cy.get("[class='counter-number']").should('have.text',"1")



    });
});