import SearchProduct from "../../support/pages/SearchProduct";

describe('Search Product Test Suite', () => {
    
    
    beforeEach(() => {
        cy.launchFlipkart();
    });

    // Load search keys from JSON
    it('Search using data from fixture file', () => {
        cy.fixture('testData/searchData.json').then((searchTests) => {
          searchTests.forEach((test) => {
            cy.log(`🔍 Searching for: ${test.searchKey}`);
      
            SearchProduct.enterSearchText(test.searchKey);
            SearchProduct.clickSearchButton();
      
            // Wait for results to load (you can replace this with better wait conditions if needed)
            cy.wait(2000);
      
            // Use your custom validation command
            SearchProduct.validateSearch(test.searchKey);
          });
        });
      });
      

    it('Seach with Valid product name and apply price filter', () => {
        const searchKey = "Vivo"; // Valid product name
        SearchProduct.enterSearchText(searchKey); // Enter the search text
        SearchProduct.clickSearchButton(); // Click the search button
        SearchProduct.minimumPricButton('₹10000')// Select minimum price filter
        SearchProduct.maximumPriceButton('₹30000') // Select maximum price filter
        cy.wait(2000); // Wait for the price filter to apply
        SearchProduct.filterApplied()// Check if the filter is applied
        SearchProduct.validateSearch(searchKey); // Validate the search results
    }); 

}); 