import { SearchProductPageLocators } from '../locators/SearchProductPageLocators';
import { SearchProductPageToasterMessages } from '../locators/SearchProductPageToasterMessages';

class SearchProduct {
  

    enterSearchText(searchText) {
        this.getSearchInputField(SearchProductPageLocators)
            .should('be.visible') //Check if the search input field is visible
            .clear() //Clear the input field
            .type(searchText); //Enter the search text
    }

    clickSearchButton() {
        return cy.get(SearchProductPageLocators.clickSearchButton)
            .should
            .click(); //Click the search button
    }

    searchResults() {
        return cy.xpath(SearchProductPageLocators.SearchResults)
            .should('be.visible'); //Get the search results container
    }

    minimumPricButton(minPrice) {
        return cy.xpath(SearchProductPageLocators.Minpricebutton)
            .should('be.visible') //Get the minimum price filter
            .select(minPrice); //Select the minimum price filter
    }

    maximumPriceButton(maxPrice) {
        return cy.xpath(SearchProductPageLocators.Maxpricebutton)
            .should('be.visible') //Get the maximum price filter
            .select(maxPrice); //Select the maximum price filter
    }

    filterApplied() {
        return cy.xpath(SearchProductPageLocators.filterApplied)
            .should('be.visible'); //Get the filter applied message
    }

    invalidSearchMessage() {
        return cy.get(SearchProductPageLocators.Invalidsearch)
            .should('be.visible') //Get the invalid search message 
            .should('contain', SearchProductPageToasterMessages.NoResultsFound); //Check if the message contains 'No results found'
    }
}

export default new SearchProduct();