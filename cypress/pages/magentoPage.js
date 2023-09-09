const Browser = require("../Common/Browser");
const searchTextBox = "input[id='search']";
const searchButton = "button[title='Search']";
const notification = "span[class='base']";
const welcomeMessage = ".panel .not-logged-in";
const firstProduct = "[class='products list items product-items'] li:first-child";
const firstSize = "[class='products list items product-items'] li:nth-of-type(1) [option-label='32']";
const firstColor = "[class='products list items product-items'] li:nth-of-type(1) [option-label='Black']";
const firstAddToCartButton = "[class='products list items product-items'] li:nth-of-type(1) [title='Add to Cart']";
const secondProduct = "[class='products list items product-items'] li:nth-of-type(2)";
const secondSize = "[class='products list items product-items'] li:nth-of-type(2) [option-label='33']";
const secondColor = "[class='products list items product-items'] li:nth-of-type(2) [option-label='Brown']";
const secondAddToCartButton = "[class='products list items product-items'] li:nth-of-type(2) [title='Add to Cart']";
const counterNumber = "[class='counter-number']";
const counterQtyLoading = "[class='counter qty _block-content-loading']";
const searchButtonLoading = "button[disabled]";
const actionShowcartActive = "[class='action showcart']";
const checkoutButton = "#top-cart-btn-checkout";
const checkoutPageLoading = "[class='loading-mask']";
const detailsFirstProduct = ".minicart-items li:nth-of-type(1) .toggle";
const firstProductName = ".minicart-items li:nth-of-type(1) .product-item-name";
const firstProductSize = ".minicart-items li:nth-of-type(1) .values:nth-of-type(1)"
const firstProductColor = ".minicart-items li:nth-of-type(1) .values:nth-of-type(2)"
const detailsSecondProduct = ".minicart-items li:nth-of-type(2) .toggle";
const secondProductName = ".minicart-items li:nth-of-type(2) .product-item-name";
const secondProductSize = ".minicart-items li:nth-of-type(2) .values:nth-of-type(1)"
const secondProductColor = ".minicart-items li:nth-of-type(2) .values:nth-of-type(2)"
const emailTextbox = "[class='field required'] #customer-email"
const fisrtnameTextbox  = "[name='firstname']";
const lastnameTextbox  = "[name='lastname']";
const companyTextbox  = "[name='company']";
const streetTextbox  = "[name='street[0]']";
const cityTextbox  = "[name='city']";
const postcodeTextbox  = "[name='postcode']";
const telephoneTextbox  = "[name='telephone']";
const regionDropdownList = "[name='region_id']";
const countryDropdownList  = "[name='country_id']";
const flatrare = "[value='flatrate_flatrate']";
const totalPrice = "[class='grand totals'] .price";
const nextButton = ".button";



let browser = new Browser();

class magentoPage extends Browser{

    open(){
        browser.visit("https://magento.softwaretestingboard.com/");
    }

    //TODO
    searchPants(){
        // browser.sendText(searchTextBox,"pants");
        // this.waitSearchButtonLoading()
        // browser.click(searchButton);
        browser.sendText(searchTextBox,"pants{enter}");

    }

    addFirstProductToCart(){
        browser.hoverObject(firstProduct);
        browser.click(firstSize);
        browser.click(firstColor)
        browser.click(firstAddToCartButton)
    }

    addSecondProductToCart(){
        browser.hoverObject(secondProduct);
        browser.click(secondSize);
        browser.click(secondColor)
        browser.click(secondAddToCartButton)
    }
    
    addProductsToCart(){
        this.addFirstProductToCart();
        this.addSecondProductToCart();
    }

    navigateToShippingPage(){
        this.waitCounterQtyLoading();
        browser.click(actionShowcartActive);
        browser.click(checkoutButton);
        this.waitCheckoutPageLoading();
    }

    navigateToPaymentpage(){
        browser.click(nextButton);
    }

    fillShippingAddress(email, firstname, lastname, company, street, city, postcode, telephone){
        browser.sendText(emailTextbox, email)
        browser.sendText(fisrtnameTextbox, firstname)
        browser.sendText(lastnameTextbox, lastname)
        browser.sendText(companyTextbox, company)
        browser.sendText(streetTextbox, street)
        browser.sendText(cityTextbox, city)
        browser.sendText(postcodeTextbox, postcode)
        browser.sendText(telephoneTextbox, telephone )
    }

    selectRegion(region){
        browser.selectOption(regionDropdownList, region)
    }

    selectCountry(country){
        browser.selectOption(countryDropdownList, country)
    }

    selectFlatrareMethod(){
        browser.click(flatrare)
    }

    viewDetailsFirstProduct(){
        browser.click(detailsFirstProduct)
    }

    viewDetailsSecondProduct(){
        browser.click(detailsSecondProduct)
    }

    verifyFirstProductName(expectedResult){
        browser.verifyText(firstProductName, expectedResult)
    }

    verifyFirstProductSize(expectedResult){
        browser.verifyText(firstProductSize, expectedResult)
    }

    verifyFirstProductColor(expectedResult){
        browser.verifyText(firstProductColor, expectedResult)
    }
    
    verifySecondProductName(expectedResult){
        browser.verifyText(secondProductName, expectedResult)
    }

    verifySecondProductSize(expectedResult){
        browser.verifyText(secondProductSize, expectedResult)
    }

    verifySecondProductColor(expectedResult){
        browser.verifyText(secondProductColor, expectedResult)
    }

    verifyNotification(expectedResult){
        browser.verifyText(notification, expectedResult);
    }

    verifyWelcomeMessage(expectedResult){
        browser.verifyText(welcomeMessage, expectedResult)
    }

    verifyTotalItems(expectedResult){
        this.waitCounterQtyLoading();
        browser.verifyText(counterNumber, expectedResult)
    }

    verifyTotalPrice(expectedResult){
        browser.verifyText(totalPrice, expectedResult)
    }

    waitCounterQtyLoading(){
        browser.waitLoading(counterQtyLoading)
    }

    waitSearchButtonLoading(){
        browser.waitLoading(searchButtonLoading)
    }

    waitCheckoutPageLoading(){
        browser.waitLoading(checkoutPageLoading)
    }

}
module.exports = magentoPage;
