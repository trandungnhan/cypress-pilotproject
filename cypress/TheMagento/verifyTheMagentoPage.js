/// <reference types="cypress" />
const MagentoPage = require('../pages/magentoPage')
let magentoPage = new MagentoPage();

context('The Magento Page', () => {

    beforeEach(() => {
        magentoPage.open();
    });
    
    it('Verify search pants', () => {
        magentoPage.searchPants();
        magentoPage.verifyNotification("Search results for: 'pants'");
    })
});