describe('Verify order total price', () => {
    
    it('Verify order total price', () => {
        
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
        cy.wait(5000)

        cy.get("[class='counter qty _block-content-loading']").should('not.exist');

        cy.get("[class='action showcart']").should('be.visible').click({force:true});

        cy.get("#top-cart-btn-checkout").click()

        //add time sleep
        cy.wait(5000)

        cy.get("[class='loading-mask']").should('not.exist');

        cy.get("[class='field required'] #customer-email").type("test@gmail.net");
        cy.get("[name='firstname']").type("Tuan");
        cy.get("[name='lastname']").type("Nguyen");
        cy.get("[name='company']").type("On1");
        cy.get("[name='street[0]']").type("26/2 Pham Van Chieu");
        cy.get("[name='city']").type("Ho Chi Minh");
        cy.get("[name='postcode']").type("99999");
        cy.get("[name='telephone']").type("0909090909");


        cy.get("[name='region_id']").select("Alaska");
        cy.get("[name='country_id']").select("United States");


        cy.get("[value='flatrate_flatrate']").click();
        cy.get(".button").click();

        cy.get("[class='grand totals'] .price").should('have.text',"$119.00")

    })
});