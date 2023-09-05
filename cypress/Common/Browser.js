class Browser{

    visit(url){
        return cy.visit(url);
    }

    click(element){
        return cy.get(element).should('be.visible').click({force:true});
    }

    maxWindows(){
        return cy.viewport(1920, 1080);

    }

    sendText(element, text){
        return cy.get(element).type(text);
    }

    verifyText(element, text){
        return cy.get(element).should('have.text', text);
    }

    hoverObject(element){
        return cy.get(element).scrollIntoView().trigger('mouseover');
    }

    waitLoading(element){
        return cy.get(element).should('not.exist');
    }

    selectOption(element, option){
        return cy.get(element).select(option);
    }

}
module.exports = Browser;