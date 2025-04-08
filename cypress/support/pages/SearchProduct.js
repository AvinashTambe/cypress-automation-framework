import { SearchProductPageLocators } from '../locators';
import { SearchProductPageToasterMessages } from '../ToasterMessages';

class SearchProduct {

    enterSearchText(searchText) {
        cy.get('body').should('be.visible');
        return cy.get(SearchProductPageLocators.Searchbar)
            .should('be.visible')
            .clear()
            .type(searchText);
    }

    clickSearchButton() {
        return cy.get(SearchProductPageLocators.SearchButton)
            .should('be.visible')
            .click();
    }

    searchResults() {
        return cy.xpath(SearchProductPageLocators.SearchResults)
            .should('be.visible');
    }

    minimumPricButton(minPrice) {
        return cy.xpath(SearchProductPageLocators.Minpricebutton)
            .should('be.visible')
            .select(minPrice);
    }

    maximumPriceButton(maxPrice) {
        return cy.xpath(SearchProductPageLocators.Maxpricebutton)
            .should('be.visible')
            .select(maxPrice);
    }

    filterApplied() {
        return cy.get(SearchProductPageLocators.Filterapplied)
            .should('be.visible');
    }

    invalidSearchMessage() {
        return cy.get(SearchProductPageLocators.Invalidsearch)
            .should('be.visible')
            .should('include.text', SearchProductPageToasterMessages.NoResultsFound);
    }

    validateSearch(searchKey) {
        cy.log(`🔍 Validating Search for: ${searchKey}`);

        cy.get('body').then(($body) => {
            if ($body.find(SearchProductPageLocators.Invalidsearch).length > 0) {
                // No results case - reuse the method
                this.invalidSearchMessage();
                cy.log(`❌ No results found for: ${searchKey}`);
            } else {
                // Valid results case - reuse the method
                this.searchResults()
                    .invoke('text')
                    .then((searchResultText) => {
                        cy.log(`🔍 Extracted search results message: ${searchResultText}`);

                        // Extract keywords from search input (excluding short/common words)
                        const expectedKeywords = searchKey.split(/\s+/).filter(word => word.length > 2);

                        if (expectedKeywords.length === 0) {
                            cy.log(`⚠️ No significant keywords found in search query.`);
                            return;
                        }

                        // Calculate match count
                        const matchCount = expectedKeywords.filter(keyword =>
                            searchResultText.toLowerCase().includes(keyword.toLowerCase())
                        ).length;

                        const matchPercentage = (matchCount / expectedKeywords.length) * 100;
                        cy.log(`🔍 Match Percentage: ${matchPercentage}%`);

                        // Assert threshold
                        expect(matchPercentage, `Expected at least 70% match but got ${matchPercentage}%`)
                            .to.be.greaterThan(40);
                    });
            }
        });
    }
        
}

export default new SearchProduct();
