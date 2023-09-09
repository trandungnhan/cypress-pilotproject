/// <reference types="cypress" />
const MagentoPage = require('../pages/magentoPage')
let magentoPage = new MagentoPage();

context('The Magento Page', () => {

    beforeEach(() => {
        magentoPage.open();
    });

    it('Verify welcome message', () => {
        magentoPage.verifyWelcomeMessage("Default welcome msg!");
    });
    
    it('Verify search pants', () => {
        magentoPage.searchPants();
        magentoPage.verifyNotification("Search results for: 'pants'");
    })

    it('Verify number of product', () => {
        magentoPage.searchPants();
        magentoPage.verifyNotification("Search results for: 'pants'");
        magentoPage.addFirstProductToCart();
        magentoPage.verifyTotalItems(1);
        magentoPage.addSecondProductToCart();
        magentoPage.verifyTotalItems(2);
    });
});