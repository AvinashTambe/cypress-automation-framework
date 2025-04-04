import SearchProduct from "../../support/pages/SearchProduct";

describe('Search Product Test Suite', () => {
    
    
    beforeEach(() => {
        cy.launchFlipkart();
    });

    it('Search with invalid product name', () => {
        const searchKey = "InvalidProductName12345"; // Invalid product name
        SearchProduct.getSearchInputField().should('be.visible'); // Get the search input field
        SearchProduct.enterSearchText(searchKey); // Enter the search text
        SearchProduct.clickSearchButton(); // Click the search button
        cy.wait(2000); // Wait for the search results to load
        cy.validateSearch(searchKey); // Validate the search results
    });

    it('Search with Emojis', () => {
        const searchKey = "📱"; // Emojis
        SearchProduct.getSearchInputField().should('be.visible'); // Get the search input field
        SearchProduct.enterSearchText(searchKey); // Enter the search text
        SearchProduct.clickSearchButton(); // Click the search button
        cy.wait(2000); // Wait for the search results to load
        cy.validateSearch(searchKey); // Validate the search results
    });

    it('Search long text', () => {
        const searchKey = "Samsung Galaxy S24 Ultra 5G 12GB RAM 512GB Storage with 200MP Camera, 5000mAh Battery, Dynamic AMOLED 2X Display, Snapdragon 8 Gen 3 Processor, S Pen Support, AI-powered Photography, and 4 Years of Software Updates"; // Long text
        SearchProduct.getSearchInputField().should('be.visible'); // Get the search input field
        SearchProduct.enterSearchText(searchKey); // Enter the search text
        SearchProduct.clickSearchButton(); // Click the search button
        cy.wait(2000); // Wait for the search results to load
        cy.validateSearch(searchKey); // Validate the search results
    });

    it('Search with special characters only', () => {
        const searchKey = "!@#$%^&*()"; // Special characters
        SearchProduct.getSearchInputField().should('be.visible'); // Get the search input field
        SearchProduct.enterSearchText(searchKey); // Enter the search text
        SearchProduct.clickSearchButton(); // Click the search button
        cy.wait(2000); // Wait for the search results to load
        cy.validateSearch(searchKey); // Validate the search results
    });

    it('Search with numbers only', () => {
        const searchKey = "1234567890"; // Numbers only
        SearchProduct.getSearchInputField().should('be.visible'); // Get the search input field
        SearchProduct.enterSearchText(searchKey); // Enter the search text
        SearchProduct.clickSearchButton(); // Click the search button
        cy.wait(2000); // Wait for the search results to load
        cy.validateSearch(searchKey); // Validate the search results
    });

    it('Search with valid product name and special character', () => {
        const searchKey = "iPhone @ 15"; // Valid product name
        SearchProduct.getSearchInputField().should('be.visible'); // Get the search input field
        SearchProduct.enterSearchText(searchKey); // Enter the search text
        SearchProduct.clickSearchButton(); // Click the search button
        cy.wait(2000); // Wait for the search results to load
        cy.validateSearch(searchKey); // Validate the search results
    });

    it('Seach with Valid product name and apply price filter', () => {
        const searchKey = "Vivo"; // Valid product name
        SearchProduct.getSearchInputField().should('be.visible'); // Get the search input field
        SearchProduct.enterSearchText(searchKey); // Enter the search text
        SearchProduct.clickSearchButton(); // Click the search button
        cy.wait(2000); // Wait for the search results to load
        SearchProduct.minimumPricButton().select('₹10000'); // Select minimum price filter
        SearchProduct.maximumPriceButton().select('₹30000'); // Select maximum price filter
        cy.wait(2000); // Wait for the price filter to apply
        SearchProduct.filterApplied().should('be.visible'); // Check if the filter is applied
    });

});