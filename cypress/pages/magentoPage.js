const Browser = require("../Common/Browser");
const searchTextBox = "input[id='search']";
const searchButton = "button[title='Search']";
const notification = "span[class='base']";

let browser = new Browser();

class magentoPage extends Browser{

    open(){
        browser.visit("https://magento.softwaretestingboard.com/");
    }

    searchPants(){
        browser.sendText(searchTextBox,"pants");
        browser.click(searchButton);

    }

    verifyNotification(expectedResult){
        browser.verifyText(notification, expectedResult);
    }

}
module.exports = magentoPage;
