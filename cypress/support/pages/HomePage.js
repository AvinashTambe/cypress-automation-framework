import { HomePageLocators } from "@support/locators";// Importing the locators for the home page

class HomePage {
    
   getLogo () {
        return cy.xpath(HomePageLocators.Logo).should('be.visible'); //Get the logo element
    };
    
    getSearchBox () {
        return cy.get(HomePageLocators.SearchBox).should('be.visible'); //Get the search box element
    };
    
    getSearchButton () {
        return cy.get(HomePageLocators.SearchButton).should('be.visible'); //Get the search button element
    };
    
    getLoginLink () {
        return cy.get(HomePageLocators.LoginLink).should('be.visible'); //Get the login link element
    };
    
    getCartLink () {
        return cy.get(HomePageLocators.CartLink).should('be.visible'); //Get the cart link element
    };
    
    getResellerLink () {
        return cy.xpath(HomePageLocators.ResellerLink).should('be.visible'); //Get the reseller link element
    };
    getMoreLink () {
        return cy.get(HomePageLocators.MoreLink).should('be.visible'); //Get the more link element
    };
    
    getCategoriesLink (){
        return cy.get(HomePageLocators.CategoriesLink)
            .should('be.visible')
            .and('have.length', 9); //Get the categories link element
    };
   
    getBanner = function () {
        return cy.get(HomePageLocators.Banner)
            .should('be.visible') //Get the banner element
            .not('[data-clone="true"]')  // Exclude cloned ones
            .should('have.length', 5); // Check for 5 banners
    };
};

export default new HomePage();