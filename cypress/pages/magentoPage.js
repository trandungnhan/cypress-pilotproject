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
const searchButtonLoading = "button[disabled]"


let browser = new Browser();

class magentoPage extends Browser{

    open(){
        browser.visit("https://magento.softwaretestingboard.com/");
    }

    searchPants(){
        browser.sendText(searchTextBox,"pants");
        if (this.waitSearchButtonLoading()==true){
            browser.click(searchButton);
        } else{
            browser.sendText(searchTextBox,"{enter}");
        }
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

    waitCounterQtyLoading(){
        browser.waitLoading(counterQtyLoading)
    }

    waitSearchButtonLoading(){
        browser.waitLoading(searchButtonLoading)
    }

}
module.exports = magentoPage;
