import { HomePageLocators } from "@support/locators";

class HomePage {
    
   getLogo = function () {
        return cy.xpath(HomePageLocators.Logo); //Get the logo element
    };
    
    getSearchBox = function () {
        return cy.get(HomePageLocators.SearchBox); //Get the search box element
    };
    
    getSearchButton = function () {
        return cy.get(HomePageLocators.SearchButton); //Get the search button element
    };
    
    getLoginLink = function () {
        return cy.get(HomePageLocators.LoginLink); //Get the login link element
    };
    
    getCartLink = function () {
        return cy.get(HomePageLocators.CartLink); //Get the cart link element
    };
    
    getResellerLink = function () {
        return cy.xpath(HomePageLocators.ResellerLink); //Get the reseller link element
    };
    getMoreLink = function () {
        return cy.get(HomePageLocators.MoreLink); //Get the more link element
    };
    
    getCategoriesLink = function () {
        return cy.get(HomePageLocators.CategoriesLink); //Get the categories link element
    };
   
    getBanner = function () {
        return cy.get(HomePageLocators.Banner); //Get the banner element
    };
};

exports.default = new HomePage();