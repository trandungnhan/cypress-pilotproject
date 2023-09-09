/// <reference types="cypress" />
const HomePage = require('../pages/TheMagentoPage/HomePage');
const PaymentPage = require('../pages/TheMagentoPage/PaymentPage');
const SearchPage = require('../pages/TheMagentoPage/SearchPage');
const ShippingPage = require('../pages/TheMagentoPage/ShippingPage');
let homePage = new HomePage();
let searchPage = new SearchPage();
let shippingPage = new ShippingPage();
let paymentPage = new PaymentPage();

context('The Magento Page', () => {

    beforeEach(() => {
        homePage.open();
    });

    it('Verify welcome message', () => {
        homePage.verifyWelcomeMessage("Default welcome msg!");
    });

    it('Verify search pants', () => {
        homePage.searchPants();
        searchPage.verifyNotification("Search results for: 'pants'");
    })

    it('Verify number of product', () => {
        homePage.searchPants();
        searchPage.verifyNotification("Search results for: 'pants'");
        searchPage.addFirstProductToCart();
        searchPage.verifyTotalItems(1);
        searchPage.addSecondProductToCart();
        searchPage.verifyTotalItems(2);
    });

    it('Verify information of product', () => {
        homePage.searchPants();
        searchPage.addProductsToCart();
        shippingPage.navigateToShippingPage();
        shippingPage.viewDetailsFirstProduct();
        shippingPage.verifyFirstProductName("Caesar Warm-Up Pant");
        shippingPage.verifyFirstProductSize("32");
        shippingPage.verifyFirstProductColor("Black");
        shippingPage.viewDetailsSecondProduct();
        shippingPage.verifySecondProductName("Aether Gym Pant ");
        shippingPage.verifySecondProductSize("33");
        shippingPage.verifySecondProductColor("Brown");
    });

    it('Verify order total price', () => {
        homePage.searchPants();
        searchPage.addProductsToCart();
        shippingPage.navigateToShippingPage();
        shippingPage.fillShippingAddress("test@gmail.net", "Tuan", "Nguyen", "On1",
            "26/2 Pham Van Chieu", "Ho Chi Minh", "99999", "0909090909");
        shippingPage.selectRegion("Alaska");
        shippingPage.selectCountry("United States");
        shippingPage.selectFlatrareMethod();
        paymentPage.navigateToPaymentpage();
        paymentPage.verifyTotalPrice("$119.00");
    });
});