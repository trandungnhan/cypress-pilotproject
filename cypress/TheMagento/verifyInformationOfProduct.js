describe('Verify information of product', () => {
    
    it('Verify information of product', async () => {

        cy.visit("https://magento.softwaretestingboard.com/")

        // Use enter Key to overcome the issue that sometimes search button is disabled
        cy.get("input[id='search']").should('be.visible').type("pants{enter}")

        //cy.get("button[title='Search']").should('be.visible').click({force:true});
        
        cy.get("span[class='base']").should('have.text', "Search results for: 'pants'")

        //cy.get("[class='products list items product-items'] li:first-child").trigger('mouseover')
        cy.get("[class='products list items product-items'] li:first-child").scrollIntoView().trigger('mouseover')

        cy.get("[class='products list items product-items'] li:nth-of-type(1) [option-label='32']").click()
        cy.get("[class='products list items product-items'] li:nth-of-type(1) [option-label='Black']").click()
        cy.get("[class='products list items product-items'] li:nth-of-type(1) button[title='Add to Cart']").should('be.visible').click({force:true});

        cy.get("[class='products list items product-items'] li:nth-of-type(2)").scrollIntoView().trigger('mouseover')
        cy.get("[class='products list items product-items'] li:nth-of-type(2) [option-label='33']").click()
        cy.get("[class='products list items product-items'] li:nth-of-type(2) [option-label='Brown']").click()
        cy.get("[class='products list items product-items'] li:nth-of-type(2) button[title='Add to Cart']").should('be.visible').click({force:true});

        //add time sleep
        cy.wait(10000)

        cy.get("[class='action showcart']").should('be.visible').click({force:true});

        cy.get("[class='counter qty _block-content-loading']").should('not.exist');

        cy.get("#top-cart-btn-checkout").click()

        cy.get("[class='loading-mask']").should('not.exist');

        cy.get(".minicart-items li:nth-of-type(1) .product-item-name").should('have.text',"Caesar Warm-Up Pant")

        cy.get(".minicart-items li:nth-of-type(2) .product-item-name").contains("Aether Gym Pant")

        // Turn on 1
        cy.get(".minicart-items li:nth-of-type(1) .toggle").click()

        cy.get("[class='product options active'] .values:nth-of-type(1)").should('have.text',"32")

        cy.get("[class='product options active'] .values:nth-of-type(2)").should('have.text',"Black")

        // Turn off 1
        cy.get(".minicart-items li:nth-of-type(1) .toggle").click()

        

        // Turn on 2
        cy.get(".minicart-items li:nth-of-type(2) .toggle").click()

        cy.get("[class='product options active'] .values:nth-of-type(1)").should('have.text',"33")

        cy.get("[class='product options active'] .values:nth-of-type(2)").should('have.text',"Brown")


    })
});