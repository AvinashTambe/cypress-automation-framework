import HomePage from "../../support/pages/HomePage";

describe('HomePage Test Suite', () => {

    beforeEach(() => {
        cy.launchFlipkart();
    });

    it('Verify all the elements on the home page', () => {
        HomePage.getLogo().should('be.visible');
        HomePage.getSearchBox().should('be.visible');
        HomePage.getSearchButton().should('be.visible');
        HomePage.getLoginLink().should('be.visible');
        HomePage.getCartLink().should('be.visible');
        HomePage.getResellerLink().should('be.visible');
        HomePage.getMoreLink().should('be.visible');
    });


});